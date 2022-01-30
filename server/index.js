import express from "express";
import { Low, JSONFile } from "lowdb";

const app = express();
app.use(express.json());

const adapter = new JSONFile("db.json");
const db = new Low(adapter);
await db.read();
db.data ||= { formData: [] };

let { formData } = db.data;

app.get("/getData", async (req, res) => {
  const post = formData;
  res.send(post);
});

app.post("/postForm", async (req, res, next) => {
  formData = req.body;
  await db.write();
  res.sendStatus(201);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
