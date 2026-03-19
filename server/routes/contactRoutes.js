const express = require('express');
const router = express.Router();
const { submitContactForm, getMessages } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', submitContactForm);
router.get('/', protect, admin, getMessages);

module.exports = router;
