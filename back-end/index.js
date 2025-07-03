import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/routes.js";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use("/users", UserRoutes);

app.get("/users", UserRoutes);
app.post("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
