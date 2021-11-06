export const dtoAlbum = {
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
            name: { type: "string" },
            summary: { type: "string" },
            sortOrder: { type: "string" }
          },
          required: ['createdAt','modifiedAt','userId','name','summary','sortOrder']
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
}

export const dtoRequestAlbumPost = {
  type: "object",
  properties: {
    data:  { 
      type: "object",
      properties: {
        type:  { type: "string" },
        attributes: {
          type: "object",
          properties: {
            remoteAlbumId: { type: "string" }
          },
          required: ['remoteAlbumId']
        }
      },
      required: ['type']
    }   
  },
  required: ['data']
};

export const dtoRequestAlbumPut = {
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
            remoteAlbumId: { type: "string" }
          },
          required: ['remoteAlbumId']
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
}

export const dtoRequestAlbumPatch = dtoRequestAlbumPut;

