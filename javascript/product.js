import nav from "../components/nav.js"
document.querySelector("#nav").innerHTML=nav
let fil = []

fetch("http://localhost:7777/product")
.then((rest)=>rest.json())
.then((res)=>{
    fil = res
})
let output = (data)=>{
    document.querySelector("#ui").innerHTML=""
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

        let btn1 = document.createElement("button")
        btn1.innerHTML="Add to Cart"
        btn1.addEventListener("click",()=>{
            let login = localStorage.getItem("login")

            if(login){
                    fetch(`http://localhost:7777/cart/?id=${ele.id}`)
                    .then((res)=>res.json())
                    .then((data)=>{
                        if(data.length > 0){
                            data[0].qty = data[0].qty+1
                            console.log(data[0]);
                            fetch(`http://localhost:7777/cart/${data[0].id}`,{
                                method:"PATCH",
                                headers:{"Content-type":"application/json"},
                                body:JSON.stringify(...data)
                            })  
                        }
                        else{
                            fetch(`http://localhost:7777/cart`,{
                                method:"POST",
                                headers:{"Content-type":"application/json"},
                                body:JSON.stringify({...ele,qty:1})
                            })
                        }
                    })
    
            }   
            else{
                window.location.href="signin.html"
            }
        })
        
        let btn2 = document.createElement("button")
        btn2.innerHTML="Buy Now"
        
        let div2 = document.createElement("span")
        div2.append(btn1,btn2)
        div2.setAttribute("class","btns")

        let div = document.createElement("div")
        div.append(img,title,price,category,rate,div2)

        document.querySelector("#ui").append(div)
    })
}


document.querySelector("#value").addEventListener("keypress",(e)=>{
   
    let value = document.querySelector("#value").value
    let data = fil.filter((ele)=>ele.category.match(value.toLowerCase()))
    output(data)
    console.log(data);

})

let htol = ()=>{
let data = fil.sort((a,b) => (b.price - a.price))
output(data)
}

let ltoh = ()=>{
let data = fil.sort((a,b) => (a.price - b.price))
output(data)
}



document.querySelector("#htol").addEventListener("click",htol)
document.querySelector("#ltoh").addEventListener("click",ltoh)

let cate = (data) =>{
    let info = fil.filter((ele)=>ele.category == data)
    output(info)
}

document.querySelector("#man").addEventListener("click",()=>cate("men's clothing"))
document.querySelector("#woman").addEventListener("click",()=>cate("women's clothing"))
document.querySelector("#jw").addEventListener("click",()=>cate("jewelery"))
document.querySelector("#ele").addEventListener("click",()=>cate("electronics"))

fetch("http://localhost:7777/product")
.then((rest)=>rest.json())
.then((res)=>output(res))