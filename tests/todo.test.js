const request = require('supertest');
const app = require('../app'); 
describe('Todo API', () => {
  let todoId;

  it('should create a new Todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send({ title: 'Test Todo' });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Test Todo');
    todoId = response.body.id;
  });

  it('should get a list of all Todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get a specific Todo', async () => {
    const response = await request(app).get(`/todos/${todoId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(todoId);
  });

  it('should delete a specific Todo', async () => {
    const response = await request(app).delete(`/todos/${todoId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Todo deleted');
  });
});
