import express, { Request, Response, NextFunction } from 'express';
import { UserGet, UserGetOne, UserPost, UserPut, UserDelete } from './controllers/user.controller';
import { AlbumGet, AlbumGetOne, AlbumPost, AlbumPut, AlbumDelete } from './controllers/album.controller';
import { PhotoGet, PhotoGetOne, PhotoPost, PhotoPut, PhotoDelete } from './controllers/photo.controller';

const app = express();
app.use(express.json());
const port = 3000;

// User Routes
app.delete('/user/:id', async (request: Request, response: Response, next: NextFunction) => {
  await UserDelete(request, response, next);
});

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


// Album Routes
app.delete('/album/:id', async (request: Request, response: Response, next: NextFunction) => {
  await AlbumDelete(request, response, next);
});

app.get('/album/:id', async (request: Request, response: Response, next: NextFunction) => {
  await AlbumGetOne(request, response, next);
});

app.get('/album', async (request: Request, response: Response, next: NextFunction) => {
  await AlbumGet(request, response, next);
});

app.post('/album', async (request: Request, response: Response, next: NextFunction) => {
  await AlbumPost(request, response, next);
});

app.put('/album', async (request: Request, response: Response, next: NextFunction) => {
  await AlbumPut(request, response, next);
});


// Photo Routes
app.delete('/photo/:id', async (request: Request, response: Response, next: NextFunction) => {
  await PhotoDelete(request, response, next);
});

app.get('/photo/:id', async (request: Request, response: Response, next: NextFunction) => {
  await PhotoGetOne(request, response, next);
});

app.get('/photo', async (request: Request, response: Response, next: NextFunction) => {
  await PhotoGet(request, response, next);
});

app.post('/photo', async (request: Request, response: Response, next: NextFunction) => {
  await PhotoPost(request, response, next);
});

app.put('/photo', async (request: Request, response: Response, next: NextFunction) => {
  await PhotoPut(request, response, next);
});


app.listen(port, () => {
  console.log(`Shashin API is now running on ${port}.`);
});