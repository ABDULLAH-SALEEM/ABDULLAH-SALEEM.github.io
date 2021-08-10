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
    var category = document.getElementById('category');
    var catVal = category.options[category.selectedIndex].value;
    var className = document.getElementById('class');
    var classVal = className.options[className.selectedIndex].value;
    console.log(rooms[catVal][classVal]);
    return false;
}