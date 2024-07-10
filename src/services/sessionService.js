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
      console.error("Error creating session:", error);
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
        throw new Error(`Seat ${data.seat} is already booked.`);
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
      console.error("Error creating ticket:", error);
      throw error;
    }
  }
}

module.exports = SessionService;
