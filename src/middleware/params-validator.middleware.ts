import { NextFunction, Request, Response, RequestHandler } from "express";
import Ajv from "ajv"
import { errorHandler, processValidationErrors } from "../handlers/error.handler";

export const paramsValidator = function(schema: any): RequestHandler {
  return (request: Request, response: Response, next: NextFunction) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    // Validate 
    if (!validate(request.params)) {
      errorHandler(response, 500, processValidationErrors(validate.errors));
    }
    else {
      next();
    }
  }
};

