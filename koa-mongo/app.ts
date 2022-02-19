import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';

import index from './routes/index';
import './db/index';

const port = process.env.PORT || 8080;

const app = new Koa();
app
  .use(
    cors({
      origin: '*',
      allowMethods: 'GET,POST',
      allowHeaders: '*',
      exposeHeaders: '*',
    }),
  )
  .use(bodyParser())
  .use(serve('client/public'))
  .use(index.routes())
  .use(index.allowedMethods())
  .listen(port, () => console.log('Koa is listening on port', port));

export default app;
