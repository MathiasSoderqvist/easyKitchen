require('dotenv').config();
const supertest = require('supertest');
const { runServer } = require('../server');
const { Dish, sequelize } = require('../models');
const { mockDishes, mockNewDish } = require('../__mocks__/dish.mocks');

let request;

beforeAll(async () => {
  const app = await runServer(process.env.TEST_PORT);
  request = supertest(app);
})
afterAll(async () => {
  await sequelize.close();
})

describe('GET requests for dishes', () => {
  beforeAll(async () => {
    await Dish.destroy({where: {}});
    await Dish.bulkCreate(mockDishes);
  });

  // GET
  it('should send status code 200 for GET request', async done => {
    const response = await request.get('/dish');
    expect(response.status).toBe(200);
    done();
  });

  it('should reply with correct dish data for the GET request', async done => {
    const response = await request.get('/dish');
    let [mock1, mock2] = response.body;

    expect(mock1.title).toBe('Test Burger');
    expect(mock1.description).toBe('A test classic');
    expect(mock1.price).toBe('4.00');

    expect(mock2.title).toBe('Test Bowl');
    expect(mock2.description).toBe('A healthy alternative to testing in production');
    expect(mock2.price).toBe('9.00');
    done();
  });
})

// POST
describe('POST requests for dishes', () => {
  beforeEach(async () => {
    await Dish.destroy({where: {title: 'New Mock Pizza'}});
  });

  it('should send status code 201 for POST request', async done => {
    const response = await request.post('/dish').send(mockNewDish);
    expect(response.status).toBe(201);
    done();
  });

  it('should reply with the new dish in body', async done => {
    const response = await request.post('/dish').send(mockNewDish);
    let replyDish = response.body;

    expect(replyDish.title).toBe('New Mock Pizza');
    expect(replyDish.description).toBe('just because it starts with new');
    expect(replyDish.price).toBe('12.00');
    done();
  });
});

// DELETE
describe('DELETE requests for dishes', () => {
  beforeAll(async () => {
    await Dish.destroy({where: {}});
    await Dish.bulkCreate(mockDishes);
  });

  it('should reply with status code 204', async () => {
    const response = await request.delete('/dish').send({title: mockDishes[0].title});
    expect(response.status).toBe(204);
  })

  it('should delete the dish from database', async () => {
    const dishes = await Dish.findAll();

    expect(dishes).toHaveLength(1);
    expect(dishes[0].title).toBe('Test Bowl');
    expect(dishes[0].description).toBe('A healthy alternative to testing in production');
    expect(dishes[0].price).toBe('9.00');
  });
});

describe('UPDATE requests for dishes', () => {
  beforeAll(async () => {
    await Dish.destroy({where: {}});
    await Dish.bulkCreate(mockDishes);
  });
  it('should reply with status code 201', async () => {
    const response = await request.put('/dish').send({dishReference: mockDishes[0].title, title:'nomorepizza',
    description: 'I changed it'});
    expect(response.status).toBe(201);
  })
  it('should reply with the updated dish in the body', async () => {
    const response = await request.put('/dish').send({dishReference: 'nomorepizza', title:'yesmorepizza',
    description: 'I changed it again!'});
    expect(response.body.title).toBe('yesmorepizza');
    expect(response.body.description).toBe('I changed it again!');
    expect(response.body.price).toBe(mockDishes[0].price + '.00');
  })
})
