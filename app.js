// require('@babel/register');
// require('dotenv').config();
const express = require('express');
const cors = require('./src/lib/cors');

const loginRouter = require('./src/routes/loginRoute');
// const userActionRouter = require('./routers/userAction.router');
// const postRenderRouter = require('./routers/postRender.router');
// const postActionRouter = require('./routers/postAction.router');

const app = express();
app.locals.hello = 'Hello world';

const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
// app.use('/users', userRenderRouter);
// app.use('/userActions', userActionRouter);
app.use('/login', loginRouter);
// app.use('/postActions', postActionRouter);

app.get('*', (req, res) => res.redirect('/users'));

app.listen(PORT, () => { console.log(`Server is up on ${PORT}`); });
