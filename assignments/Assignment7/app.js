let rooms = {
    single_room: {
        First_Class: {
            Room_Type: 'single',
            Room_Class: 'First Class',
            Avalaibility: 10,
            Capicity: '1 adult',
            Price: 1000,
        },
        Business_Class: {
            Room_Type: 'Single',
            Room_Class: 'Business Class',
            Avalaibility: 6,
            Capicity: '1 adult',
            Price: 2000,
        },
    },
    double_room: {
        First_Class: {
            Room_Type: 'Double',
            Room_Class: 'First Class',
            Avalaibility: 10,
            Capicity: '2 adult, 1 Kid',
            Price: 1500,
        },
        Business_Class: {
            Room_Type: 'Double',
            Room_Class: 'Business Class',
            Avalaibility: 6,
            Capicity: '2 adult, 1 Kid',
            Price: 3000,
        },
    },
    family_room: {
        First_Class: {
            Room_Type: 'Family',
            Room_Class: 'First Class',
            Avalaibility: 9,
            Capicity: '2 adult, 4 Kid',
            Price: 3000,
        },
        Business_Class: {
            Room_Type: 'Single',
            Room_Class: 'Business Class',
            Avalaibility: 4,
            Capicity: '2 adult, 4 Kid',
            Price: 4000,
        },
    }

};

function checkForm() {
    const filterDiv=document.getElementsByClassName('filterResult')[0];
    const myTable=document.getElementById('myTable');
    const error = document.getElementById('error');
    error.style.color = 'red';
    const category = document.getElementById('category');
    const catVal = category.options[category.selectedIndex].value;
    const className = document.getElementById('class');
    const classVal = className.options[className.selectedIndex].value;
    if (catVal == 'cat' && classVal=='cla') {
        error.innerHTML = 'Class And Category are Required!';
        return false;
    }else if (catVal == 'cat'){
        error.innerHTML='';
        error.innerHTML = 'Category is Required!';
        category.focus();
        return false;
    }else if (classVal=='cla'){
        error.innerHTML='';
        error.innerHTML = 'Class is Required!';
        className.focus();
        return false;}
    error.innerHTML='';
    var tableRow=`<tr>
                   <td>${rooms[catVal][classVal].Room_Type}</td>
                   <td>${rooms[catVal][classVal].Room_Class}</td>
                   <td>${rooms[catVal][classVal].Avalaibility}</td>
                   <td>${rooms[catVal][classVal].Capicity}</td>
                   <td>${rooms[catVal][classVal].Price}</td>
    </tr>`
    filterDiv.style.display='block';
    myTable.innerHTML=tableRow;
    return false;
}