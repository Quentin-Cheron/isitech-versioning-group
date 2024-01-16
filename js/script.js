const arrow_div = document.createElement('div');
arrow_div.id ="arrow_div";
arrow_div.style.display="none"
const arrow_i = document.createElement('i');
arrow_i.className="fa-solid fa-arrow-up";

document.body.appendChild(arrow_div);
arrow_div.appendChild(arrow_i);

window.addEventListener('scroll',()=>{
    if(window.scrollY!=0){
        arrow_div.style.display="block";
    }else{
        arrow_div.style.display="none";
    }
})
arrow_div.addEventListener('click',()=>{
    window.scrollTo(0,0);
})