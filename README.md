# 🚀 Prisma Configuration Setup

A quick and efficient setup for Prisma ORM in a Node.js/TypeScript environment. 🎯

## 📦 Installation
```sh
npm install prisma --save-dev
npx prisma init
```

## ⚙️ Setup
1. Configure your `.env` file with the database URL.
2. Define your schema in `prisma/schema.prisma`.
3. Run migrations:
   ```sh
   npx prisma migrate dev --name init
   ```

## 🔌 Usage
Generate Prisma Client and use it in your project:
```sh
npx prisma generate
```
```ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

## 🛠️ Commands
- `npx prisma studio` – Visual database explorer
- `npx prisma migrate dev` – Apply migrations
- `npx prisma db push` – Push schema changes

## 📜 License
MIT
