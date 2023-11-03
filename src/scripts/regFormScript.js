/* eslint-disable max-len */
/* eslint-disable no-sequences */
/* eslint-disable no-console */
const form = document.getElementById('form');
console.log(form);

const data = form.elements;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(data);
  console.log(event.target.password.value);

  const response = fetch('http:localhost:3000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ login: data[1].value, password: data[2].value }),
    body: JSON.stringify({ login: event.target.login.value, password: event.target.password.value }),
  });

  response.then((res) => res.json())
    .then((dataRes) => {
      console.log(dataRes);
      if (dataRes.text === 'Нет такого пользователя') {
        alert('Нет такого пользователя');
      }
    });
});
