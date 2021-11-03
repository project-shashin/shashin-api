import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'

const generateDbClient = () => {
  return new PrismaClient();
}

export const AlbumDelete = async (request: Request, response: Response, next: NextFunction) => {
  const client = generateDbClient();

}

export const AlbumGet = async (request: Request, response: Response, next: NextFunction) => {
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

export const AlbumPost = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const data = request.body;

  const album = await prisma.album.create({
    data: data.data.attributes
  });

  let result: any = (!album) ? {} : album;
  // 403 resource exists for now on error, we'll correct later.
  let responseCode: number = (!album) ? 403 : 201;
  response.status(responseCode).json(result);
}

export const AlbumPut = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const data = request.body;

  const album = await prisma.album.update({
    where: {
      id: data.data.id,
    },
    data: data.data.attributes,
  });

  let result: any = (!album) ? {} : album;
  // 403 resource exists for now on error, we'll correct later.
  let responseCode: number = (!album) ? 403 : 201;
  response.status(responseCode).json(result);
  
}