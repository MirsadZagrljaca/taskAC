const express = require("express");
import Template from "../template";
const cors = require("cors");
import customerRouter from "./routes/customer.routes";
import programRouter from "./routes/program.routes";
import serviceRouter from "./routes/service.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", customerRouter);
app.use("/", programRouter);
app.use("/", serviceRouter);

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized Access" });
  }
});

export default app;
