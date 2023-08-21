import nav from "../components/nav.js"
document.querySelector("#nav").innerHTML=nav

let output = (data)=>{
    data.map((ele)=>{
        let img = document.createElement("img")
        img.src=ele.image

        let title = document.createElement("h2")
        title.innerHTML=ele.title

        let price = document.createElement("h4")
        price.innerHTML=ele.price

        let category = document.createElement("h5")
        category.innerHTML=ele.category

        let rate = document.createElement("h6")
        rate.innerHTML=ele.rating.rate

        let div = document.createElement("div")
        div.append(img,title,price,category,rate)

        document.querySelector("#ui").append(div)
    })
}

fetch("http://localhost:7777/product")
.then((rest)=>rest.json())
.then((res)=>output(res))