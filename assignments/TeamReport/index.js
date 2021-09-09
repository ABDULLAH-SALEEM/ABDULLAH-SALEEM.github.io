// const characters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// const length = 9;
// let randomStr = "";
// for (let i = 0; i < length; i++) {
//   const randomNum = Math.floor(Math.random() * characters.length);
//   randomStr += characters[randomNum];
// }
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
    document.getElementById("ownedTeamsArea").style.display = "none";
}
//////////////////////////////////////////////////////////////////////////////////
const signupform = document.getElementById("signupForm");
function handleForm(event) { event.preventDefault(); }
signupform.addEventListener("submit", handleForm);
const signinform = document.getElementById("signinForm");
signinform.addEventListener("submit", handleForm);
const teamForm = document.getElementById("teamForm");
teamForm.addEventListener("submit", handleForm);
const questionForm = document.getElementById("questionForm");
questionForm.addEventListener("submit", handleForm);
const memberForm = document.getElementById("memberForm");
memberForm.addEventListener("submit", handleForm);
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
            setTimeout(() => {
                location.reload();
            }, 10)
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
// document.getElementById("displayTeam").style.display="none";
// function displayTeam(){
//     document.getElementById("displayTeam").style.display="block";
// }
const getTeamsData = () => {
    database.ref(auth.currentUser.uid + "/teams/" + document.getElementById("teamName").value).on('child_added',
        (snapshot) => {
            const data = snapshot.val();
            const divE0 = document.createElement("div");
            const divE = document.createElement("div");
            const imgE = document.createElement("img");
            imgE.src = "https://i.ibb.co/q7RvPS6/kisspng-teamwork-organization-logo-company-5c589d9ee12833-4922234015493113909223-removebg-preview.png";
            imgE.style.width = "200px";
            imgE.style.height = "200px"
            const pE = document.createElement("p");
            const pEtext = document.createTextNode(data.teamName);
            pE.appendChild(pEtext);
            divE.appendChild(imgE);
            divE.appendChild(pE);
            divE0.appendChild(divE);
            divE0.classList.add("teamArea");
            document.getElementById("ownedTeamsArea").appendChild(divE0);
            document.getElementById("teamForm").style.display = 'none';
            document.getElementById("ownedTeamsArea").style.display = "block";
            pE.style.cursor = "pointer";
            pE.setAttribute('class', 'teamTitle');
            
        });
}

const createTeam = () => {
    database.ref(auth.currentUser.uid + "/teams/" + document.getElementById("teamName").value).set({
        teamName: document.getElementById("teamName").value,
        ownerName: auth.currentUser.email,
        teamQuestions: "",
        teamMembers: ""
    })
    // const result = countString(document.getElementById("addMembers").value, "@");
    // console.log(result);
    document.getElementById("teamForm").style.display = "none";
    document.getElementById("ownedTeamsArea").style.display = "block";
}
var teamName = document.getElementById("teamName").value;
// function countString(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }
// function sendEmail() {
//     const memName=document.getElementById("addMembers").value;
//     const pass= randomStr
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "saleemabdullah791@gmail.com",
// 	Password : "abdullah1221",
// 	To : memName,
// 	From : "saleemabdullah791@gmail.com",
// 	Subject : `${auth.currentUser.email} sends joining request`,
// 	Body : `Joins ${auth.currentUser.email} team by using given credentials username: ${memName} and password: ${pass}`,
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }
// function addAcc() {
//     const email = document.getElementById("addMembers").value;
//     const password = randomStr;
//         auth.createUserWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 var user = userCredential.user;
//             })
//             .catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//             });
// }
const addQuestions = () => {
    let questions = document.getElementById("questionArea").value;
    document.getElementById("questions").innerHTML += `Q) ${questions} <br> `;
    document.getElementById("questionArea").value=null;
}
const addMembers = () => {
    let members = document.getElementById("memberArea").value;
    document.getElementById("members").innerHTML += ` ${members} `;
    document.getElementById("memberArea").value=null;
}
document.getElementById("teamOwnerView").style.display = "none";
const teamOwnerViewShow = () => {
    document.getElementById("teamOwnerView").style.display = "block";
    document.getElementById("createTeam").style.display = "none";
    document.getElementById("ownedTeamsArea").style.display = "none";
}
setTimeout(function () {
    teamTitleE = document.getElementsByClassName("teamTitle");
    for (let i = 0, len = teamTitleE.length; i < len; i++) {
        teamTitleE[i].addEventListener("click", teamOwnerViewShow);
    }
}, 2000);
const saveChanges = () => {
    document.getElementById("saveChanges").addEventListener("click", () => {
        database.ref(auth.currentUser.uid + "/teams/" + document.getElementById("teamTitleArea").value).update({
            teamName: document.getElementById("teamTitleArea").value,
            ownerName: auth.currentUser.email,
            teamMembers: document.getElementById("members").innerHTML,
            teamQuestions: document.getElementById("questions").innerHTML
        })
        document.getElementById("createTeam").style.display = "block";
        document.getElementById("ownedTeamsArea").style.display = "block";
        document.getElementById("teamOwnerView").style.display = "none";
    })
}
// setTimeout(()=>{
//    window.onload = function() {
// 	if(!window.location.hash) {
// 		window.location = window.location + '#loaded';
// 		window.location.reload();
// 	}
// }
// },5000);
// window.onload = function() {
//     if(!window.location.hash) {
//         window.location = window.location + '#loaded';
//         window.location.reload();
//     }
// }


