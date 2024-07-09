const express = require('express');
const { PrismaClient } = require('@prisma/client');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
