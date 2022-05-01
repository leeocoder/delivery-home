import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import env from "../env";
import { Payload } from "../protocols/payload";
export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader)
    return response.status(401).json({ message: "Token is missing!" });
  const token = authHeader.split(" ").pop();
  try {
    const { sub } = verify(String(token), env.JST_SECRET) as Payload;
    request.idClient = sub;
    return next();
  } catch (error) {
    return response.status(400).json({ message: "invalid token" });
  }
}
