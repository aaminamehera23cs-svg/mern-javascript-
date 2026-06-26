//let paras=document.querySelectorAll('p');
//for(let i=0;i<paras.length;i++){
//    let para=paras[i];
//    para.addEventListener('click',function(){
//        alert("clicked"+(i+1));
//  })
//}
function alertPara(event){
    alert("clicked"+event.target.textContent);
}
let myDiv=document.getElementById('wrapper');
document.addEventListener('click',alertPara);
