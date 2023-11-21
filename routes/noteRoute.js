const express = require('express');
const router = express.Router();
const {getAddNotes,saveNotes,updateNotes,deleteNotes} = require('../controllers/noteController');

router.get('/notes',getAddNotes);
router.get('/notes/save',saveNotes);
router.get('/notes/update',updateNotes);
router.get('/notes/delete/:noteId',deleteNotes);



module.exports = router;