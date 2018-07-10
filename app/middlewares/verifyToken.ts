import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { errorHandler } from "./../helpers/error.helper";
import { config } from "./../config";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const onError = errorHandler(res);

  try {
    const token = req.headers.authorization;
    return jwt.verify(token, config.secret, (error, decoded) => {
      if (error) {
        return onError(401, "Token is not valid");
      }
      req["email"] = decoded["user"];
      return next();
    });
  } catch (err) {
    return onError(401, "Auth token not provided");
  }
};
