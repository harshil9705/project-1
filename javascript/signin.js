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
            }
            else{
                document.querySelector("#merr").innerHTML="Password is incorrect"
            }
            // alert("yes")
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


document.querySelector("#inform").addEventListener("submit", signin)

// let signin = (e)=>{
//     e.preventDefault()
//     console.log("223");
// }

// document.querySelector("#inform").addEventListener("submit",signin)