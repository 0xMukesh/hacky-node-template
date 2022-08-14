# hacky-node-template

🏄‍♂️ A type-safe Node.js template to quickly get started building.

## Tech-stack

- [Express.js](https://expressjs.com/) - Fast, un-opinionated, minimalist web framework for Node.js
- [Prisma](https://prisma.io) - Type-safe ORM to ship code which doesn't break during production.
- [MongoDB](https://mongodb.com) - A NoSQL database to build fast and smart.
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Getting started

1. If you haven't installed pnpm yet then go ahead and install it via npm/yarn.

   ```bash
   yarn add -g pnpm # yarn
   npm install -g pnpm # npm
   ```

2. Click on "Use this template" and you are ready to ship 🏄‍♂️
3. Install all the dependencies via `pnpm i` command.
4. The database schema is stored within the [`prisma/schema.prisma`](./prisma/schema.prisma) file. If you want to have cross-file model relations, then you would need to use something like [Prismix](https://github.com/jamiepine/prismix).
5. Deploy your Node.js application to [Railway](https://railway.app) within seconds

   [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/7HetPt?referralCode=hhzWkP)

Made with ❤ by [@0xMukesh](https://twitter.com/0xMukesh) for buildoors
