const { Router } = require('express');
const authController = require('../controllers/authControllers');
const moreController = require('../controllers/moreControllers');

const router = Router();

//signup, login, logout
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

//home  courses moreController
router.get('/home', moreController.home_get);
router.get('/student', moreController.student_get);
router.get('/view_courses', moreController.view_courses_get);
//teacher stuff
router.get('/teacher', moreController.teacher_get);
router.get('/edit_courses', moreController.edit_courses_get);
router.post('/edit_courses', moreController.edit_courses_post);
//student stuff



module.exports = router;