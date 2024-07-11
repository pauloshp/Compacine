const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.post('/create-session', sessionController.createSession);
router.get('/sessions', sessionController.getAllSessions);
router.post('/create-ticket', sessionController.createTicket);
router.get('/tickets', sessionController.getAllTickets);

module.exports = router;
