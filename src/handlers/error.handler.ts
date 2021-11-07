import { response, Response } from 'express';

// export function prismaErrorHandler(response: Response, error: any) {
//   errorHandler(response, 500, ["A database error occured"]);
// }

export function errorHandler(response: Response, code: number, errors: any) {
  response.status(code).json({error: 'error', errors: errors})
}

export default class GeneralExceptionEncapsulation {
  responseCode: number;
  message: string;
  exception: any;

  constructor(responseCode: number, message: string, exception: any){
    this.responseCode = responseCode;
    this.message = (message) ? message : "An unknown error occurred";
    this.exception = exception;
  }
}