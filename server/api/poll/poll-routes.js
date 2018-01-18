var router = require('express').Router();
router.post('/api/poll', (req, res) => {
    console.log(req.body)
})

module.exports = router;