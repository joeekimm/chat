import express, { Express, Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8080;

// app.use(express.static(path.resolve("./") + "/client/src"));

app.get('/', (req: Request, res: Response) => {
  res.send('Hi from express / ts server');
})

app.get("/api", (req: Request, res: Response) => {
  res.json({message: "Hello from api route"});
});

// app.get("*", (req, res) => res.sendFile(path.resolve("./") + "/client/public/index.html"))

app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`));