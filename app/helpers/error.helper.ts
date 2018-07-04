import { Response } from 'express';

export const errorHandler =
  (response: Response) =>
    (code: number, message: string) =>
      response
        .status(code)
        .send({ 'error': message });