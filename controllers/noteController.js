exports.getAddNotes = (req, res) => {
    res.send('get all notes');
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