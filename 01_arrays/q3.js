/* given an input string s, reverse the order of the words

input:"the sky is blue "--------->>>op-"blue is sky the"
input:"  hello world "------->>>>>>>op-"world hello"
+*/



const reverseword=function(e){
    const splitz=e.split(" ");
    const stack=[];


    for(let i of splitz){
        stack.push(i);
    }

    let finals=" ";
    while(stack.length){
        const currrent= stack.pop();

        if (currrent){
            finals +=" "+ currrent;
        }
    }

    return finals.trim();

};

console.log(reverseword("the sky is blue"));
console.log(reverseword("    hello world"))