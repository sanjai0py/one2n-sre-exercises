const express = require("express");
const { v4: uuidv4 } = require("uuid");
const jsondb = require("../config/jsondb.init");

const createStudent = (req, res) => {
  const uuid = uuidv4();
  const { firstname, lastname, email } = req.body;


  if (!firstname || !lastname || !email) {
    return res.status(400).send("Please provide all required fields");
  }

  const student = {
    firstname,
    lastname,
    email,
  };

  jsondb.set(uuid, student);

  res.send({message:"Created Student", studentID: uuid});
};

const getAllStudents = (req, res) => {
    const students = jsondb.JSON();

    res.send({message:"All Students", students});
}


module.exports = {
  createStudent,
getAllStudents, 
};
