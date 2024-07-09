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
      console.error("Error updating movie:", error);
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
      console.error("Error deleting movie:", error);
      throw error;
    }
  }
}

module.exports = new MovieService();
