const express = require('express');
const movieRoutes = require('./routes/movieRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const viewRoutes = require('./routes/viewRoutes');
const path = require('path');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/movies', movieRoutes);
app.use('/sessions', sessionRoutes);
app.use('/api', viewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
