const express = require('express');
const movieRoutes = require('./routes/movieRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/movies', movieRoutes);
app.use('/sessions', sessionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
