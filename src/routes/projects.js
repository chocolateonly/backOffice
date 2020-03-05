const express = require('express');
const db = require('../dbConnection');
const Project = db.Project;

const router = express.Router();
router.get('/list', async (req, res, next) => {
  try {
    const data = await Project.findAll({
      order:[['createdAt','DESC']]
    });
    const body = {status: 'success', data};
    res.json(body);
    console.log(JSON.stringify(body));
  } catch (err) {
    next(err)
  }
});
router.post('/', async (req, res, next) => {
  try {
    console.log('---------');
    console.log(req.body);
    const mockData=[
      {
        title: '某某处正处于施工极端需要设备施工施工极端需要设备施工施工极端需要设备施工',
        type: '设备施工',
        address: '襄阳市樊城区环球金融中心1111111111',
        time: '2020-02-21',
        status: '待开工',
        createdAt: '2020-02-13 18:30'
      },
      {
        title: '某某处正处于施工极端需要设备施工施工极端需要设备施工施工极端需要设备施工',
        type: '光缆施工',
        address: '襄阳市樊城区环球金融中心1111111111',
        time: '2020-02-21',
        status: '待开工',
        createdAt: '2020-02-13 18:30'
      },
      {
        title: '某某处正处于施工极端需要设备施工施工极端需要设备施工施工极端需要设备施工',
        type: '光缆巡视',
        address: '襄阳市樊城区环球金融中心1111111111',
        time: '2020-02-21',
        status: '待开工',
        createdAt: '2020-02-13 18:30'
      },
      {
        title: '2某某处正处于施工极端需要设备施工施工极端需要设备施工施工极端需要设备施工',
        type: '设备施工',
        address: '襄阳市樊城区环球金融中心1111111111',
        time: '2020-02-21',
        status: '进行中',
        createdAt: '2020-02-13 18:30'
      },
      {
        title: '2某某处正处于施工极端需要设备施工施工极端需要设备施工施工极端需要设备施工',
        type: '设备施工',
        address: '襄阳市樊城区环球金融中心1111111111',
        time: '2020-02-21',
        status: '已验收',
        createdAt: '2020-02-13 18:30'
      },
    ]
    const data = await Project.bulkCreate(mockData);
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
    const data = await Project.findByPk(id);
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
    const data = await Project.update(req.body, {where: {id}});
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
    const data = await Project.destroy({where: {id}});
    const body = {status: 'success', data};
    res.json(body);
    console.log(JSON.stringify(body));
  } catch (err) {
    next(err)
  }
});

module.exports = router;
