import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JWT_SECRET } from './configs/index';
import { UserEntity } from './core/entities/user.entity';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: JWT_SECRET.secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // 1 hour
      },
    }),
  );

  passport.serializeUser(function(user:UserEntity, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user:UserEntity, done) {
    done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}

bootstrap();
