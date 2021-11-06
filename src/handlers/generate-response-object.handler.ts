import { ResponseObject } from '../interfaces/response-object.interface';

export function generateResponseObject(type: string, id: string, data: any) {

  // Remove the ID key from the data if it exists.
  delete data['id'];

  // Create response object.
  const response: ResponseObject = {
    data: {
      type: type,
      id: id,
      attributes: data
    }
  }

  return response;

}