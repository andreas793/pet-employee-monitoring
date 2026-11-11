const express = require('express');
const router = express.Router();
const {all, single, add, remove, edit} = require("../controllers/emloyees");
const {auth} = require("../middleware/auth");


/* /api/employees */
router.get('/', auth, all );

/* /api/employees/:id */
router.get('/:id', auth, single);

/* /api/employees/add */
router.post('/add', auth, add)

/* /api/employees/remove */
router.post('/remove/:id', auth, remove )

/* /api/employees/edit/:id */
router.post('/edit/:id', auth, edit)

module.exports = router;