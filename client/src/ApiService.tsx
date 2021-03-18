import { Dish, dishUpdateRequest } from 'interfaces/dish';
import { NewMenuRequest } from 'interfaces/menu';
import { Order } from 'interfaces/order';

const BASE_URL = 'http://localhost:3001';

interface FetchOptions {
  method?: string,
  headers?: {[key: string]: string},
  body: string
}

//DISHES
const getDishes = () => {
  return fetchRequest('/dish');
}

const addDish = (body: Dish) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetchRequest('/dish', httpOptions);
}

const updateDish = (body: dishUpdateRequest) => {
  const httpOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetchRequest('/dish', httpOptions);
}

//MENUS
const getMenus = () => {
  return fetchRequest('/menu');
}

const getMenu = () => {
  return fetchRequest('/menu/:id');
}

const createMenu = (body: NewMenuRequest) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return fetchRequest('/menu', httpOptions);
}

//TODO IMPLEMENT IT
// const deleteMenu = (id: string) => {
//   const httpOptions = {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(id)
//   };
//   return fetchRequest(`/menu/:${id}`, httpOptions);
// };

//ORDERS
const getOrders = () => {
  return fetchRequest('/order');
}

const createOrder = (body: Order) => {
  const httpOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  console.log('bodyApi -> ', body);
  return fetchRequest('/order', httpOptions);
}


function fetchRequest (path: string, options?: FetchOptions) {
  return fetch(BASE_URL + path, options)
    .then((res) => res.status >= 400 ? Promise.reject() : res)
    .then((res) => res.json())
    .catch((error) => console.log(`Error fetching ${path}`, error))
}

export default {
  getDishes,
  getMenus,
  getOrders,
  addDish,
  updateDish,
  createMenu,
  createOrder,
  getMenu
};
