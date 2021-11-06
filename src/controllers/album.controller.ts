import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'
import { prismaErrorHandler } from '../handlers/error.handler';
import { generateResponseObject } from '../handlers/generate-response-object.handler';

const generateDbClient = () => {
  return new PrismaClient();
}

export const AlbumDelete = async (request: Request, response: Response, next: NextFunction) => {
  const client = generateDbClient();

}

export const AlbumGetAll = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const allAlbums = await prisma.album.findMany()
  response.status(200).json(allAlbums)
}

export const AlbumGetOne = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const params = request.params;

  const album = await prisma.album.findUnique({
    where: {
      id: params.id,
    },
  });

  let result: any = (!album) ? {} : album;
  let responseCode: number = (!album) ? 204 : 200;

  response.status(responseCode).json(result);
}

export const AlbumCreate = async (request: Request, response: Response, next: NextFunction) => {

  const prisma = generateDbClient();
  const data = request.body;

  try {
    // Create the album.
    const album = await prisma.album.create({
      data: data.data.attributes
    });
    
    response.status(200).json(generateResponseObject('dtoAlbum', album.id, { ...album }));
  }
  catch (error) {
    prismaErrorHandler(response, error);
  }
}

export const AlbumUpdate = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const prisma = generateDbClient();
    const data = request.body;
  
    const album = await prisma.album.update({
      where: {
        id: data.data.id,
      },
      data: data.data.attributes,
    });
  
    response.status(200).json(album);
  }
  catch (error) {
    prismaErrorHandler(response, error);
  }
}