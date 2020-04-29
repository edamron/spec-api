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

// add a spec
router.post('/', async (req, res) => {
	const spec = new Specs({
		year: req.body.year,
		front: req.body.front,
		rear: req.body.rear,
		make: req.body.make,
		model: req.body.model,
	});

	try {
		const newSpec = await spec.save();
		res.status(201).json(newSpec);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

module.exports = router;
