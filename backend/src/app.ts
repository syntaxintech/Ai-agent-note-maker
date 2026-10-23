import express, { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const app = express();

app.get("/health-check", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Health good",
  });
});

app.get("/text", async (req: Request, res: Response) => {
  try {
    const notes = await prisma.note.findMany();
    return res.status(200).json({
      success: true,
      data: notes,
    });
  } catch (error) {
    console.log(error);
  }
});
