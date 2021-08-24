let createTeamForm = document.getElementsByClassName('createTeamForm')[0];
createTeamForm.style.display = 'none';
const onClick = () => {
    createTeamForm.style.display = 'block';
}
let getOwnerData = localStorage.getItem('owner');
if (getOwnerData === null) {
    var ownerArray = []
} else {
    ownerArray = JSON.parse(getOwnerData);
}
let compareArray = [];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const loginEmails = urlParams.get('email');
function createTeam() {
    let teamName = document.getElementById('teamName').value;
    let addMembers = document.getElementById('addMembers').value;
    let createNowBut = document.getElementById('createNow');
    function OwnersTeam(ownerName, teamName, memberNames) {
        this.owner_name = ownerName;
        this.team_name = teamName;
        this.member_names = memberNames;
    }
    for (let i = 0; i < ownerArray.length; i++) {
        for (let keys in ownerArray[i]) {
            compareArray.push(ownerArray[i][keys]);
            for (let j = 0; j < compareArray.length; j++) {
                if (compareArray[j] === loginEmails) {
                    let ownnerTeam = new OwnersTeam(loginEmails, teamName, addMembers);
                    localStorage.setItem('ownerTeam', JSON.stringify(ownnerTeam)) || [];
                    let getOwnerTeamData = localStorage.getItem('ownerTeam');
                    if (getOwnerTeamData === null) {
                        var ownerTeamArray = [];
                    } else {
                        ownerTeamArray = JSON.parse(getOwnerTeamData);
                    }

                }
            }
        }
    }
}