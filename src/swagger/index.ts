import { createSwaggerConfig } from './config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import * as fs from 'fs';

const executor = (async () => {
  const app = await NestFactory.create(AppModule);
  const document = createSwaggerConfig(app);
  fs.writeFileSync('./swagger.json', JSON.stringify(document));
})();

export default executor;
