 import nav from "../components/nav.js"

 document.querySelector("#nav").innerHTML=nav

const signin = (e)=>{
    e.preventDefault()

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    fetch(`http://localhost:7777/signup?email=${email}`)
    .then((pr)=>pr.json())
    .then((data)=>{
        if(data.length > 0){
            if(data[0].password == password){
            setTimeout(() => {
                window.location.href="/index.html"
            }, 2000);
            document.querySelector("#merr").innerHTML="Signin sucessfull"
            document.querySelector("#merr").style.color="green"
            localStorage.setItem("login",true)
            }
            else{
                document.querySelector("#merr").innerHTML="Password is incorrect"
            }
        }
        else{
            document.querySelector("#merr").innerHTML="your account is not exist Please Sign up"
            setTimeout(()=>{
                window.location.href="signup.html"
            } ,2000)
        }
        console.log(data);
    })
}

document.querySelector("#inform").addEventListener("submit",signin)

