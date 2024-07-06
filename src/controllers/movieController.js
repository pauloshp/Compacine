const movieService = require('../services/movieService');

class MovieController {
  async getAllMovies(req, res) {
    try {
      const movies = await movieService.getAllMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMovieById(req, res) {
    try {
      const movie = await movieService.getMovieById(req.params.id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createMovie(req, res) {
    try {
      const { title, description, image, actors, genre } = req.body;
      const newMovie = await movieService.createMovie({ title, description, image, actors, genre });
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateMovie(req, res) {
    try {
      const { id } = req.params;
      const { title, description, image, actors, genre } = req.body;
      const updatedMovie = await movieService.updateMovie(id, { title, description, image, actors, genre });
      if (!updatedMovie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(updatedMovie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      const deletedMovie = await movieService.deleteMovie(id);
      if (!deletedMovie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MovieController();
