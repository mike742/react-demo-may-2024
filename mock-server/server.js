const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3002;
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const doctors = [
    {  id: 101, name: "Dr. Jack Smith"  }, 
    {  id: 102, name: "Dr. Kelly Swanson"  }, 
    {  id: 103, name: "Dr. Rachel Green"  }, 
];

const patients = [
    {
        healthNumber: 12301,
        name: "Patient Mark",
        address: "111, Main St., Winnipeg, MB, CA",
        phone: "204 123-4567",
        dob: new Date(1991, 11, 25)
    },
    {
        healthNumber: 12302,
        name: "Patient Lucy",
        address: "345, Broadway Ave., Winnipeg, MB, CA",
        phone: "204 123-4577",
        dob: new Date(1995, 2, 12)
    }
];


app.get("/demo", (req, res) => res.send({ msg: "Hello express server" }) );
app.get("/doctors", (req, res) => res.send(doctors));
app.get("/patients", (req, res) => res.send(patients));
app.get("/patients/:health_number", (req, res) => {
   const healthNumber = req.params.health_number;
   const patient = patients.find(p => p.healthNumber == healthNumber);
   if (patient) {
        res.send(patient);
   }
   else {
    res.sendStatus(404);
   }
});


app.listen(PORT, () => console.log("Server is running on localhost: " + PORT));
