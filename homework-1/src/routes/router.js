const mainRoute = require('./main/mainRoute');
const productsRoute = require('./products/productsRoute');
const signupRoute = require('./users/signupRoute');

const router = {
  '/signup': signupRoute,
  '/products': productsRoute,
  default: mainRoute
};

module.exports = router;