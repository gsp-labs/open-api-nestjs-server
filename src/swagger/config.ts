import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { UserModule } from '../user/user.module';

const createSwaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Example api')
    .setVersion('1.0')
    .addBearerAuth({
      description: 'Please enterBearer token: Bearer <JWT>',
      name: 'Authorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',
    });

  return SwaggerModule.createDocument(app, config.build(), {
    include: [UserModule],
  });
};

export { createSwaggerConfig };
