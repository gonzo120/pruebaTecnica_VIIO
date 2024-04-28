
FROM node:18.19.1
WORKDIR /app
COPY . .
RUN npm install
RUN npm i express
RUN npm install bcryptjs@^2.4.3 cookie-parser@^1.4.6 cors@^2.8.5 express@^4.19.2 jsonwebtoken@^9.0.2 mongoose@^8.3.2 morgan@^1.10.0 request@^2.88.2 zod@^3.23.4 nodemon@^3.1.0 --save

EXPOSE 3000
CMD ["npm", "run", "dev"]