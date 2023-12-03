const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createStudent,
  getAllStudent,
  deleteStudent,
  updateStudent,
  getStudentById,
} = require("./methods");
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection to MongoDB created");
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });

app.post("/students", async (req, res) => {
  try {
    const { Name, scores } = req.body;
    const newStudent = await createStudent(Name, scores);
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/students", async (req, res) => {
  try {
    const allPStudent = await getAllStudent();
    res.json(allPStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Student = await getStudentById(id);
    res.json(Student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, scores } = req.body;
    const updatedStudent = await updateStudent(id, Name, scores);
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await deleteStudent(id);
    res.json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3006;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});