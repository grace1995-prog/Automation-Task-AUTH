for (let i =0;i < 5;i++){// let 1=0 is initializer, i<5 = is the condition which is true and ,i++ =increment(meaning increase i y 1 each time)
    console.log(i)
}

//while loop

let count =0
while(count< 3){

    console.log(count,"count,<----grace")

    count++
}
const years = [1990, 1978, 1979, 1960, 1927, 1987, 1946, 2001, 2003, 2004, 2005, 2006, 2014, 1934, 1998, 1995]

const ages = [];

for(let i = 0; i < years.length; i++){
    console.log(years[i]);
    ages.push(2024 - years[i]);
    console.log(`Iterator --> ${i}`);
};
console.log(ages);

