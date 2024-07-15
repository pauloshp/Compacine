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

  async updateSession(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      const updatedSession = await sessionService.updateSession(id, data);
      res.json(updatedSession);
    } catch (error) {
      console.error("Erro ao atualizar sessão:", error);
      res.status(500).json({ error: "Falha ao atualizar sessão." });
    }
  }

  async deleteSession(req, res) {
    const { id } = req.params;

    try {
      const deletedSession = await sessionService.deleteSession(id);
      res.json(deletedSession);
    } catch (error) {
      console.error("Erro ao deletar sessão:", error);
      res.status(500).json({ error: "Falha ao deletar sessão." });
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

  async updateTicket(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      const updatedTicket = await sessionService.updateTicket(id, data);
      res.json(updatedTicket);
    } catch (error) {
      console.error("Erro ao atualizar ingresso:", error);
      res.status(500).json({ error: "Falha ao atualizar ingresso." });
    }
  }

  async deleteTicket(req, res) {
    const { id } = req.params;

    try {
      const deletedTicket = await sessionService.deleteTicket(id);
      res.json(deletedTicket);
    } catch (error) {
      console.error("Erro ao deletar ingresso:", error);
      res.status(500).json({ error: "Falha ao deletar ingresso." });
    }
  }
}

module.exports = new SessionController();
