function addTask() {
    const det = document.querySelector("input")
    const ul = document.querySelector("ul")
        // const pk = document.querySelector("button")

    let id = document.createElement("li")
    id.innerHTML = det.value;


    ul.appendChild(id)


    det.value = "";



}

function deleteTask() {

    const det = document.querySelector("input")
    const ul = document.querySelector("ul")
    let sk = document.createElement("li")
    sk.innerHTML = det.value;
    ul.appendChild(sk)
    ul.remove();






}


// function underlineTask() {
//     const det = document.querySelector("input")
//     const ul = document.querySelector("ul")
//     let fk = document.createElement("li")
//     fk.innerHTML = det.value
//     ul.appendChild(fk)

//     ul.underline = "";





// }