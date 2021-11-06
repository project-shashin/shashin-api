import { PrismaClient } from '@prisma/client'

export default class DbController {
  client: PrismaClient;
  entities: {};
  entity: any | null = null;

  constructor(entityName: string){
    this.client = new PrismaClient();
    this.entities = {
      album: this.client.album,
      photo: this.client.photo,
      user: this.client.user,
    }

    if (!(entityName in this.entities)) {
      throw Error("Unknown entity type: " + entityName);
    }

    this.entity = this.entities[entityName];
  }

  async create(data: {}) {
    return await this.entity.create({
      data: data
    });
  }

  async update(id: string, data: {}) {
    return await this.entity.update({
      where: {
        id: id
      },
      data: data,
    });
  }

  async getByQuery(queryParams: {}) {

    if(Object.keys(queryParams).length === 0) {
      const query = {
        where: queryParams
      }; 
  
      return await this.entity.findMany(query);
    }
    else {
      return await this.entity.findMany();
    }
  }

  async getById(id: string) {
    return await this.entity.findUnique({
      where: {
        id: id
      },
    });    
  }

  async delete(id: string) {
    return await this.entity.delete({
      where: {
        id: id
      },
    });
  }

}