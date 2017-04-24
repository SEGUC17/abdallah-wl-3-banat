var multer = require('multer');
var path = require('path');
var crypto = require('crypto');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        const buf = crypto.randomBytes(48);
        cb(null, Date.now() + buf.toString('hex') + path.extname(file.originalname));
    }
    });
    const upload = multer({
    storage: storage
});
module.exports = upload ;
