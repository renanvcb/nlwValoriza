import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Get the token
  const authToken = req.headers.authorization;

  // Validate if token is filled
  if (!authToken) {
    return res.status(401).end();
  }

  /**
   * Split the authorization header and ignore the first part.
   * only the second part is importanta(token)
   */
  const [, token] = authToken.split(" ");

  // Validate token
  try {
    const { sub } = verify(token, "bcb4988d04cf0e061340fb939ad6b8e4") as IPayload;

    // Get user details and sets user ID on request
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}