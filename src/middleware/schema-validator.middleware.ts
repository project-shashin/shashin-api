import { RequestHandler } from "express";
import { NextFunction, Request, Response } from "express";
import Ajv from "ajv"
import { errorHandler } from "../handlers/error.handler";

export const requestSchemaValidator = function(schema: any): RequestHandler {
  return (request: Request, response: Response, next: NextFunction) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    // Validate 
    if (!validate(request.body)) {
      errorHandler(response, 500, validate.errors);
    }
    else {
      next();
    }
  }
};

