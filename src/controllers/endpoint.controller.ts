import { Request, Response, NextFunction } from 'express';
import DbController from '../controllers/db.controller';


export const endpointCreate = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    const data = request.body.data;
    const entity = await db.create(entityType, data.attributes);
    response.status(200).json({});
  }
}

export const endpointUpdate = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    const data = request.body.data;
    const entity = await db.update(entityType, data.id, data.attributes);
    response.status(200).json({});
  }

}

export const endpointGetUnique = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
  }

}

export const endpointGeAllByQuery = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
  }

}

export const endpointDelete = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    const entity = await db.delete(entityType, request.params.id);
    response.status(200).json({});
  }

}