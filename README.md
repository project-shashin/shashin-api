#Shashin API
ShashinAPI is a simple api for organizing photos.  It is made of 3 tables.  User, Album, and Photo.  There is no built in authenticaiton by design. User authentication can be done by 3rd party middleware of your choice.  You will simply need to integrate that yourself.

It is currently written to use Mysql as the database.  However in the future we will probably provide a schema.prisma for other databases.

Shashin API follows the [JSON-API](https://jsonapi.org/) standard.  

##Getting Started.
First clone this repository into your local system.

`git clone git@github.com:project-shashin/shashin-api.git`

Before you install the node modules you should update the 

Once it is cloned you will need to install the required modules using `npm install` from the root directory of the repository.




##Model and Migrations
After model changes you will need to run the prisma migration tool.  Make sure to give each migration a unique short description to help identify changes.

`npx prisma migrate dev --name 'migration-short-description'`

##Prisma Client
WHen you change the model you will also have to rebuild the client located in node_modules.

`prisma generate`