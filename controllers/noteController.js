const express = require('express');
const generator = require('../Util/generator');
var store = require('../Util/memoryStorage');


exports.getAddNotes = (req, res) => {
    // const new_id_1 = generator.generate();
    store.setItem('0001', 'Hello MemoryStorage!');
    // const new_id_2 = generator.generate();
    store.setItem('0002', 'Hello MemoryStorage!');
    const keys = store.getKeys(store);
    const values = store.getValues(store);
    console.log('keys: ' + JSON.stringify(keys));
    res.send(`storage: ${JSON.stringify(keys)}${JSON.stringify(values)}`);
};

exports.saveNotes = (req, res) => {
    res.send('save new note');
};

exports.updateNotes = (req, res) => {
    res.send('update a note');
};


exports.deleteNotes = (req, res) => {
    res.send('delete a note');
};