import nav from '../components/nav.js'

document.querySelector("#nav").innerHTML=nav

let display = (data) =>{
    data.map((ele)=>{

        let tr = document.createElement("tr")

        let img = document.createElement("img")
        img.src=ele.image
        img.setAttribute("class","img")

        let title = document.createElement("p")
        title.innerHTML=ele.title

        let div = document.createElement("div")
        div.setAttribute("class","div1")
        div.append(img,title)

        let td1= document.createElement("td")
        td1.append(div)

        let td2 = document.createElement("td")
        td2.innerHTML=ele.price
        
        let plus = document.createElement("button")
        plus.innerHTML=`<i class="ri-add-fill"></i>`
        plus.addEventListener("click",()=>{
            data[0].qty = data[0].qty+1
            console.log(data[0]);
            fetch(`http://localhost:7777/cart/${data[0].id}`,{
                method:"PATCH",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(...data)
            })  
        })
        let qty = document.createElement("p")
        qty.innerHTML=ele.qty
        
        let minus = document.createElement("button")
        minus.innerHTML=`<i class="ri-subtract-fill"></i>`
        minus.addEventListener("click",()=>{
            data[0].qty = data[0].qty-1
            console.log(data[0]);
            fetch(`http://localhost:7777/cart/${data[0].id}`,{
                method:"PATCH",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(...data)
            })  
        })
        let div2 = document.createElement("div")
        div2.setAttribute("class","div2")
        div2.append(minus,qty,plus)
        
        let td3 = document.createElement("td")
        td3.append(div2)

        let td4 = document.createElement("td")
        td4.innerHTML=ele.price*ele.qty

        let td5 = document.createElement("td")
        td5.innerHTML=`<i class="ri-delete-bin-line"></i>`
        td5.addEventListener("click",(e)=>{
            fetch(`http://localhost:7777/cart/${ele.id}`,{
                method:"DELETE",
            })
        })

        tr.append(td1,td2,td3,td4,td5)

        document.querySelector("#tbody").append(tr)
    })
}


fetch("http://localhost:7777/cart")
.then((res)=>res.json())
.then((pera)=>display(pera))