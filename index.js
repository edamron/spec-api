require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to the database'));

app.use(express.json());

const specsRouter = require('./routes/specs-router');
app.use('/specs', specsRouter);

// 500 error route
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('something is messed up');
});

// 404 error route
app.use((req, res, next) => {
	res.status(404).send('sorry, we could not find that');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
