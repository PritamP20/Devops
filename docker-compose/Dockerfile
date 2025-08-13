FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres

RUN DATABASE_URL=$DATABASE_URL 
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]