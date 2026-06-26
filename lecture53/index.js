function changeText(event){
    console.log(event);
    let fpara=document.getElementById('fpara');
    fpara.textContent="Events and Listeners-modified"
}
let fpara=document.getElementById('fpara');
fpara.addEventListener('click',changeText);

let anchorElement=document.getElementById('fanchor');
anchorElement.addEventListener('click',function(event){
    event.preventDefault();
    anchorElement.textContent="Clicked"
});