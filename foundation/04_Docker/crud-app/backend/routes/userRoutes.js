const express = require('express');
const router = express.Router();
const { createUser, getUser, updateUser, deleteUser } = require('../controller/userController')

router.post('/', createUser);
router.get('/', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;