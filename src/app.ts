import express from 'express';
import { requestSchemaValidator } from './middleware/schema-validator.middleware';
import { dtoRequestUserPatch, dtoRequestUserPost, dtoRequestUserPut } from './schema/user.schema';
import { responseBodyGenerator } from './middleware/response-body.middleware';
import { dtoRequestAlbumPatch, dtoRequestAlbumPost, dtoRequestAlbumPut } from './schema/album.schema';
import DbController from './controllers/DbController';
import { endpointCreate, endpointDelete, endpointGeAllByQuery, endpointGetUnique, endpointUpdate } from './controllers/endpoint.controller';
import { dtoRequestPhotoPatch, dtoRequestPhotoPost, dtoRequestPhotoPut } from './schema/photo.schema';
import { dtoParams } from './schema/common.schema';
import { paramsValidator } from './middleware/params-validator.middleware';

const port = 3000;
const app = express();
app.use(express.json());

// Give us a means to get response body
app.use(responseBodyGenerator);
const db = new DbController();

// User Routes
app.post('/user', requestSchemaValidator(dtoRequestUserPost), endpointCreate('user', db));

app.get('/user/:id', paramsValidator(dtoParams), endpointGetUnique('user', db));

app.get('/user', endpointGeAllByQuery('user', db));

app.patch('/user', requestSchemaValidator(dtoRequestUserPatch), endpointUpdate('user', db));

app.post('/user', requestSchemaValidator(dtoRequestUserPost), endpointUpdate('user', db));

app.put('/user', requestSchemaValidator(dtoRequestUserPut), endpointUpdate('user', db));

app.delete('/user/:id', paramsValidator(dtoParams), endpointDelete('user', db));


// Album
app.post('/album', requestSchemaValidator(dtoRequestAlbumPost), endpointCreate('album', db));

app.get('/album/:id', paramsValidator(dtoParams), endpointGetUnique('album', db));

app.get('/album', endpointGeAllByQuery('album', db));

app.patch('/albumn', requestSchemaValidator(dtoRequestAlbumPatch), endpointUpdate('album', db));

app.put('/album', requestSchemaValidator(dtoRequestAlbumPut), endpointUpdate('album', db));

app.delete('/album/:id', paramsValidator(dtoParams), endpointDelete('album', db));


// Photo
app.post('/photo', requestSchemaValidator(dtoRequestPhotoPost), endpointCreate('photo', db));

app.get('/photo/:id', paramsValidator(dtoParams), endpointGetUnique('photo', db));

app.get('/photo', endpointGeAllByQuery('photo', db));

app.patch('/photo', requestSchemaValidator(dtoRequestPhotoPatch), endpointUpdate('photo', db));

app.put('/album', requestSchemaValidator(dtoRequestPhotoPut), endpointUpdate('photo', db));

app.delete('/photo/:id', paramsValidator(dtoParams), endpointDelete('photo', db));

app.listen(port, () => {
  console.log(`Shashin API is now running on ${port}.`);
});