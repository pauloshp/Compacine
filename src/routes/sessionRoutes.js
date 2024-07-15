const express = require('express');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

router.post('/create-session', sessionController.createSession);
router.get('/sessions', sessionController.getAllSessions);
router.put('/sessions/:id', sessionController.updateSession);
router.delete('/sessions/:id', sessionController.deleteSession);
router.post('/create-ticket', sessionController.createTicket);
router.get('/tickets', sessionController.getAllTickets);
router.put('/tickets/:id', sessionController.updateTicket);
router.delete('/tickets/:id', sessionController.deleteTicket);

module.exports = router;
