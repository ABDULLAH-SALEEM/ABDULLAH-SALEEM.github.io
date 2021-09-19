const firebaseConfig = {
    apiKey: "AIzaSyAqdgzvsE5x_6CCY11PDMWrzJoQ4w3eAtM",
    authDomain: "popgame-be3c8.firebaseapp.com",
    projectId: "popgame-be3c8",
    storageBucket: "popgame-be3c8.appspot.com",
    messagingSenderId: "902299147267",
    appId: "1:902299147267:web:dc7d31550b3d39feaf0236"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

function logout() {
    auth.signOut();
}
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("welcome").innerHTML = `Welcome ${user.email}`;
        document.getElementById("login_box").style.display = "none";
        document.getElementById("wrapper").style.display = "block";
    } else {
        document.getElementById("login_box").style.display = "block";
        document.getElementById("wrapper").style.display = "none";
    }
});
let score = 0;
let life = 5;
const hideF = (id) => {
    document.getElementById(id).style.display = "none";
}
const showF = (id) => {
    document.getElementById(id).style.display = "block";
}
hideF("next2");
hideF("level2");
hideF("level3");
hideF("head2");
hideF("head3");
hideF("head4");
hideF("level4");
hideF("next3");
hideF("head5");
hideF("level5");
hideF("next4");
const scoreIncrement = () => {
    score += 10;
    document.getElementById("score").innerHTML = `Score= ${score}`;
}
const lifeDecrement = () => {
    life -= 1;
    alert("Wrong Baloon");
    document.getElementById("life").innerHTML = `Life= ${life}`;
}
const checkLife = () => {
    if (life == 0) {
        alert("Game Over")
    }
}
function move(id, interval) {
    let level3 = document.getElementById(id);
    let myVar = setInterval(spostaDiv, interval);
    let margin = 0;
    let l = window.screen.width;
    var w = 850;
    function spostaDiv() {
        if (margin == w) {
            margin = 0 + "px";

        } else {
            level3.style.marginLeft = margin + "px";
        }
        margin += 10;
    }
}
function random() {
    return Math.floor(Math.random() * 16777215).toString(16);
}
console.log(random());
document.addEventListener('mouseover', function (e) {
    if (e.target.className === "goal1") {
        e.target.style.backgroundColor = "#fff";
        scoreIncrement();
        setTimeout(() => {
            var randomC = e.target.style.backgroundColor = "#" + random();
            e.target.setAttribute("class", "ball1");
        }, 1000)
    } else if (e.target.className === "ball1") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            e.target.style.backgroundColor = "#" + random();
        }, 1000)
        lifeDecrement();
        checkLife();
    }
});
////////////////////////////////////////////////////////////////////////////////////
document.getElementById("next1").addEventListener("click", () => {
    hideF("level1");
    hideF("head1");
    const level2 = document.getElementById("level2");
    showF("head2")
    level2.classList.add = "level2";
    level2.style.display = "flex";
    hideF("next1");
    showF("next2");
})
document.addEventListener('mouseover', function (e) {
    if (e.target.className === "goal2") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            var randomC = e.target.style.backgroundColor = "#" + random();
            e.target.setAttribute("class", "ball1");
        }, 1000)
        scoreIncrement();

    } else if (e.target.className === "ball2") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            e.target.style.backgroundColor = "#" + random();
        }, 1000)
        lifeDecrement();
        checkLife();
    }
});
////////////////////////////////////////////////////////////////////////////////////
document.getElementById("next2").addEventListener("click", () => {
    hideF("level2");
    hideF("head2");
    const level3 = document.getElementById("level3");
    showF("head3")
    level3.classList.add = "level3";
    level3.style.display = "flex";
    hideF("next2");
    showF("next3");
    move('level3', 300);
})
document.addEventListener('mouseover', function (e) {
    if (e.target.className === "goal3") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            var randomC = e.target.style.backgroundColor = "#" + random();
            e.target.setAttribute("class", "ball1");
        }, 1000)
        scoreIncrement();

    } else if (e.target.className === "ball3") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            e.target.style.backgroundColor = "#" + random();
        }, 1000)
        lifeDecrement();
        checkLife();
    }
});
////////////////////////////////////////////////////////////////////////////////////
document.getElementById("next3").addEventListener("click", () => {
    hideF("level3");
    hideF("head3");
    const level4 = document.getElementById("level4");
    showF("head4")
    level4.classList.add = "level4";
    level4.style.display = "flex";
    hideF("next3");
    showF("next4");
    move('level4', 100);
})
document.addEventListener('mouseover', function (e) {
    if (e.target.className === "goal4") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            var randomC = e.target.style.backgroundColor = "#" + random();
            e.target.setAttribute("class", "ball1");
        }, 1000)
        scoreIncrement();
    } else if (e.target.className === "ball4") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            e.target.style.backgroundColor = "#" + random();
        }, 1000)
        lifeDecrement();
        checkLife();
    }
});
////////////////////////////////////////////////////////////////////////////////////
document.getElementById("next4").addEventListener("click", () => {
    hideF("level4");
    hideF("head4");
    const level5 = document.getElementById("level5");
    showF("head5")
    level5.classList.add = "level5";
    level5.style.display = "flex";
    hideF("next4");
    // showF("next5");
    move('level5', 60);
})
document.addEventListener('mouseover', function (e) {
    if (e.target.className === "goal5") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            var randomC = e.target.style.backgroundColor = "#" + random();
            e.target.setAttribute("class", "ball1");
        }, 1000)
        scoreIncrement();

    } else if (e.target.className === "ball5") {
        e.target.style.backgroundColor = "#fff";
        setTimeout(() => {
            e.target.style.backgroundColor = "#" + random();
        }, 1000)
        lifeDecrement();
        checkLife();
    }
});
function set(){
    firestore.collection("users").doc(auth.currentUser.email).set({
        UserEmail:auth.currentUser.email,
        Lives:document.getElementById("life").innerHTML,
        Score:document.getElementById("score").innerHTML,
    })
}
let level=1;
function update(){
    document.getElementById("level").innerHTML;
    firestore.collection("users").doc(auth.currentUser.email).update({
        UserEmail:auth.currentUser.email,
        Lives:document.getElementById("life").innerHTML,
        Score:document.getElementById("score").innerHTML,
        Level:document.getElementById("level").innerHTML
    })
    level+=1;
    document.getElementById("level").innerHTML=`Level= ${level}`;
}
// function readData(){
//     firestore.collection("users").doc(document.getElementById("email").value).get()
//     .then(function(doc){
//         if(doc.exists){
//             document.getElementById("level").innerHTML=doc.data().Level;
//             document.getElementById("score").innerHTML=doc.data().Score;
//             document.getElementById("life").innerHTML=doc.data().Lives;
//             if(doc.data().Level=="Level= 1"){
//                 showF("level1")
//                 document.getElementById("level1").style.display="flex";
//                 hideF("level2");
//                 hideF("level3");
//                 hideF("level4");
//                 hideF("level5");
//                 hideF("head2");
//                 hideF("head3");
//                 hideF("head4");
//                 hideF("head5");
//                 showF("head1");
//             }else if(doc.data().Level=="Level= 2"){
//                 showF("level2")
//                 document.getElementById("level2").style.display="flex";
//                 hideF("level1");
//                 hideF("level3");
//                 hideF("level4");
//                 hideF("level5");
//                 hideF("head1");
//                 hideF("head3");
//                 hideF("head4");
//                 hideF("head5");
//                 showF("head2");
//             }else if(doc.data().Level=="Level= 3"){
//                 showF("level3")
//                 document.getElementById("level3").style.display="flex";
//                 hideF("level1");
//                 hideF("level2");
//                 hideF("level4");
//                 hideF("level5");
//                 hideF("head2");
//                 hideF("head1");
//                 hideF("head4");
//                 hideF("head5");
//                 showF("head3");
//                 move('level3', 60);
//             }else if(doc.data().Level=="Level= 4"){
//                 showF("level4")
//                 document.getElementById("level4").style.display="flex";
//                 hideF("level1");
//                 hideF("level2");
//                 hideF("level3");
//                 hideF("level5");
//                 hideF("head2");
//                 hideF("head3");
//                 hideF("head1");
//                 hideF("head5");
//                 showF("head4");
//                 move('level4', 60);
//             }else if(doc.data().Level=="Level= 5"){
//                 showF("level5")
//                 document.getElementById("level5").style.display="flex";
//                 move('level5', 60);
//                 hideF("level1");
//                 hideF("level3");
//                 hideF("level2");
//                 hideF("level4");
//                 hideF("head2");
//                 hideF("head3");
//                 hideF("head4");
//                 hideF("head1");
//                 showF("head5");
//             }
//         }
//     })

// }