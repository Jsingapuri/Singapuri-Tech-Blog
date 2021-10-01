const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/home', homeRoutes);

module.exports = router;
