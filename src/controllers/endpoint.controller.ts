import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../handlers/error.handler';
import DbController from './db.controller';

export const endpointCreate = (entityType: string, db: DbController) => {

  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const data = request.body.data;
      const entity = await db.create(entityType, data.attributes);
      succesResponseHandler(response, 200, entityToJsonApi(entityType, entity.id, entity));
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
      succesResponseHandler(response, 200, entityToJsonApi(entityType, entity.id, entity));
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
      succesResponseHandler(response, 200, entityToJsonApi(entityType, entity.id, entity));
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
      succesResponseHandler(response, 200, entities);
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
      succesResponseHandler(response, 200, '');
    }
    catch(error: any) {
      errorHandler(response, error.responseCode, [error.message]);
    }
  }

}

const succesResponseHandler = (response: Response, responseCode: number, data: any) => {
  response.status(responseCode).json({ data: data })
}

const entityToJsonApi = (entityType: string, id: string, entity: any) => {
  delete entity['id'];
  return {
    type: entityType,
    id: id,
    attributes: entity
  };
}

const entityArrayToJsonApiArray = (entityType: string, id: string, entityArray: any[]) => {
  let jsonApiEntityArray: any[] = [];

  entityArray.forEach(entity => {
    jsonApiEntityArray.push(entityToJsonApi(entityType, entity.id, entity));
  });

  return jsonApiEntityArray
}