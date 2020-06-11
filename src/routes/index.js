const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title": "Hello World"});
});

router.get('/test', (req, res) => {
    const data = {
        "name": "Brian",
        "web": "underfix.com"
    }
    res.json(data);
});


module.exports = router;