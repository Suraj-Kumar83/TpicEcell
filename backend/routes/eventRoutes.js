const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addEvent, getEvents } = require('../controllers/eventController');

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create new event
router.post('/events', upload.single('image'), addEvent);

// Get all events
router.get('/events', getEvents);

module.exports = router;
