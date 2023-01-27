// 17. Write a program which tells the number of days in a month.


// Using if/else
let month = 'july';

if(month=='January' || month=='March' ||  month=='May' || month=='July' || month=='August'){
    console.log(`Number of days in ${month} is 31`);
}else if(month=='February'){
    console.log(`Number of days in ${month} is 28/29`);
}else{
    console.log(`Number of days in ${month} is 30`);
}
