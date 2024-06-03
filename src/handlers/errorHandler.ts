import { NextFunction, Request, Response } from "express";
import { isHttpError } from "http-errors";

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(error);

  let statusCode = 500;
  let errorMessage = "An unknown error occurred!";

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json({ error: errorMessage });
};
