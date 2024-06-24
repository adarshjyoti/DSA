//Array declaration

let person={
    name:"adarsh",
    age:24,

};

let arr=["apple","mango","banana",person,];

//console.log(arr[0]);
//console.log(arr[3].name);
//console.log(arr.length);

//different methods to add and remove in an array

//add an element in the array
arr.push("orange");
//remove from end of the array

arr.pop();
arr.pop();


//Add to top of the array 
arr.unshift("orange");

//for removing
arr.shift();
//console.log(arr);

//looping in an arrays7

for (let i = 0; i < arr.length; i++) {
   // console.log(arr[i]);
    
}

let i=0;
while (i<arr.length) {
   // console.log(arr[i]);
    

    i++;
}
//inbuilt loop methods
const number=[1,2,3,4,5,6]
const newnum=number.map((item,index,array)=>{
    //console.log(item,index,array)
    return item+12

    
});
//console.log(newnum);

//filter
const number1=[1,2,3,34,5,6,7];
const nextnum=number1.filter((item,index,array)=>{
    return item>3;
});
//console.log(nextnum);
//reduce (important)
const sum= number.reduce((prev,item)=>{
    return prev+item
},2)

//console.log(sum)


//some in javascript it return true or false if the condition satisfy



const res=number.some((item,idex,array)=>{
    return item>3;
});
//console.log(res);




//every in javascript
const ev=number.every((item,index,array)=>{
    return item>2;


});
//console.log(ev);

//find in javascript return the 1st element of the condition is true

const fd= number.find((item,index,array)=>{
    return item>7;
});
//onsole.log(fd);

//all the above inner looping is useful for solving array question

//speard and rest operator

const nums=[1,2,3,4,5];
const nums2=[6,7,8,9,10];

const finalnums=[...nums,...nums2]//spread operator
//console.log(finalnums)

function sume(...number){
    return number;
}
//console.log(sume(nums,nums2,5,"hello"));

//More Array Methods
//concat

//const newarr=nums.concat(nums2,arr);
nums.concat(nums2,arr);
//console.log(newarr);

//slice

const newarr=arr.slice(-1)//it will include 0 index but remove 2
//console.log(newarr);

//splice- Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

arr.splice(1,2,"orange");
//console.log(arr);

//fill
const dummy=[11,22,33,44]
dummy.fill(1,1);
//console.log(dummy)
//findIndex
const index=nums.findIndex((item)=>
    item===2
);
//console.log(index)



//flat

const no=[1,[2,3],[[4,5]],6];//=>[1,2,3,4,5,6]
const no1=no.flat(2);
console.log(no1)


//reverse
const rev=[12,3,4,23,334,4545]
const donerev=rev.reverse();
console.log(donerev);


//sort 
const sorted=[12,234,54,67,68,78,34,34,4,657,68,8,9,99]
const donesort=sorted.sort((a,b)=>b-a);
console.log(donesort);