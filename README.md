# easyKitchen

easyKitchen is an application that allows amateur chefs to offer delivery service. The application has two views, one in which chefs can create daily menus as well as track orders, and the other where clients can view the offers and create orders.

This repo is created for refactoring the project to TypeScript and implementing unit and E2E tests, using Jest and Cypress respectively.

## Screenshots
**Application landing page:**
![EKSS1](https://user-images.githubusercontent.com/65975591/113591587-5e549780-9634-11eb-8ddd-87adb63b25bc.png)
**Cypress E2E testing:**
![EKSS2](https://user-images.githubusercontent.com/65975591/113592517-901a2e00-9635-11eb-9e28-eca693e7224c.png)

## Getting Started

1. Clone the repo
```
git clone https://github.com/MathiasSoderqvist/easyKitchen.git
cd easyKitchen
```

2. Install server dependencies
```
cd server
npm install
```
3. Create your database related variables in a .env file under 'server' folder, using the 'config.js' file under 'server/config' for a list of required variables. Your .env file should look like below. Don't forget to add this file to your gitignore!
  ```
DB_USER=**your database username**
DB_PASSWORD=**your db password**
DB_NAME=**your db name**
DB_DIALECT="postgres"
DB_HOST=**your db host, ex: localhost**
DB_PORT=**your db port, ex: 3001**
NODE_ENV=**one of environments used in config.js file**
DB_TEST=**db name for test environment as an example**
TEST_PORT=**db port for test environment as an example**
  ```
4. You can run your server using nodemon to watch for changes
```
nodemon
```

5. Install client dependencies
```
cd ../client
npm install
```
6. Run your react app
```
npm start
```
7. Run tests on client using jest (press a when prompted to run all tests):
```
jest
```
8. Run tests on server using jest (press a when prompted to run all tests):
```
cd ../server
jest
```
9. Configuration for Cypress will depend on setup. You can find instructions on installation [here](https://docs.cypress.io/guides/getting-started/installing-cypress). Tests written for this project can be found under the path cypress/integration.

## Tech Stack
### Front End
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

### Back End
- [Express](http://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)


