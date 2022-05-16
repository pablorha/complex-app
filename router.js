const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');

// User related routes
router.get('/', userController.home);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// Post related routes
router.get(
	'/create-post',
	userController.mustBeLoggedIn,
	postController.viewCreateScreen
);

router.post(
	'/create-post',
	userController.mustBeLoggedIn,
	postController.create
);

router.get('/post/:id', postController.viewSingle);

// Profile related routes
router.get(
	'/profile/:username',
	userController.ifUserExists,
	userController.profilePostsScreen
);

module.exports = router;
