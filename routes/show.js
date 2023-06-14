const router = require('express').Router();
const File = require('../models/files');

router.get('/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const file = await File.findOne({ uuid });
        if (!file) {
            return res.render('download', { error: 'Link has expired.' });
        }
        return res.render('download', {
            uuid: file.uuid,
            fileName: file.name,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        });
    } catch (error) {
        return res.render('download', { error: 'Something went wrong.' });
    }
});

module.exports = router;
