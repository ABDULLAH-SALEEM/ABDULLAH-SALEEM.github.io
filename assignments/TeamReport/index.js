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
const createAccount = () => {
    const errormsg = document.getElementById('errormsg');
    const sinupEmails = document.getElementById('sinupEmail').value;
    const sinupPasswords = document.getElementById('sinupPassword').value;
    const cnfpasswords = document.getElementById('cnfpassword').value;
    if ((sinupPasswords != cnfpasswords)) {
        errormsg.innerHTML = `Password didn't Match`;
        return false;
    } else {
        let getOwnerData=localStorage.getItem('owner');
        if(getOwnerData===null){
            var ownerArray = []
        }else{
            ownerArray=JSON.parse(getOwnerData);
        }
        let owner = new Owner(sinupEmails, sinupPasswords);
        ownerArray.push(owner);
        localStorage.setItem('owner', JSON.stringify(ownerArray))||[];
        errormsg.innerHTML = `Account created successfully`;
        sinupEmails=null;
        sinupPasswords=null;
        cnfpasswords=null;
        return false;
    }
    
}
const logIn=()=>{
    const loginEmails = document.getElementById('loginEmail').value;
    let getOwnerData=localStorage.getItem('owner');
    let ownerArray=JSON.parse(getOwnerData);
    console.log(ownerArray);
    let compareArray=[];
    for(var i=0; i<ownerArray.length;i++){
        for(var keys in ownerArray[i]){
            compareArray.push(ownerArray[i][keys]);
            for(var j=0;j<compareArray.length;j++){
                if(compareArray[j]===loginEmails){
                    return true; 
                }else{
                    document.getElementById('errmsg').innerHTML='Incorrect Email Or Password.'
                }
            }
        }
    }
    console.log(compareArray);
    return false;
}


