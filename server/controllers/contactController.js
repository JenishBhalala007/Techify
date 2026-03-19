const Message = require('../models/Message');

// @desc    Save a contact form submission
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
    const { name, email, whatsappNumber, subject, message } = req.body;

    try {
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const newMessage = new Message({
            name,
            email,
            whatsappNumber,
            subject,
            message
        });

        const savedMessage = await newMessage.save();

        res.status(201).json({
            message: 'Your message has been sent successfully',
            data: {
                id: savedMessage._id,
                status: savedMessage.status
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({}).sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    submitContactForm,
    getMessages
};
