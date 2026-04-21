 //an object is a collection of key-value pairs
 let obj={
    name:"AAMINA MEHER A",
    age:21,
    weight:60,
    height:"4 feet 12inches",
    greet:function(){
        console.log("bello");
    }
 };
 console.log("for-in demonstration");
 for(let key in obj){
    console.log(key," ",obj[key]);
 }
 console.log(obj);
 obj.greet();

 console.log("shallow-copy allows new object to become a reference that indicates at the same data that original object points to on the heap memory");
 let obj2=obj;
 console.log(obj2);

 console.log("arrays");
 let brr=new Array('AAMINA',1,true);
 brr.push("meher");
 console.log(brr);
 brr.pop();
 brr.shift();
 console.log(brr);
 brr.unshift("AAMINA MEHER");
 console.log(brr);
 brr.push(20);
 brr.push(40);
 brr.push(90);
 console.log(brr);
 console.log(brr.slice(2,4));
 brr.splice(1,2,"placeholder");
 console.log(brr);
 let arr=[10,20,30];
 let ansArray=arr.map((number)=>{
    return number*number;
 })
 console.log(ansArray);
 let evenArray=arr.filter((number)=>{
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
 });
 console.log(evenArray);
 let c=[1,2,'AAMINA','MEHER',null];
 let ans=arr.filter((value)=>{
    if(typeof(value)=='number'){
        return true;
    }
    else{
        return false;
    }
 });
 let d=[10,20,30,40];
 let reduced_ans=d.reduce((acc,curr)=>{
    return acc+curr;
 },0);
 console.log(reduced_ans);
 console.log(d.sort());
 console.log("for-each demonstration");
 d.forEach((value,index)=>{
    console.log("value:",value,"index:",index);
 })

 console.log("arrays passed as parameter to functions");
 let e=[10,20,30,40,50];
 function getSum(e){
    let len=e.length;
    let sum=0;
    for(let index=0;index<len;index++){
        sum+=e[index];
    }
    return sum;
 }
 let totSum=getSum(e);
 console.log( totSum);