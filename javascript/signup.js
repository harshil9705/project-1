document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    user = {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }

    let nameregex = /^[a-zA-Z ]{2,}$/;
    let emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(!nameregex.test(user.name)){
        document.querySelector("#nerr").innerHTML="enter name"
    }
    if(!emailregex.test(user.email)){
        // alert("enot")
        document.querySelector("#eerr").innerHTML="enter email"
    }
    if(!passregex.test(user.password)){
        // alert("pnot")
        document.querySelector("#perr").innerHTML="enter password"
    }


    if(nameregex.test(user.name) &&
     emailregex.test(user.email) &&
      passregex.test(user.password))
      {
      fetch(`http://localhost:7777/signup?email=${user.email}`)
      .then((res)=>res.json())
      .then((dot)=>{
        if(dot.length > 0){
            if(dot.email == user.email){
                alert("same")
            }
            else{
                alert("fales")
            }
            
        }
        else{
            fetch("http://localhost:7777/signup",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(user)
            })
        }
      })
    }




    // document.querySelector("#name").addEventListener("keypress",()=>{
    //     if(){
            
    //     }
    // })
})