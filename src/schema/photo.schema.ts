export const dtoPhoto = {
  type: "object",
  properties: {
    data:  { 
      type: "object",
      properties: {
        type:  { type: "string" },
        id:  { type: "string" },
        attributes: {
          type: "object",
          properties: {
            createdAt: { type: "string" },
            modifiedAt: { type: "string" },
            userId: { type: "string" },
            albumId: { type: "string" },
            name: { type: "string" },
            summary: { type: "string" },
            storagePath: { type: "integer" },
            sortOrder: { type: "string" }
          },
          required: ['createdAt','modifiedAt','userId','albumeId','name','summary','storagePath','sortOrder']
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
}

export const dtoRequestPhotoPost = {
  type: "object",
  properties: {
    data:  { 
      type: "object",
      properties: {
        type:  { type: "string" },
        attributes: {
          type: "object",
          properties: {
            userId: { type: "string" },
            albumId: { type: "string" },
            name: { type: "string" },
            summary: { type: "string" },
            storagePath: { type: "integer" },
            sortOrder: { type: "string" }
          },
          required: ['createdAt','modifiedAt','userId','albumeId','storagePath']
        }      },
      required: ['type']
    }   
  },
  required: ['data']
};

export const dtoRequestPhotoPut = {
  type: "object",
  properties: {
    data:  { 
      type: "object",
      properties: {
        type:  { type: "string" },
        id:  { type: "string" },
        attributes: {
          type: "object",
          properties: {
            remotePhotoId: { type: "string" }
          },
          required: ['remotePhotoId']
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
}

export const dtoRequestPhotoPatch = dtoRequestPhotoPut;

