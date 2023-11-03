// require('@babel/register');
// require('dotenv').config();
const express = require('express');
const cors = require('./src/lib/cors');

const loginRouter = require('./src/routes/loginRoute');

const app = express();

// app.locals.hello = 'Hello world';

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors);
app.use('/login', loginRouter);

// app.get('*', (req, res) => res.redirect('/users'));

app.listen(PORT, () => { console.log(`Server is up on ${PORT}`); });
