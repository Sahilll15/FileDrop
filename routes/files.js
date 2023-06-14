const express = require('express');
const multer = require('multer');
const router = express.Router();
const File = require('../models/files');
const { v4: uuid4 } = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${uniqueSuffix}.${fileExtension}`);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 1000000 * 100 }, // 100MB
}).single('myfile');

router.post('/', (req, res) => {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            // A multer specific error occurred
            return res.status(500).json({ error: err.message });
        } else if (err) {
            // An unknown error occurred
            return res.status(500).json({ error: err.message });
        }

        if (!req.file) {
            // No file was uploaded
            return res.status(400).json({ error: 'No file uploaded' });
        }

        try {
            const file = new File({
                name: req.file.filename,
                uuid: uuid4(),
                path: req.file.path,
                size: req.file.size,
            });

            const response = await file.save();
            return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}`, uuid: response.uuid });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });
});


router.post('/send', async (req, res) => {
    const { uuid, emailTo, emailFrom } = req.body;
    console.log(req.body)
    console.log("1")
    if (!uuid || !emailTo || !emailFrom) {
        return res.status(422).json({ error: "All fields are required except expiry." })
    }



    try {

        const file = await File.findOne({ uuid: uuid });
        console.log("3");
        file.sender = emailFrom;
        console.log("Sender:", file.sender);
        console.log("Email From:", emailFrom);
        file.receiver = emailTo;
        const response = await file.save();
        console.log("4");
        //send email
        const sendMail = require('../services/emailService');
        sendMail({
            from: emailFrom,
            to: emailTo,
            subject: "FileDrop file sharing",
            text: `${emailFrom} shared a file with you.`,
            html: require('../services/emailTemplate')({
                emailFrom: emailFrom,
                downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}?source=email`
            })
        });
        console.log("5");
        return res.json({ success: true });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ error: "Something went wrong." });
    }

}
)

module.exports = router;
