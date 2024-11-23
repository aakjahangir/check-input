const formBtn=document.getElementById('form-btn');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// showError message
    function showError(input,message){
        const formControl=input.parentElement;
        formControl.className='form-control error';
        const small=formControl.querySelector('small');
        small.innerText=message;
    }
    // showSuccess message 
    function showSuccess(input){
        const formControl=input.parentElement;
        formControl.className='form-control success';
    }
    // validEmail function
    function validEmail(email){
        const re=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
    // password matching function 
    function passwordMatching(input1,input2){
        showError(input2,'password not matching')
    }
    
formBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(username.value === ""){
        showError(username,'user name is requird');
    }
    else if(username.value.length<3){
        showError(username,'usernam must be at least 3 charecter');
    }
    else if(username.value.length>25){
        showError(username,'usernam must be less than 25 charecter');
    }
    else{
        showSuccess(username);
    }
    // username end
    if(email.value === ""){
        showError(email,'user email is requird');
    }
    else if(!validEmail(email.value)){
        showError(email,'email is not valid');
    }
    else{
        showSuccess(email);
    }
    if(password.value === ""){
        showError(password,'Password is requird');
    }
    else if(password.value.length<6){
        showError(password,'password must be at least 6 charecter');
    }
    else if(password.value.length>25){
        showError(password,'password must be less than 12 charecter');
    }
    else{
        showSuccess(password);
    }
    if(password2.value === ""){
        showError(password2,'Confirm password again');
    }
    else{
        showSuccess(password2);
    }
    // password and password2 matching
    if(password.value !== password2.value){
        passwordMatching(password,password2);
    }
    
})
