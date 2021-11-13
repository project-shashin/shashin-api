import { Request, Response, NextFunction } from 'express';

export const responseBodyGenerator = function(request: Request, response: Response, next: NextFunction) {
  const originalJsonFunction = response.json;
  response.json = (body) => {
    response.locals.body = body;
    return originalJsonFunction.call(response, body);
  };
  next();
}