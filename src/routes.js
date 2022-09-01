const {
  addBookOrigin, getAllBooksOrigin, getBooksByOrigin, editBooksByOrigin, deleteBooksByOrigin,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookOrigin,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksOrigin,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByOrigin,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksByOrigin,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksByOrigin,
  },

];

module.exports = routes;
