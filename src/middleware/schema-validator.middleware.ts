import {  } from "express";
import { Request, Response, NextFunction, RequestHandler } from "express";
import Ajv from "ajv"
import { errorHandler, processValidationErrors } from "../handlers/error.handler";

export const requestSchemaValidator = function(schema: any): RequestHandler {
  return (request: Request, response: Response, next: NextFunction) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    // Validate 
    if (!validate(request.body)) {
      errorHandler(response, 500, processValidationErrors(validate.errors));
    }
    else {
      next();
    }
  }
};

