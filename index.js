import express from "express";
import cors from "cors";
import conectDB from "./config/db.js";
import pacientesRouter from "./routes/pacienteRoutes.js";
const app = express();
app.use(express.json());
conectDB();

app.use("/api/pacientes", pacientesRouter);

app.use(cors());

app.use("/", (req, res) => {
  res.send("ruta en puerto 4000");
});

app.listen(4000, () => {
  console.log("servidor en 4000");
});
