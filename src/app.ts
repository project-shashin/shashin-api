import express, { Request, Response, NextFunction } from 'express';
// import { AlbumGet, AlbumPost, AlbumPut, AlbumDelete } from './controllers/album.controller';
// import { PhotoGet, PhotoPost, PhotoPut, PhotoDelete } from './controllers/photo.controller';
import { UserGet, UserGetOne, UserPost, UserPut, UserDelete } from './controllers/user.controller';

const app = express();
app.use(express.json());
const port = 3000;

app.get('/user/:id', async (request: Request, response: Response, next: NextFunction) => {
  await UserGetOne(request, response, next);
});

app.get('/user', async (request: Request, response: Response, next: NextFunction) => {
  await UserGet(request, response, next);
});

app.post('/user', async (request: Request, response: Response, next: NextFunction) => {
  await UserPost(request, response, next);
});

app.put('/user', async (request: Request, response: Response, next: NextFunction) => {
  await UserPut(request, response, next);
});


app.listen(port, () => {
  console.log(`Shashin API is now running on ${port}.`);
});