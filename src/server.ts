import { Request, Response } from "express";

import { app } from "./app";

const port: number = 4000;

//Index Router
app.get("/", (_req: Request, res: Response) => {
  res.status(200).send(`
    <h1 style="font-family: cursive;text-align: center;">Server checkout is running<h1>`);
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:4000`);
});
