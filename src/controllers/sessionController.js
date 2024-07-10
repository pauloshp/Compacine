const SessionService = require('../services/sessionService');
const sessionService = new SessionService();

class SessionController {
  async createSession(req, res) {
    const { time, capacity, room, movieId } = req.body;

    try {
      const session = await sessionService.createSession({ time, capacity, room, movieId });
      res.json(session);
    } catch (error) {
      console.error("Error creating session:", error);
      res.status(500).json({ error: "Failed to create session." });
    }
  }

  async createTicket(req, res) {
    const { seat, price, sessionId } = req.body;

    try {
      const ticket = await sessionService.createTicket({ seat, price, sessionId });
      res.json(ticket);
    } catch (error) {
      console.error("Error creating ticket:", error);
      res.status(500).json({ error: "Failed to create ticket." });
    }
  }
}

module.exports = new SessionController();
