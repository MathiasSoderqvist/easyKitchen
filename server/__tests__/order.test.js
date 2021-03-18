require('dotenv').config();
const supertest = require('supertest');
const { runServer } = require('../server');
const { Order, Dish, db, sequelize } = require('../models');
const { _mockOrders, _mockOrder1, _mockOrder2, _mockSendOrder } = require('../__mocks__/order/order.mocks');
const { mockDishes } = require('../__mocks__/dish.mocks');
// const { mockDishes, mockNewDish } = require('../__mocks__/dish.mocks');

let request;
let app;

beforeEach(async () => {
  app = await runServer(process.env.TEST_PORT);
  request = supertest(app);
})

// GET Tests
describe('Order Controller GET tests', () => {
  beforeEach(async () => {
    await Order.destroy({ where: {} });
    await Order.create(_mockOrder1)
    await Order.create(_mockOrder2)
  })

  it('should return a 404 code if the page does not exist', async done => {
    const res = await request.get('/habsjnabakalele');
    expect(res.statusCode).toEqual(404);
    done();
  })

  it('should return a 200 code if the page does exist', async done => {
    const res = await request.get('/order');
    expect(res.statusCode).toEqual(200);
    done();
  })

  it('should reply with the correct with the correct order data for the get request for order one', async done => {
    const res = await request.get('/order');
    const [_order2, _order1] = res.body;

    // order 1 asserions
    expect(_order1.id).toBe(4);
    expect(_order1.clientName).toBe("Sopa de caracol");
    expect(_order1.clientPhone).toBe(96321458);
    expect(_order1.comments).toBe("salsa muy picante");
    expect(_order1.clientAddress).toBe("hey");
    

    // order 2 assertions
    expect(_order2.id).toBe(5);
    expect(_order2.clientName).toBe("Lemmy Laamtuut");
    expect(_order2.clientPhone).toBe(96321458);
    expect(_order2.comments).toBe("no pickles");
    expect(_order2.clientAddress).toBe("tuutelaan 83");

    //test is completed
    done();
  })
});

// POST tests
describe('Order Controller POST tests', () => {
  beforeEach(async () => {
    await Order.destroy({ where: { clientName: "Zwenny Zjwiepeling"} });
    await Dish.destroy({where: {}});
    await Dish.bulkCreate(mockDishes);
  });

  it('should send a 201 code for valid requests', async done => {
    const res = await request.post('/order').send(_mockSendOrder); 
    done();
  });

  it('should reply with the new dish in the body', async done => {
    const res = await request.post('/order').send(_mockSendOrder);
    let replyOrder = res.body;

    expect(replyOrder.clientName).toBe('Zjwenny Zjwiepeling');
    expect(replyOrder.clientAddress).toBe('sjevraojeweeg 87');
    expect(replyOrder.clientPhone).toBe(1012012112);
    expect(replyOrder.Dishes.length).toBe(2)
    done();
  });

})
