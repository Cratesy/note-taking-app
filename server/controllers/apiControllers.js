const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const { readFromFile, writeToFile } = require("../utils/utils");

const getData = (req, res) => {
  const notes = readFromFile("db");

  res.json(notes);
};

const postData = (req, res) => {
  const notes = readFromFile("db");

  const { title, text } = req.body;
  const id = uuidv4();
  const newNote = { title, text, id };
  notes.push(newNote);

  writeToFile("db", JSON.stringify(notes));

  res.json(newNote);
};

const deleteById = (req, res) => {
  const notes = readFromFile("db");
  const { id } = req.params;
  const filtered = (each) => {
    return each.id !== id;
  };

  const filteredNotes = notes.filter(filtered);

  writeToFile("db", JSON.stringify(filteredNotes));

  res.status(200).json({ message: "note deleted" });
};

module.exports = { getData, postData, deleteById };
