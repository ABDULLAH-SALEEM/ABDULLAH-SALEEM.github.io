// const characters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// const length = 9;
// let randomStr = "";
// for (let i = 0; i < length; i++) {
//   const randomNum = Math.floor(Math.random() * characters.length);
//   randomStr += characters[randomNum];
// }
// console.log(randomStr);
const firebaseConfig = {
    apiKey: "AIzaSyCYhBiETWsUag85qv97NSj0Jo9OKvg2OKw",
    authDomain: "teamreport-6ff40.firebaseapp.com",
    projectId: "teamreport-6ff40",
    storageBucket: "teamreport-6ff40.appspot.com",
    messagingSenderId: "76802967972",
    appId: "1:76802967972:web:722ed0b866b578f6151931",
    measurementId: "G-MXX7KQ65G7"
};
//////////////////////////////////////////////////////////////////////////////////
const createTeamForm = document.getElementById("teamForm");
createTeamForm.style.display = "none";
const onClick = () => {
    createTeamForm.style.display = "block";
    document.getElementById("ownedTeamsArea").style.display="none";
}
//////////////////////////////////////////////////////////////////////////////////
const signupform = document.getElementById("signupForm");
function handleForm(event) { event.preventDefault(); }
signupform.addEventListener("submit", handleForm);
const signinform = document.getElementById("signinForm");
signinform.addEventListener("submit", handleForm);
const teamForm = document.getElementById("teamForm");
teamForm.addEventListener("submit", handleForm);
//////////////////////////////////////////////////////////////////////////////////
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
//////////////////////////////////////////////////////////////////////////////////
const signupDiv = document.getElementsByClassName("Signup")[0];
const loginDiv = document.getElementsByClassName("login")[0];
signupDiv.style.display = "none";
const signin = () => {
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";
}
const signup = () => {
    signupDiv.style.display = "block";
    loginDiv.style.display = "none";
}
//////////////////////////////////////////////////////////////////////////////////
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("errmsg").innerHTML = "Password or User Not Matched";
            // ..
        });
}
//////////////////////////////////////////////////////////////////////////////////
function logout() {
    const password = document.getElementById("loginPassword");
    password.value = null;
    auth.signOut().then(() => {

        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
//////////////////////////////////////////////////////////////////////////////////
function createAcc() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const cnfpassword = document.getElementById("cnfPassword").value;
    if (cnfpassword === password) {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("errormsg").innerHTML = "Password Must Be Six Letters Long.";
                // ..
            });
    } else {
        document.getElementById("errormsg").innerHTML = "Password doesn't Match";
    }
}
//////////////////////////////////////////////////////////////////////////////////
auth.onAuthStateChanged((user) => {
    if (user) {
        // setTeamsData();
        getTeamsData();
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("home").style.display = "block";
    } else { 
        document.getElementById("loginPage").style.display = "block";
        document.getElementById("home").style.display = "none";
    }
});
// const setTeamsData = () => {
//     const databaseRef = database.ref(auth.currentUser.uid + "/teams/" + document.getElementById("teamName").
//     value);
//     databaseRef.on('value', (data) => {
//         getTeamsData(data.val());
//     });
// };
const getTeamsData = () => { 
    database.ref(auth.currentUser.uid + "/teams/" + document.getElementById("teamName").value).on('child_added',
     (snapshot) => { 
        const data = snapshot.val();
        const divE=document.createElement("div");
        const divE1=document.createElement("div");
        const teamName = document.createTextNode(data.teamName);
        divE1.appendChild(teamName);
        const divE2=document.createElement("div");
        const ownerName = document.createTextNode(data.Owner);
        divE2.appendChild(ownerName);
        const divE3=document.createElement("div");
        const memName = document.createTextNode(data.addMembers);
        divE3.appendChild(memName);
        divE.appendChild(divE1).classList.add("divChildEdit");
        divE.appendChild(divE2).classList.add("divChildEdit");
        divE.appendChild(divE3).classList.add("divChildEdit");
        document.getElementById("ownedTeamsArea").appendChild(divE);
        divE.classList.add("divEdit");
    });
}
const createTeam = () => {
    database.ref(auth.currentUser.uid + "/teams/" + document.getElementById("teamName").value).set({
        Owner: auth.currentUser.email,
        teamName: document.getElementById("teamName").value,
        addMembers: document.getElementById("addMembers").value
    })
    document.getElementById("teamForm").style.display = 'none';
    document.getElementById("ownedTeamsArea").style.display="block";
}

