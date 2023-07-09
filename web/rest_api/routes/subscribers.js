const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        // 200 means successful
        res.status(200).json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message });
        // 500 means error on server
    }
})

// Getting one
// getSubscriber is middleware
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
})

// Create one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscriberToChannel: req.body.subscriberToChannel
    })
    try {
        const newSubscriber = await subscriber.save();
        // Status 201 means successfully created an object
        res.status(201).json(newSubscriber);
    } catch (err) {
        // 400 => something wrong with user input
        res.status(400).json({ message: err.message });
    }
})

// Updating one
// patch because if only name is changed, then we should change only name, everything else remains same
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscriberToChannel != null) {
        res.subscriber.subscriberToChannel = req.body.subscriberToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
})

// Deleting one
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await Subscriber.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted subscriber"});
    }catch(err) {
        res.status(500).json({message: err.message});
    }
})

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber
    next()
}

module.exports = router