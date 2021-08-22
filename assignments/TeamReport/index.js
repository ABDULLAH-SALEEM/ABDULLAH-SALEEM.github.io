const signupDiv=document.getElementsByClassName('Signup')[0];
const loginDiv=document.getElementsByClassName('login')[0];
signupDiv.style.display='none';
const signin=()=>{
    signupDiv.style.display='none';
    loginDiv.style.display='block';
}
const signup=()=>{
    signupDiv.style.display='block';
    loginDiv.style.display='none';
}