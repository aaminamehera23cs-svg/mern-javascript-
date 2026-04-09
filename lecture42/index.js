console.log("for-loop integration");
for(let i=1;i<=10;i++){
    console.log("for-loop");
}
console.log("while-loop");
let j=0;
while(j<=10){
    if(j==7){
        break;
    }
    if(j==4){
        j++;
        continue;
    }
    console.log(j);
    j++;
}
console.log("reverse-counting");
for(let i=10;i>0;i--){
    console.log(i);
}
console.log("break-keyword");
for(let i=1;i<=6;i++){
    if(i==4){
        
        break;
    }
    else{
        console.log(i);
    }
}
console.log("continue-keyword");
for(let i=1;i<=4;i++){
    if(i==3){
        continue;
    
    }
    else{
        console.log(i);
    }
}
console.log("string-operations");
let op1="subject1";
let op2='subject2';
console.log(op1+op2);

console.log(`${op1}${op2}`);
let u="uppercase";
let l="LOWERCASE";
console.log(u.toUpperCase());
console.log(l.toLowerCase());
let sentence="arrays scheduled for next week";
let arr=sentence.split(" ");
console.log(arr);
let sentence1=arr.join(" ");
console.log(sentence1);