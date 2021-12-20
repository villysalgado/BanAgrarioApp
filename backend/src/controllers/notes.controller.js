const notesCtrl = {};

const Note = require('../models/note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}
notesCtrl.createNote = async (req, res) => {
    const { extUserName, totalCreditAmount, leftCreditAmount, date} = req.body;
    const newNote =new Note({
        extUserName,
        totalCreditAmount,
        leftCreditAmount,
        date
    });
    await newNote.save();
    res.json({message:'Credito creado'});
}
notesCtrl.getNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}
notesCtrl.updateNotes = async(req, res) => {
    const { extUserName, totalCreditAmount, leftCreditAmount} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        extUserName,
        totalCreditAmount,
        leftCreditAmount
    });   
    res.json({message:'Credito Actualizado'});
}
notesCtrl.deleteNotes = async(req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.json({message:'Credito Eliminado'});
}
module.exports = notesCtrl