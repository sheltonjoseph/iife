// Day 5 IIFE AND Arrow functions

// IIFE

// to find odd num
(function()
{
    var arr = [1,2,3,4,5,6,7,8];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
    }
})();

//To Change to title case
(function(){
    var a = "hello world";
    var up = a.toUpperCase();
    console.log(up);
}());

// to sum of nos
var arr=[1,2,3,4,5,6,7];
(function(){
    
    sum=0;
    for(i=0;i<=arr.length;i++){
        sum += arr[i];
        console.log(sum);
    }
}());

const array = [1,2,3,4,5,6,7,8];
(function(){
  const isprime = num =>{

    for(let i=2;i<num;i++){
        if(num%i!==0){
            return num;
        }else{
            `${num} is not a prime no`
        }
    }
}
    let myprime = array.filter(element=>isprime(element));
    console.log(myprime);

}());


// to find prime nos
function isprime(n){
    if(n<2){
        return `${n}is not prime`
}
for(i=2;i<n;i++){
    if(n%i===0){
        return `${n}is not prime a prime no`
    }
    else{
        return `${n}is prime`
    }
}
}
console.log(isprime(4))





// to check for palindromes and

(function (str){
    var reversedstr = str.split('').reverse().join('');

    if(str==reversedstr){
        console.log("its palindrome")
    }else{
        console.log("not a palindrome");
    }

}());


// Remove duplicates

var arr = ["audi","jaggy","benz","audi","BMW","hyundai","toyota","hyundai"]

(function(data){
    return data.filter((value,index)=>data.indexof(value)==index)
    
    
}(arr));






