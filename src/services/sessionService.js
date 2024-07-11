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
}

module.exports = SessionService;
