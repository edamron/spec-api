const express = require('express');
const router = express.Router();
const Specs = require('../models/spec');

// all specs
router.get('/', async (req, res) => {
	try {
		const specs = await Specs.find();
		res.send(specs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// by _id
router.get('/:id', async (req, res) => {
	try {
		const specs = await Specs.findById(req.params.id);
		res.send(specs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// add a spec
router.post('/', (req, res) => {});

// all makes for a given year
// was '/makes/:year'
router.get('/:year/makes', async (req, res) => {
	try {
		const specs = await Specs.distinct('make', { year: req.params.year });
		res.send(specs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// all models for a given year & make
router.get('/:year/makes/:make', async (req, res) => {
	try {
		const specs = await Specs.find({
			year: req.params.year,
			make: req.params.make,
		});
		res.send(specs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
