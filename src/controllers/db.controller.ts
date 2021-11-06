import { PrismaClient } from '@prisma/client'
import { throws } from 'assert';

export default class DbController {
  client: PrismaClient;
  entities: {};

  constructor(){
    this.client = new PrismaClient();
  }

  getEntity(entityName: string) {
    if (!(entityName in this.entities)) {
      throw Error("Unknown entity type: " + entityName);
    }
    return this.client[entityName];
  }

  async create(entity: string, data: any) {

    return await this.getEntity(entity).create({
      data: data
    });

  }

  async update(entity: string, id: string, data: {}) {
    return await this.getEntity(entity).update({
      where: {
        id: id
      },
      data: data,
    });
  }

  async getByQuery(entity: string, queryParams: {}) {

    if(Object.keys(queryParams).length === 0) {
      const query = {
        where: queryParams
      }; 
  
      return await this.getEntity(entity).findMany(query);
    }
    else {
      return await this.getEntity(entity).findMany();
    }
  }

  async getById(entity: string, id: string) {
    return await this.getEntity(entity).findUnique({
      where: {
        id: id
      },
    });    
  }

  async delete(entity: string, id: string) {
    return await this.getEntity(entity).delete({
      where: {
        id: id
      },
    });
  }

}