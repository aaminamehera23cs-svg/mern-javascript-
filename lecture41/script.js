let a=10;
let b=5;
let c=10;
let d='10';
console.log('arithmetic operators');
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log('unary operators');
console.log(a++);
console.log(--a);
console.log(a--);
console.log(++a);
console.log('comparison operators');
console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(!a);
console.log(c==d);
console.log(a===b);
let age=25;
console.log('ternary operators');
let result=(age>=18)?"i can vote":"i cannot vote";
console.log(result);
console.log('short-circuiting');
console.log(false||17||18||16)//short-circuiting outputs 17
console.log('binary operators');
console.log(a&b);//binary AND
console.log(a|b);//binary OR
console.log(10>>1);//binary right shift 10/2**x where x here is 1
console.log(10<<1);//binary left shift 10* 2**x where x here is 1
let age1=53;
console.log('if-else loop');
if(age1>=18){
    console.log('can vote');
}
else{
    console.log('cannot vote');
}
let integer=5;
console.log('if and else-if loop with nested if');
if(integer==1){
    console.log('A');
}
else if(integer==2){
    console.log('B');

}
else if(integer==3){
    console.log('C');

}
else if(integer==4){
    console.log('C');
    
}
else if(integer==5){
    if(age1>18){
        console.log('i can vote');
    }
    console.log('C');
    
}
else{
    console.log('E'); 
}
let number=20;
console.log('switch');
switch(number){
    case 10:console.log('A');
    break;
    case 20:console.log('B');
    break;
    case 30:console.log('C');
    break;
    case 40:console.log('D');
    break;
    default:console.log('E');
    break;
}