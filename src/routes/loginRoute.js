const router = require('express').Router();
// const PostComponent = require('../pages/index.html');
// const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const findUser = await User.findOne({
      where: {
        login: req.body.login,
        password: req.body.password,
      },
    });
    // const posts = postsRawData.map((post) => post.dataValues);
    console.log(findUser);
    // const { user } = req.app.locals;
    // renderTemplate(PostComponent, { posts, user }, res);

    if (findUser) {
      res.json({ text: 'Есть пользователь' });
    } else {
      res.json({ text: 'Нет такого пользователя' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
