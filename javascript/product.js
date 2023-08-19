import nav from "../components/nav.js"
document.querySelector("#nav").innerHTML=nav

fetch("http://localhost:7777/product")
.then((rest)=>rest.json())
.then((res)=>console.log(res))