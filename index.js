const btn = document.getElementById("button");

btn.addEventListener("mouseover", ()=>{
    btn.style.backgroundColor = "red"
});

btn.addEventListener("mouseout", ()=>{
    btn.style.backgroundColor = "black"
});