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
            albumId: { type: "string" },
            userId: { type: "string" },
            name: { type: "string" },
            summary: { type: "string" },
            storagePath: { type: "string" },
            sortOrder: { type: "number" }
          },
          required: ['createdAt','modifiedAt','albumId','userId','name','summary','storagePath','sortOrder']
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
            sortOrder: { type: "number" },
            storagePath: { type: "string" }
          },
          required: ['userId','albumId','name','storagePath']
        }
      },
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
            albumId: { type: "string" },
            name: { type: "string" },
            summary: { type: "string" },
            sortOrder: { type: "number" },
            storagePath: { type: "string" }
          },
          required: ['albumId','name','summary','sortOrder','storagePath']
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
};

export const dtoRequestPhotoPatch = {
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
            albumId: { type: "string" },
            name: { type: "string" },
            summary: { type: "string" },
            sortOrder: { type: "number" },
            storagePath: { type: "string" }
          }
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
}
