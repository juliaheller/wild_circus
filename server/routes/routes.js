const express = require('express');
const UsersController = require('../controllers/users.controller');
const { check } = require('express-validator');

const router = new express.Router();

router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getById);
router.post(
    '/users',
    [check('email').not().isEmpty().withMessage('Email cannot be empty')],
    UsersController.create
);
router.put('/users/:id', UsersController.update);
router.delete('/users/:id', UsersController.delete);

module.exports = router;
