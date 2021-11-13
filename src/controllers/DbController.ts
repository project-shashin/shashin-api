import { PrismaClient } from '@prisma/client'
import GeneralExceptionEncapsulation from '../handlers/error.handler';

export default class DbController {
  client: PrismaClient;
  entities: {};

  constructor(){
    this.client = new PrismaClient();
  }

  getEntity(entityName: string) {
    return this.client[entityName];
  }

  async create(entity: string, data: any) {
    try {
      return await this.getEntity(entity).create({
        data: data
      });
    }
    catch(error) {
      throw handlePrismaError(error);
    }
  }

  async update(entity: string, id: string, data: {}) {
    try{
      return await this.getEntity(entity).update({
        where: {
          id: id
        },
        data: data,
      });
    }
    catch(error) {
      throw handlePrismaError(error);
    }
  }

  async getByQuery(entity: string, queryParams?: {}) {
    try {
      if(!queryParams) {
        return await this.getEntity(entity).findMany({
          where: queryParams
        });
      }
      else {
        return await this.getEntity(entity).findMany();
      }
    }
    catch(error) {
      throw handlePrismaError(error);
    }
  }

  async getById(entity: string, id: string) {
    try {
      return await this.getEntity(entity).findUnique({
        where: {
          id: id
        }
      });
    }
    catch(error) {
      throw handlePrismaError(error);
    }
  }

  async delete(entity: string, id: string) {
    try{
      return await this.getEntity(entity).delete({
        where: {
          id: id
        },
      });
    }
    catch(error) {
      throw handlePrismaError(error);
    }
  }
}

const prismaCodeHttpStatusCodeMap = {
  P1000: 500,
  P1001: 500,
  P1002: 500,
  P1003: 500,
  P1004: 500,
  P1005: 500,
  P1006: 500,
  P1007: 500,
  P1008: 500,
  P1009: 500,
  P1010: 500,
  P1011: 500,
  P1012: 500,
  P1013: 500,
  P1014: 500,
  P1015: 500,
  P1016: 500,
  P1017: 500,
  P2000: 400,
  P2001: 400,
  P2002: 400,
  P2003: 400,
  P2004: 500,
  P2005: 400,
  P2006: 400,
  P2007: 500,
  P2008: 500,
  P2009: 500,
  P2010: 500,
  P2011: 400,
  P2012: 400,
  P2013: 400,
  P2014: 400,
  P2015: 400,
  P2016: 400,
  P2017: 400,
  P2018: 400,
  P2019: 100,
  P2020: 400,
  P2021: 500,
  P2022: 400,
  P2023: 400,
  P2024: 500,
  P2025: 400,
  P2026: 500,
  P2027: 500,
  P4000: 500,
  P4001: 500,
  P4002: 500
};

const handlePrismaError = (error) => {
  let exceptionEncapsulator: GeneralExceptionEncapsulation;

  const errorClassName = error.constructor.name;
  switch(errorClassName) {
    case 'PrismaClientKnownRequestError':
      exceptionEncapsulator = new GeneralExceptionEncapsulation(prismaCodeHttpStatusCodeMap[error.code], error.message, error);
      break;
    case 'PrismaClientUnknownRequestError':
      exceptionEncapsulator = new GeneralExceptionEncapsulation(500, error.message, error);
      break;
    case 'PrismaClientKnownRequestError':
      exceptionEncapsulator = new GeneralExceptionEncapsulation(500, error.message, error);
      break;
    case 'PrismaClientInitializationError':
      exceptionEncapsulator = new GeneralExceptionEncapsulation(prismaCodeHttpStatusCodeMap[error.errorCode], error.message, error);
      break;
    case 'PrismaClientValidationError':
      exceptionEncapsulator = new GeneralExceptionEncapsulation(400, error.message, error);
      break;
    default: 
      exceptionEncapsulator = new GeneralExceptionEncapsulation(500, "An unknown error has occurred.", error);
  }

  return exceptionEncapsulator;
}