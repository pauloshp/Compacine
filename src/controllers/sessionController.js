const SessionService = require('../services/sessionService');
const sessionService = new SessionService();

class SessionController {
  async createSession(req, res) {
    const { time, capacity, room, movieId } = req.body;

    try {
      const session = await sessionService.createSession({ time, capacity, room, movieId });
      res.json(session);
    } catch (error) {
      console.error("Erro ao criar sessão:", error);
      res.status(500).json({ error: "Falha ao criar sessão." });
    }
  }

  async getAllSessions(req, res) {
    try {
      const sessions = await sessionService.getAllSessions();
      res.json(sessions);
    } catch (error) {
      console.error("Erro ao buscar sessões:", error);
      res.status(500).json({ error: "Falha ao buscar sessões." });
    }
  }

  async createTicket(req, res) {
    const { seat, price, sessionId } = req.body;

    try {
      const ticket = await sessionService.createTicket({ seat, price, sessionId });
      res.json(ticket);
    } catch (error) {
      console.error("Erro ao criar ingresso:", error);
      res.status(500).json({ error: "Falha ao criar ingresso." });
    }
  }

  async getAllTickets(req, res) {
    try {
      const tickets = await sessionService.getAllTickets();
      res.json(tickets);
    } catch (error) {
      console.error("Erro ao buscar ingresso:", error);
      res.status(500).json({ error: "Erro ao buscar ingresso." });
    }
  }
}

module.exports = new SessionController();
