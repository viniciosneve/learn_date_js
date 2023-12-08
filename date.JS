/*
with this we can get today minute, secund and the month, day and year 
*/
const d= new Date();
console.log(d);


/*
With this we can to change the date using date string
*/
const d1= new Date('2022-03-12');
console.log(d1);

const d2= new Date('Janeiro 13, 2000 11:12:00');
console.log(d2);

/*we can chage the date without string but using a int*/

const d3 = new Date(2023, 11, 8, 2, 60);
console.log(d3);