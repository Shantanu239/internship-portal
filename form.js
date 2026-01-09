// select the form

const form=document.getElementById("apply form");

//listen for submit
form.addEventListener("submit",function(e){
    e.preventDefault(); //stop page reload

    //get input values
    const name=document.getElementById("name").ariaValueMax.trim();
    const email=document.getElementById("email")
    const phone=document.getElementById("phone")

    //validation

    if(name===""){
        alert("Name is required");
        return;
    }

    if(!email.includes("@")){
        alert("Enter a valid email");
        return;
    }

    if(phone.length !==10){
        alert("phone number must be 10 digits");
        return;
    }

    //if all checks pass
    alert("application submitted successfully");
});
