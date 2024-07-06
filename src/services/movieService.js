const prisma = require('../server');

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
    return prisma.movie.update({ where: { id: parseInt(id) }, data });
  }

  async deleteMovie(id) {
    return prisma.movie.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = new MovieService();
