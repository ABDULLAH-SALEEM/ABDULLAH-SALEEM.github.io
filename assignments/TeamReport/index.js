const signupDiv = document.getElementsByClassName('Signup')[0];
const loginDiv = document.getElementsByClassName('login')[0];
signupDiv.style.display = 'none';
const signin = () => {
    signupDiv.style.display = 'none';
    loginDiv.style.display = 'block';
}
const signup = () => {
    signupDiv.style.display = 'block';
    loginDiv.style.display = 'none';
}
function Owner(email, password) {
    this.email = email;
    this.password = password;
}

let ownerArray = []
const createAccount = () => {
    const errormsg = document.getElementById('errormsg');
    const sinupEmails = document.getElementById('sinupEmail').value;
    const sinupPasswords = document.getElementById('sinupPassword').value;
    const cnfpasswords = document.getElementById('cnfpassword').value;
    if ((sinupPasswords != cnfpasswords)) {
        errormsg.innerHTML = `Password didn't Match`;
        return false;
    } else {
        let owner = new Owner(sinupEmails, sinupPasswords);
        ownerArray.push(owner);
        localStorage.setItem('owner', JSON.stringify(ownerArray));
        errormsg.innerHTML = `Account created successfully`;
        // console.log(JSON.parse(localStorage.getItem('owner')));
        // for(var i = 0; i < ownerArray.length; i++){
        //     for (var key in persons[i]){
        //         // console.log(key);
        //         console.log(ownerArray[i][key]);
        //     }
        // }
        return false;
    }
    
}
const logIn=()=>{
    const loginEmails = document.getElementById('loginEmail').value;
    
    for(var i=0; i<localStorage.getItem('owner').length;i++){
        for(var keys in localStorage.getItem(ownerArray)[i]){
            if(loginEmails==localStorage.getItem(ownerArray)[i][keys]){
                return true;
            }else{
                console.log('not found');
                return false;
            }
        }
    }
    // console.log('ok');
    return false;
}


