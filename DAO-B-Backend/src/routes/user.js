const express = require('express');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

const upload = multer({ storage });

const {
  register, login, get, getAll, update, addWallet,
  uploadPicture, getImageUrl, addNotification, addVoteSuggestedBonus, createSuggestedBonus,
} = require('../controllers/user');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', get);
router.get('/', getAll);
router.patch('/:id', update);
router.post('/wallet/:id', addWallet);
router.post('/:id/upload', upload.single('image'), uploadPicture);
router.get('/image/:id', getImageUrl);
router.post('/notification/:id', addNotification);
router.post('/suggestedProposal/:id/add', addVoteSuggestedBonus);
router.post('suggestedProposal/:id/', createSuggestedBonus);

// {`data:image/jpeg;base64,${data}`}

module.exports = router;
