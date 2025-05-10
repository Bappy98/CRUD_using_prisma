const express = require('express');
const { createUser, getUser, getUserById, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();

router.route('/user-create').post(createUser);
router.get('/users',getUser);
router.route('/user/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;