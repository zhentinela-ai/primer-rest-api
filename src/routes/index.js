const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
  const data = {
    "name": "Zhent",
    "website": "zhent.com"
  }
  res.json(data);
});

module.exports = router;