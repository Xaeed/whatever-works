import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe.only('AppController (e2e)', () => {
  let app: INestApplication;
  const USERNAME = "wtAdmin";
  let PASSWORD = "whateverWorks";
  let authToken=null;
  let userId: number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/auth/register (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/auth/register')
      .send({ username: USERNAME, password: PASSWORD })
      .expect(201);
    userId = response.body.id; // Save the user ID from the response
  
  });

  it('/api/auth/login (POST)', async() =>{
    const response = await request(app.getHttpServer())
    .post('/api/auth/login')
    .send({username: USERNAME, password: PASSWORD})
    .expect(201);
    authToken = response.body.access_token; // saving login auth token
  })


  it('/api/user/update (PUT)', async() =>{
    const response = await request(app.getHttpServer())
    .put(`/api/user/${userId}`)
    .auth(authToken,{ type: "bearer" })
    .send({username: 'wtUser'})
    .expect(200);
    expect(response.body.username).toBe('wtUser')
  })


  it('/api/delete (POST)', async() =>{
   await request(app.getHttpServer())
    .post(`/api/delete/${userId}`)
    .auth(authToken,{ type: "bearer" })
  })
});
