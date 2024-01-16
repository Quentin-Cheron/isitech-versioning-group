const arrow_div = document.createElement('div');
arrow_div.id ="arrow_div";
// making div with id "arrow div"
const arrow_i = document.createElement('i');
arrow_i.className="fa-solid fa-arrow-up";
// making <i> element with up arrow on class
document.body.appendChild(arrow_div);
arrow_div.appendChild(arrow_i);

window.addEventListener('scroll',()=>{
    if(window.scrollY!=0){
        arrow_div.style.display="block";
    }else{
        arrow_div.style.display="none";
    }
    // on scroll, div is show
})
arrow_div.addEventListener('click',()=>{
    window.scrollTo(0,0);
    // on click then show top of page
});