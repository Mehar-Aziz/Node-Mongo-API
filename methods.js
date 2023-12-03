const StudentModel = require("./models/model");
const createStudent = async (Name, scores) => {
  console.log("Create Student");
  let students = new StudentModel();
  students.Name = Name;
  students.scores = scores;
  await students.save();
  return students;
};
const updateStudent = async (_id, Name,scores) => {
  let students = await StudentModel.findById(_id);
  students.Name = Name;
  students.scores = scores;
  await students.save();
  return students;
};
const getAllStudent = async () => {
  let students = await StudentModel.find();
  return students;
};
const deleteStudent = async (_id) => {
  let students = await StudentModel.findByIdAndDelete(_id);
  return students;
};
const getStudentById = async (_id) => {
  let students = await StudentModel.findById(_id);
  return students;
};
module.exports.createStudent = createStudent;
module.exports.getAllStudent = getAllStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.updateStudent = updateStudent;
module.exports.getPlayerById = getPlayerById;