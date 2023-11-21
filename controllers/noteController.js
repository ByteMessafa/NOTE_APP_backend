const express = require('express');
const generator = require('../Util/generator');
var store = require('../Util/memoryStorage');
var model = require('../model/note.model');

exports.getAddNotes = (req, res) => {    
    const keys = store.getKeys(store.store);
    const values = store.getValues(store.store);
    return res.status(200).send(JSON.stringify(values));
};

exports.saveNotes = (req, res) => {
    const new_id_1 = generator.generate();
    var createdBy = 'Hisoka';
    var createdOn = new Date();
    var title = req.body.title;
    var content = req.body.content;
    if(!title || !content){
        return res.status(500).send({error: "title or content is empty"});
    }

    var Note = model.Note;
    var noteObj = new Note(new_id_1, title, content, createdBy,createdOn );
    store.setItem(new_id_1, noteObj);

    return res.status(201).send({message: "Note saved successfully!"});
};

exports.updateNotes = (req, res) => {
    var createdBy = 'Hisoka';
    var createdOn = new Date();
    var noteId = req.body.id;
    var title = req.body.title;
    var content = req.body.content;

    if(!noteId){
        return res.status(500).send({error: "noteId is empty"});
    }
    if(!title || !content){
        return res.status(500).send({error: "title or content is empty"});
    }

    var noteItem = store.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({error: "noteId is not exist"});
    }

    var Note = model.Note;
    var noteObj = new Note(noteId, title, content, createdBy,createdOn );
    store.setItem(noteId, noteObj);

    return res.status(200).send({message: "Note updated successfully!"});
};


exports.deleteNotes = (req, res) => {
    var noteId = req.params.noteId;
    if(!noteId){
        return res.status(500).send({error: "noteId is empty"});
    }
    var noteItem = store.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({error: "noteId is not exist"});
    }
    store.store.removeItem(noteId);
    return res.status(200).send({message: "Note deleted successfully!"});   

};