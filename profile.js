
let favColor = document.querySelector(`#color`);

let favPlace = document.querySelector('#place')

let favRitual = document.querySelector(`#ritual`)



const color=(evt)=>{
    evt.preventDefault()
    alert(`my favorite color is green`)
}


const place=(evt)=>{
    evt.preventDefault()
    alert(`my favorite place is Michigan`)
}


const ritual=(evt)=>{
    evt.preventDefault()
    alert(`my favorite ritual is coding`)
}

favColor.addEventListener(`click`,color);
favPlace.addEventListener(`click`,place);
favRitual.addEventListener(`click`,ritual);
