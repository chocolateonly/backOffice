const express = require('express');
const db = require('./../db');
const House = db.House;

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    console.log('---------');
    console.log(req.body);
    const data = await House.create(req.body);
    const body = {status: 'success', data};
    res.json(body);
    console.log(JSON.stringify(body));
  } catch (err) {
    console.log(err);
    next(err)
  }
});
router.get('/:id', async (req, res, next) => {
  //res.send('get!!!');
  const id = req.params.id;
  try {
    const data = await House.findByPk(id);
    const body = {status: 'success', data};
    res.json(body);
    console.log(JSON.stringify(body));
  } catch (err) {
    next(err)
  }
});
router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  try {
    const data = await House.update(req.body, {where: {id}});
    const body = {status: 'success', data};
    res.json(body);
    console.log(JSON.stringify(body));
  } catch (err) {
    next(err)
  }
});
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await House.destroy({where: {id}});
    const body = {status: 'success', data};
    res.json(body);
    console.log(JSON.stringify(body));
  } catch (err) {
    next(err)
  }
});

module.exports = router;
