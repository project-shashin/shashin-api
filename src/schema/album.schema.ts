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
            sortOrder: { type: "number" }
          },
          required: ['createdAt','modifiedAt','userId','name','summary','sortOrder'],
          additionalProperties: false          
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
            userId: { type: "string" },
            name: { type: "string" },
            summary: { type: "string" },
            sortOrder: { type: "number" }
          },
          required: ['userId','name'],
          additionalProperties: false          
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
            name: { type: "string" },
            summary: { type: "string" },
            sortOrder: { type: "number" }
          },
          required: ['name','summary','sortOrder'],
          additionalProperties: false          
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
};

export const dtoRequestAlbumPatch = {
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
            name: { type: "string" },
            summary: { type: "string" },
            sortOrder: { type: "number" }
          },
          additionalProperties: false          
        }
      },
      required: ['type','id'],
      
    }   
  },
  required: ['data']
}
