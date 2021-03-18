const { readFileSync } = require('fs');
const path = require('path')

const mockOrders = JSON.parse(
  readFileSync(path.join(__dirname, 'res.json').toString())
)

const _mockOrders = mockOrders
const _mockOrder1 = mockOrders[0];
const _mockOrder2 = mockOrders[1];

const _mockSendOrder = {
  clientName: "Zjwenny Zjwiepeling",
  clientAddress: "sjevraojeweeg 87",
  clientPhone: 1012012112,
  DishId: [1, 2]
}

module.exports = {
  _mockOrders,
  _mockOrder1,
  _mockOrder2,
  _mockSendOrder
}