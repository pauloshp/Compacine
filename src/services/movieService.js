const prisma = require('../prismaClient');

class MovieService {
  async getAllMovies() {
    return prisma.movie.findMany();
  }

  async getMovieById(id) {
    return prisma.movie.findUnique({ where: { id: parseInt(id) } });
  }

  async createMovie(data) {
    return prisma.movie.create({ data });
  }

  async updateMovie(id, data) {
    try {
      const updatedMovie = await prisma.movie.update({
        where: {
          id: String(id),
        },
        data: {
          title: data.title,
          description: data.description,
          image: data.image,
          actors: data.actors,
          genre: data.genre,
        },
      });
      return updatedMovie;
    } catch (error) {
      console.error("Erro ao atualizar filme:", error);
      throw error;
    }
  }

  async deleteMovie(id) {
    try {
      const deletedMovie = await prisma.movie.delete({
        where: {
          id: String(id),
        },
      });
      return deletedMovie;
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
      throw error;
    }
  }

  async getMoviesWithSessions() {
    try {
      return await prisma.movie.findMany({
        include: {
          sessions: true,
        },
      });
    } catch (error) {
      console.error("Error fetching movies with sessions:", error);
      throw error;
    }
  }
}

module.exports = new MovieService();
