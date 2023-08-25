import nav from '../components/nav.js'

document.querySelector("#nav").innerHTML=nav

let display = (data) =>{
    // let sum = 0

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
           fetch(`http://localhost:7777/cart/${ele.id}`)
           .then((res)=>res.json())
           .then((data)=>{
            data.qty = data.qty+1
            fetch(`http://localhost:7777/cart/${data.id}`,{
                method:"PATCH",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({...data})    
            })
           })
        })
        let qty = document.createElement("p")
        qty.innerHTML=ele.qty
        let minus = document.createElement("button")
        minus.innerHTML=`<i class="ri-subtract-fill"></i>`
        minus.addEventListener("click",()=>{
            fetch(`http://localhost:7777/cart/${ele.id}`)
            .then((res)=>res.json())
            .then((data)=>{
                data.qty = data.qty-1
                fetch(`http://localhost:7777/cart/${data.id}`,{
                    method:"PATCH",
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify({...data})
                })
            })  
        })
        if(ele.qty == 0){
            fetch(`http://localhost:7777/cart/${ele.id}`,{
                method:"DELETE"
            })
        }

        let div2 = document.createElement("div")
        div2.setAttribute("class","div2")
        div2.append(minus,qty,plus)
        
        let td3 = document.createElement("td")
        td3.append(div2)

        let td4 = document.createElement("td")
        let proprice = ele.price*ele.qty 
        td4.innerHTML= proprice
        // sum = sum + proprice
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

let ui = (data)=>{
    let sum = 0
    let dis = 0
    data.map((ele)=>{
        
        let tprice = ele.qty * ele.price
        sum = sum + tprice
    })
    document.querySelector("#code").addEventListener("click",()=>{
        let value = document.querySelector("#coupon").value
        if(value === "jay"){
            dis = sum * 0.9
        }
        console.log(dis);
    })
    document.querySelector("#total").innerHTML= `<p class="font-medium text-[20px]">Total : ${sum}</p>`;
    document.querySelector("#total2").innerHTML= `<p class="font-medium text-[20px]">Total : ${dis}</p>`;
    
    // console.log(sum)
}


fetch("http://localhost:7777/cart")
.then((res)=>res.json())
.then((pera)=>{display(pera), ui(pera)})

