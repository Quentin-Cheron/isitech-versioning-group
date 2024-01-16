const arrow_div = document.createElement('div');
arrow_div.id ="arrow_div";
arrow_div.style.display="none"
//Création depuis le dom de la div et attribution de l'id "arrow div" et mettre le display en none sinon il apparais au premier chargement
const arrow_i = document.createElement('i');
arrow_i.className="fa-solid fa-arrow-up";
//Création depuis le dom de la balise i qui avec faire Awesome va être une fleche vers le haut

document.body.appendChild(arrow_div);
arrow_div.appendChild(arrow_i);

window.addEventListener('scroll',()=>{
    if(window.scrollY!=0){
        arrow_div.style.display="block";
    }else{
        arrow_div.style.display="none";
    }
    //si l'utilisateur scroll on voit la div sinon non
})
arrow_div.addEventListener('click',()=>{
    window.scrollTo(0,0);
    //si on clique dessus ça nous ramène en haut de la page
})