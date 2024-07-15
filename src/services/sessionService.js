const prisma = require('../prismaClient');

class SessionService {
  async createSession(data) {
    try {
      const newSession = await prisma.session.create({
        data: {
          time: new Date(data.time),
          capacity: data.capacity,
          room: data.room,
          movieId: data.movieId,
        },
      });
      return newSession;
    } catch (error) {
      console.error("Erro ao criar sessão:", error);
      throw error;
    }
  }

  async getAllSessions() {
    try {
      return await prisma.session.findMany();
    } catch (error) {
      console.error("Erro ao buscar sessões:", error);
      throw error;
    }
  }

  async updateSession(id, data) {
    try {
      const updatedSession = await prisma.session.update({
        where: { id },
        data,
      });
      return updatedSession;
    } catch (error) {
      console.error("Erro ao atualizar sessão:", error);
      throw error;
    }
  }

  async deleteSession(id) {
    try {
      const deletedSession = await prisma.session.delete({
        where: { id },
      });
      return deletedSession;
    } catch (error) {
      console.error("Erro ao deletar sessão:", error);
      throw error;
    }
  }

  async createTicket(data) {
    try {
      const existingTicket = await prisma.ticket.findFirst({
        where: {
          sessionId: data.sessionId,
          seat: data.seat,
        },
      });

      if (existingTicket) {
        throw new Error(`A cadeira ${data.seat} já está ocupada.`);
      }

      const newTicket = await prisma.ticket.create({
        data: {
          seat: data.seat,
          price: data.price,
          sessionId: data.sessionId,
        },
      });

      return newTicket;
    } catch (error) {
      console.error("Erro ao criar ingresso:", error);
      throw error;
    }
  }

  async getAllTickets() {
    try {
      return await prisma.ticket.findMany();
    } catch (error) {
      console.error("Erro ao buscar ingressos:", error);
      throw error;
    }
  }

  async updateTicket(id, data) {
    try {
      const updatedTicket = await prisma.ticket.update({
        where: { id },
        data,
      });
      return updatedTicket;
    } catch (error) {
      console.error("Erro ao atualizar ingresso:", error);
      throw error;
    }
  }

  async deleteTicket(id) {
    try {
      const deletedTicket = await prisma.ticket.delete({
        where: { id },
      });
      return deletedTicket;
    } catch (error) {
      console.error("Erro ao deletar ingresso:", error);
      throw error;
    }
  }
}

module.exports = SessionService;
