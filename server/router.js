const router = require('express').Router();
const dishCtrl = require('./controllers/dish.controller');
const orderCtrl = require('./controllers/order.controller')
const menuCtrl = require('./controllers/menu.controller')


  
//DISH
router.get('/dish', dishCtrl.getAll)
router.post('/dish', dishCtrl.addDish)
router.delete('/dish', dishCtrl.deleteDish)
// router.put('', controller.)


//MENU
router.get('/menu', menuCtrl.getAll)
router.post('/menu', menuCtrl.createMenu)
router.delete('/menu', menuCtrl.deleteMenu)


//ORDER
router.get('/order', orderCtrl.getAll)
router.post('/order', orderCtrl.createOrder)
router.delete('/order', orderCtrl.deleteOrder)
// router.put('/order:id', orderCtrl.modifyOrder)

  
module.exports = router;