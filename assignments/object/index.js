var itemsArray = [
    { names: 'juice', price: '50', quantity: '3' },
    { names: 'cookie', price: '30', quantity: '9' },
    { names: 'shirt', price: '880', quantity: '1' },
    { names: 'pen', price: '100', quantity: '2' }];
var total = [];
for (let i = 0; i < itemsArray.length; i++) {
    document.write(itemsArray[i]['names'], ' ', itemsArray[i]['price'] * itemsArray[i]['quantity'], '<br>');
    total.push(itemsArray[i]['price'] * itemsArray[i]['quantity']);
}
let sum = 0;
for (let j = 0; j < total.length; j++) {
    sum += total[j];
}
document.write('Total ', sum);
function checkProperty() {
    let array=[];
    let property = document.getElementById('property').value;
    var details = {
        name: 'abdullah',
        email: 'email',
        age: 'age',
        password: 'password',
        gender: 'gender',
        city: 'city',
        country: 'country'
    }
    for (var keys in details) {
        array.push(keys);
    }
    if(array.indexOf(property)==-1 || property==''){
        document.getElementById('propertyoutput').innerHTML='property not found';
    }else{document.getElementById('propertyoutput').innerHTML='property found';}
    console.log(array.indexOf(property));
    return false;
}
function Person(fname, lname, age, email, eyecolour){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.email=email;
    this.eyecolour=eyecolour;
}

var person1= new Person('abdullah','saleem','19','xxxxx@xxxx.com','black');
var person2= new Person('noman','ali','9','yyyyy@yyy.com','blue');
var arrayPopulation=[];
function onSubmitt() {
    var names = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var profession = document.getElementById('profession').value;
    function Population(iname, iaddress, ieducation, iprofession) {
        this.inames = iname;
        this.iaddress = iaddress;
        this.ieducation = ieducation;
        this.iprofession = iprofession;
    } 
    person1 = new Population(names, address, education, profession);
    console.log(person1);
    arrayPopulation.push(person1);
    localStorage.setItem('population',JSON.stringify(arrayPopulation));

    return false;
}



