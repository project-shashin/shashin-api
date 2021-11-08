import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../handlers/error.handler';
import DbController from './db.controller';

export const endpointCreate = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const data = request.body.data;
      const entity = await db.create(entityType, data.attributes);
      response.status(200).json(entity);
    }
    catch(error: any) {
      errorHandler(response, error.responseCode, [error.message]);
    }
  }
}

export const endpointUpdate = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    try{
      const data = request.body.data;
      const entity = await db.update(entityType, data.id, data.attributes);
      response.status(200).json(entity);
    }
    catch(error: any) {
      errorHandler(response, error.responseCode, [error.message]);
    }
  }
}

export const endpointGetUnique = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    try{
      const entity = await db.getById(entityType, request.params.id);
      response.status(200).json(entity);
    }
    catch(error: any) {
      errorHandler(response, error.responseCode, [error.message]);
    }
  }

}

export const endpointGeAllByQuery = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const entities = await db.getByQuery(entityType);
      response.status(200).json(entities);
    }
    catch(error: any) {
      errorHandler(response, error.responseCode, [error.message]);
    }
  }

}

export const endpointDelete = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const entity = await db.delete(entityType, request.params.id);
      response.status(200).json({});
    }
    catch(error: any) {
      errorHandler(response, error.responseCode, [error.message]);
    }
  }

}