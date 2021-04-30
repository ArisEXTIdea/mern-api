const express = require('express');
const app = express();

const router = express.Router();

router.use('/customer', (req, res, next) => {
    res.json({nama: 'Muhammad Aris W', umur: 21, 'Jenis kelamin': 'laki-laki'})
})



app.listen(4000);
app.use('/', router)