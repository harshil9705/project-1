const signin = (e)=>{
    e.preventDefault()

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    fetch(`http://localhost:7777/signup?email=${email}`)
    .then((pr)=>pr.json())
    .then((data)=>{
        if(data.length > 0){
            if(data[0].password == password){
                alert("yes")
            }
            else{
                alert("no")

            }
        }
        else{

        }
    })
}


document.querySelector("#form").addEventListener("submit", signin)