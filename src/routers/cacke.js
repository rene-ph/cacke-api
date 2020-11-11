const express = require('express')
const Cacke = require('../models/cacke')
const Response = require('../utils/response');
const router = new express.Router();


router.post('/cackes', async (req, res) => {
    const cacke = new Cacke(req.body);
    try {
        await cacke.save()
        const response = new Response(null, 'success', null);
        res.status(201).send(response.getResponse());
    } catch (e) {
        console.log(e);
        const response = new Response(null, 'error', 'Internal Server Error');
        res.status(400).send(response.getResponse());
    }
});


router.get('/cackes', async (req, res) => {
    try {
        const cacke = await Cacke.find({});
        const response = new Response(cacke, 'success', null);
        res.send(response.getResponse());
    } catch (e) {
        console.log(e);
        const response = new Response(null, 'error', 'Internal Server Error');
        res.status(500).send(response.getResponse());
    }
});


router.get('/cackes/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const cacke = await Cacke.findById(_id);

        if (!cacke) {
            const response = new Response(null, 'error', 'There are no cackes with this id');
            return res.status(404).send(response);
        }

        const response = new Response(cacke, 'success', null);
        res.send(response.getResponse());
    } catch (e) {
        console.log(e);
        const response = new Response(null, 'error', 'Internal Server Error');
        res.status(500).send(response.getResponse());
    }
});


router.patch('/cackes/:id', async (req, res) => {
    try {
        const cacke = await Cacke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!cacke) {
            const response = new Response(null, 'error', 'There are no cackes with this id');
            return res.status(404).send(response.getResponse());
        }

        const response = new Response(cacke, 'success', null);
        res.send(response.getResponse())
    } catch (e) {
        console.log(e);
        const response = new Response(null, 'error', 'Internal Server Error');
        res.status(400).send(response.getResponse());
    }
});


router.delete('/cackes/:id', async (req, res) => {
    try {
        const cacke = await Cacke.findByIdAndDelete(req.params.id);

        if (!cacke) {
            const response = new Response(null, 'error', 'There are no cackes with this id');
            res.status(404).send(response.getResponse());
        }

        const response = new Response(null, 'success', null);
        res.send(response)
    } catch (e) {
        console.log(e);
        const response = new Response(null, 'error', 'Internal Server Error');
        res.status(500).send(response.getResponse());
    }
})

module.exports = router;
