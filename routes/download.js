const express = require('express');
const multer = require('multer');
const router = express.Router();
const File = require('../models/files');
const { v4: uuid4 } = require('uuid');


router.get('/:uuid', async (req, res) => {
    const file = await File.findOne({ uuid: req.params.uuid })
    if (!file) {
        return res.render('download', { error: 'Link has expired.' })
    }

    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath)

})


module.exports = router