#Shashin API
ShashinAPI is a simple api for organizing photos.  It is made of 3 tables.  User, Album, and Photo.  There is no built in authenticaiton by design. User authentication can be done by 3rd party middleware of your choice.  You will simply need to integrate that yourself.

It is currently written to use Mysql as the database.  However in the future we will probably provide a schema.prisma for other databases.

Shashin API follows the [JSON-API](https://jsonapi.org/) standard.  

##Getting Started.
First clone this repository into your local system.

`git clone git@github.com:project-shashin/shashin-api.git`

Before you install the node modules you should copy `env.example` to `.env` and update your database connection string.

Once this is done you will need to install the required modules using `npm install` from the root directory of the repository.  During the process Prisma will build the prisma client, which is why you should update the `.env` file ahead of time.

To run the project `npm run serve` will start the express engine on port 3000

##Model and Migrations
If you change, the model once your change is complete, you will need to run the prisma migration tool.  Make sure to give each migration a unique short description to help identify changes.

`npx prisma migrate dev --name 'migration-short-description'`

##Prisma Client
When you change the model or database settings you will also have to rebuild the client located in node_modules.

`prisma generate`