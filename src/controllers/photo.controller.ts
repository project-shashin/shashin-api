import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'

const generateDbClient = () => {
  return new PrismaClient();
}

export const PhotoDelete = async (request: Request, response: Response, next: NextFunction) => {
  const client = generateDbClient();

}

export const PhotoGet = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const allPhotos = await prisma.photo.findMany()
  response.status(200).json(allPhotos)
}

export const PhotoGetOne = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const params = request.params;

  const photo = await prisma.photo.findUnique({
    where: {
      id: params.id,
    },
  });

  let result: any = (!photo) ? {} : photo;
  let responseCode: number = (!photo) ? 204 : 200;

  response.status(responseCode).json(result);
}

export const PhotoPost = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const data = request.body;

  const photo = await prisma.photo.create({
    data: data.data.attributes
  });

  let result: any = (!photo) ? {} : photo;
  // 403 resource exists for now on error, we'll correct later.
  let responseCode: number = (!photo) ? 403 : 201;
  response.status(responseCode).json(result);
}

export const PhotoPut = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const data = request.body;

  const photo = await prisma.photo.update({
    where: {
      id: data.data.id,
    },
    data: data.data.attributes,
  });

  let result: any = (!photo) ? {} : photo;
  // 403 resource exists for now on error, we'll correct later.
  let responseCode: number = (!photo) ? 403 : 201;
  response.status(responseCode).json(result);
  
}