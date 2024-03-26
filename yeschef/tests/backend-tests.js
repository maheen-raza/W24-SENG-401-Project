const supertest = require('supertest');

describe('API Tests', () => {
  let expect;
  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  const request = supertest("http://localhost:4000");

    // Test ID: 1
    it('login', async () => {
      const response = await request
        .post('/auth/login')
        .send({ 'email': 'testaccount@example.com', 'password': 'testaccount' });
  
      expect(response.status).to.equal(200);
      expect(response.body.token).to.exist;
    });

  // Test ID: 2
  it('create account', async () => {
    const response = await request
      .post('/auth/join')
      .send({ 'email': "new7@example.com", 'password': "passwordabcd" });   // must change email and password every time 

    expect(response.status).to.equal(201);
  });

  // Test ID: 3
  it('create account with existing email', async () => {
    const response = await request
      .post('/auth/join')
      .send({ 'email': 'testaccount@example.com', 'password': '12345678' });

    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal('User already exists use another email !');
  });

  // Test ID: 4
  it('create salad recipe', async () => {
    const loginResponse = await request
      .post('/auth/login')
      .send({ 'email': 'testaccount@example.com', 'password': 'testaccount' });
  
    const token = loginResponse.body.token;
  
    const createRecipeResponse = await request
      .post('/recipe/create')
      .set('Authorization', `Bearer ${token}`)
      .field('title', 'salad')
      .field('ingredients', 'veg')
      .field('note', 'healthy')
      .field('description', 'amazing')
      .attach('image', '/Users/yanisasrisa-ard/Downloads/green-salad.jpeg');
  
    expect(createRecipeResponse.status).to.equal(200);
  }).timeout(5000);

  // Test ID: 5
  it('view all recipes', async () => {
    const loginResponse = await request
      .post('/auth/login')
      .send({ 'email': 'testaccount@example.com', 'password': 'testaccount' });

    const token = loginResponse.body.token;
  
    const recipesResponse = await request
      .get('/recipe/')
      .set('Authorization', `Bearer ${token}`);
  
    expect(recipesResponse.status).to.equal(200);
  });

  // Test ID: 6
  it('search for burger', async () => {
    const loginResponse = await request
      .post('/auth/login')
      .send({ 'email': 'testaccount@example.com', 'password': 'testaccount' });

    const token = loginResponse.body.token;
  
    const searchResponse = await request
      .get('/recipe/find?q=burger')
      .set('Authorization', `Bearer ${token}`);
  
    expect(searchResponse.status).to.equal(200);
  });

  // Test ID: 6
  it('search for yummy tag', async () => {
    const loginResponse = await request
      .post('/auth/login')
      .send({ 'email': 'testaccount@example.com', 'password': 'testaccount' });

    const token = loginResponse.body.token;
  
    const searchResponse = await request
      .get('/recipe/find?q=yummy')
      .set('Authorization', `Bearer ${token}`);
  
    expect(searchResponse.status).to.equal(200);
  });

  // Test ID: 7
  it('change password', async () => {
    const loginResponse = await request
      .post('/auth/login')
      .send({ 'email': 'new7@example.com', 'password': 'passwordabcd' }); // must change every time according to account created

    const token = loginResponse.body.token;

    const response = await request
      .put('/auth/updatePassword')
      .set('Authorization', `Bearer ${token}`)
      .send({ 'email': 'new7@example.com', 'newPassword': 'password' }); // must change email every time according to account created

    expect(response.status).to.equal(200);
  });

  // Test ID: 7
  it('change email', async () => {
    const loginResponse = await request
      .post('/auth/login')
      .send({ 'email': 'new7@example.com', 'password': 'password' }); // must change every time according to account created

    const token = loginResponse.body.token;

    const response = await request
      .put('/auth/updateEmail')
      .set('Authorization', `Bearer ${token}`)
      .send({ 'email': 'new7@example.com', 'newEmail': 'new7email@example.com' }); // must change email every time according to account created

    expect(response.status).to.equal(200);
  });

   // Test ID: 9
   it('login incorrect password', async () => {
    const response = await request
      .post('/auth/login')
      .send({ 'email': 'testaccount@example.com', 'password': 'incorrectpassword' });

    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal('Invalid email or password');
  });

});
