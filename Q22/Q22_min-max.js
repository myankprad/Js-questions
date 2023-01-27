// 22. The following is an array of 10 students ages:
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

 

// - Sort the array and find the min and max age


console.log(ages.sort());
console.log(`Mininum age is ${ages[0]} `);
console.log(`Mininum age is ${ages[ages.length-1]} `);

// - Find the median age(one middle item or two middle items divided by two)


const meadianAge = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
console.log(`The meadian age is: ${meadianAge}`)

// - Find the average age(all items divided by number of items)



let sum = 0;
ages.forEach(items=>
    {
    sum+= items;
})

const ageAvg = sum/ages.length;
console.log(`The average age is ${ageAvg}`);


// - Find the range of the ages(max minus min)
const ageRange = ages[ages.length - 1] - ages[0];
console.log(`The Range is ${ageRange}`);


// - Compare the value of (min - average) and (max - average), use abs() method




const min = Math.abs(ages[0]-ageAvg);
const max = Math.abs((ages.length-1)-ageAvg);

if(min>max){
    console.log(`Min age is grater than max age by ${min-max}`);
}
else{
    console.log(`Max age is greater than min by age ${max-min}`);
}