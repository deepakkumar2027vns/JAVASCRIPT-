const currentDate = new Date();

console.log(currentDate);

console.log(currentDate.getFullYear());

console.log(currentDate.getMonth()+1);

console.log(currentDate.getDate());

console.log(currentDate.getHours());

console.log(currentDate.getMinutes());

console.log(currentDate.getSeconds());

const pastDate = new Date('2020-01-01');

console.log(pastDate);

const diffTime = Math.abs(currentDate - pastDate);

console.log(currentDate.getTime());//epoch time