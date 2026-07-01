//sample1 
const t1=performance.now();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para"+i;
    document.body.appendChild(para);
} 
const t2=performance.now();
console.log("total time taken by sample 1 is"+(t2-t1));

//sample2
const t3=performance.now();
let myDiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="this is para"+i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);
const t4=performance.now();
console.log("total time taken by sample 2 is"+(t4-t3));

//sample3-using DocumentFragment
let fragment=document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="this is para"+i+"abcd";
    fragment.appendChild(para);

}
document.body.appendChild(fragment);