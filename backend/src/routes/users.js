const { Router } = require('express');
const router = Router();

const {getUsers, createUser, deleteUser, updateUser, logUser} = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)

router.route('/login')
    .post(logUser)

router.route('/register')
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;