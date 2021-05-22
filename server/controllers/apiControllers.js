const fs = require("fs");

const { readFromFile, writeToFile } = require("../utils/utils");

const getData = (req, res) => {
  const notes = readFromFile("db");

  res.json(notes);
};

const postData = (req, res) => {
  const notes = readFromFile("db");

  const { title, text } = req.body;
  const newNote = { title, text };
  notes.push(newNote);

  console.log(notes);

  writeToFile("db", JSON.stringify(notes));

  res.json(newNote);
};

module.exports = { getData, postData };
