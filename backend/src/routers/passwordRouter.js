const express = require('express');
const { addPassword, editPassword, getPasswords, deletePassword } = require('../controller/Passwords');
const router = express.Router();

router.get('/fetch', getPasswords)
router.post('/add', addPassword)
router.put('/edit/:id', editPassword)
router.delete('/delete/:id', deletePassword)
module.exports = router;