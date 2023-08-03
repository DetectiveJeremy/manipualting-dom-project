//creating refs
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
let pBtn = document.getElementById("p-button");
let imgBTN = document.getElementById("img-button")


pBtn.addEventListener("click", e => {
    e.preventDefault
    let p = document.createElement('p');
    p.style.background = "black";
    p.style.backgroundColor = 'white';
    p.style.display = 'flex';
    p.style.padding= '8px';
    p.style.justifyContent = 'center';
    p.innerHTML = "Hello World"; 
    pDiv.appendChild(p);
    imgDiv.style.display = "none"
    pDiv.style.display = "block"
    
})





imgBTN.addEventListener("click", e => {
    e.preventDefault()
    let img = document.createElement('img');
    img.src= "smile.png"
    img.style.width = '200px';
    img.style.height = '150px';   
    imgDiv.appendChild(img)

    imgDiv.style.display = "block"
    pDiv.style.display = "none"
});
