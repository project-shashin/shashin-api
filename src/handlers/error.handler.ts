import { Response } from 'express';

export const processValidationErrors = (errors: any) => {
  
  let errorMap: string[];

  errors.array.forEach(error => {
    errorMap.push(error.message)
  });
  
  return errorMap;
}

export const errorHandler = (response: Response, code: number, errors: any[]) => {
  console.log(errors);
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