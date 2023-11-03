const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body, '111');

    const findUser = await User.findOne({
      where: {
        login: req.body.login,
        password: req.body.password,
      },
    });

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
