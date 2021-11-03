import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'

const generateDbClient = () => {
  return new PrismaClient();
}

export const UserDelete = async (request: Request, response: Response, next: NextFunction) => {
  const client = generateDbClient();

}

export const UserGet = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const allUsers = await prisma.user.findMany()
  response.status(200).json(allUsers)
}

export const UserGetOne = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const params = request.params;

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  let result: any = (!user) ? {} : user;
  let responseCode: number = (!user) ? 204 : 200;

  response.status(responseCode).json(result);
}

export const UserPost = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const data = request.body;

  const user = await prisma.user.create({
    data: data.data.attributes
  });

  let result: any = (!user) ? {} : user;
  // 403 resource exists for now on error, we'll correct later.
  let responseCode: number = (!user) ? 403 : 201;
  response.status(responseCode).json(result);
}

export const UserPut = async (request: Request, response: Response, next: NextFunction) => {
  const prisma = generateDbClient();
  const data = request.body;

  const user = await prisma.user.update({
    where: {
      id: data.data.id,
    },
    data: data.data.attributes,
  });

  let result: any = (!user) ? {} : user;
  // 403 resource exists for now on error, we'll correct later.
  let responseCode: number = (!user) ? 403 : 201;
  response.status(responseCode).json(result);
  
}