 const $submit = document.getElementById("Submit");
 const $password = document.getElementById("password");
 const $username = document.getElementById("username");
 const $visible = document.getElementById("visible");

 document.addEventListener("change" , (e)=>(
    if (e.target === $visible)
    if ($visible.checked === false) $password.type = "password";
    else $password.type = "text";
))
 document.addEventListener ("click", (e) =>(
 
    if(e.target === $submit) {
    if($password.value !== "" && $password.value !== ""){
     e.preventDefault();
     
    } 
    }
 ))