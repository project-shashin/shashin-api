import { Response } from 'express';

export function prismaErrorHandler(response: Response, error: any) {
  errorHandler(response, 500, ["A database error occured"]);
}

export function errorHandler(response: Response, code: number, errors: any) {
  response.status(code).json({error: 'error', errors: errors})
}