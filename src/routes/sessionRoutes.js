const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.post('/create-session', sessionController.createSession);
router.post('/create-ticket', sessionController.createTicket);

module.exports = router;
