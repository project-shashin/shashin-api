export const dtoUser = {
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
            remoteUserId: { type: "string" }
          },
          required: ['createdAt','modifiedAt','remoteUserId'],
          additionalProperties: false          
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
}

export const dtoRequestUserPost = {
  type: "object",
  properties: {
    data:  { 
      type: "object",
      properties: {
        type:  { type: "string" },
        attributes: {
          type: "object",
          properties: {
            remoteUserId: { type: "string" }
          },
          required: ['remoteUserId'],
          additionalProperties: false          
        }
      },
      required: ['type']
    }   
  },
  required: ['data']
};

export const dtoRequestUserPut = {
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
            remoteUserId: { type: "string" }
          },
          required: ['remoteUserId'],
          additionalProperties: false          
        }
      },
      required: ['type','id']
    }   
  },
  required: ['data']
}

export const dtoRequestUserPatch = dtoRequestUserPut;

