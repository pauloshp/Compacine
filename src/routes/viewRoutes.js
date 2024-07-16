const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');

router.get('/movies-with-sessions', async (req, res) => {
  try {
    const movies = await movieService.getMoviesWithSessions();
    res.json(movies);
  } catch (error) {
    console.error("Erro ao buscar filmes com sessões:", error);
    res.status(500).json({ error: "Erro ao buscar filmes com sessões." });
  }
});

module.exports = router;
