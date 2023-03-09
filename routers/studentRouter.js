const express = require('express')
const router = express.Router()
const {
    getHome,
    formsubmit,
    studentslist,
    studentdelete,
    studentedit,
    postedit
} = require('../controllers/studentController')



router.get('/',getHome)
router.post('/',formsubmit)
router.get('/students',studentslist)
router.get('/delete/:id',studentdelete)
router.get('/edit/:id',studentedit)
router.post('/edit/:id',postedit)
module.exports = router