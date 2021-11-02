# shashin-api
simple api for managing photos in albums

# Model and Migrations
After model changes you will need to run the prisma migration tool.  Make sure to give each migration a unique short description to help identify changes.

`npx prisma migrate dev --name 'migration-short-description'`

# Prisma Client
WHen you change the model you will also have to rebuild the client located in node_modules.

`prisma generate`