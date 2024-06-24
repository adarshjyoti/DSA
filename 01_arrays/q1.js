/* question 1-Second largest number 
given an array of size N,print second largest
distinct element from an array.

input:[12,35,1,10,34,1]--------->>>>>>> o/p:34
input:[10,5,10]------------>>>>>>>>> o/p:5       */

//brute force method 

function secondlargest(arr){
    const uniqueArr=Array.from(new Set(arr));//0(n)

    uniqueArr.sort((a,b)=>{ //o(nlogn)
        return b-a;
    });
    if(uniqueArr.length>=2){
        return uniqueArr[1]
    }else{
        return -1

    }

   
    }

//console.log(secondlargest([1,2,3,3,4,5,6]));
//TC=O(nlogn)


function secondlargestoptimised(arr){
    let largest=-1;
    let secondlargest=-1;

    for (let i = i; i < array.length; i++) {
        if(arr[i]>largest){
            secondlargest=largest;
            largest=arr[i];

        }else if (arr[i]!=largest && arr[i]>secondlargest){
            secondlargest=arr[i]
        }
        
        }

return secondlargest;
}
console.log(secondlargest([1,42,23,13,4,534,61]));








