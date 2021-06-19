function calculate(){
    let UserBornDate=document.getElementById('date').value;
    let UserBornMonth=document.getElementById('months').value;
    let UserBornYear=document.getElementById('years').value;
    let todayTime=new Date;
    let todayDate=todayTime.getDate();
    let todayMonth=todayTime.getMonth();
    todayMonth+=1;
    let todayYear=todayTime.getFullYear();
    let noOfDays;
    let noOfMonths;
    let noOfYears;
    if(UserBornMonth== 'january'){
        UserBornMonth=1;
     }else if(UserBornMonth=='february'){
        UserBornMonth=2;
     }else if(UserBornMonth=='march'){
        UserBornMonth=3;
     }else if(UserBornMonth=='april'){
         UserBornMonth=4;
     }else if(UserBornMonth=='may'){
         UserBornMonth=5;
     }else if(UserBornMonth=='june'){
         UserBornMonth=6;
     }else if(UserBornMonth=='july'){
         UserBornMonth=7;
     }else if(UserBornMonth=='august'){
         UserBornMonth=8;
     }else if(UserBornMonth=='september'){
         UserBornMonth=9;
     }else if(UserBornMonth=='october'){
         UserBornMonth=10;
     }else if(UserBornMonth=='november'){
         UserBornMonth=11;
     }else if(UserBornMonth=='december'){
         UserBornMonth=12;
     }
     if(UserBornDate>todayDate && UserBornMonth>todayMonth){
         todayMonth-=1;
         todayDate+=31;
         todayYear-=1;
         todayMonth+=12;
     }else if(UserBornMonth>todayMonth){
         todayMonth+=12;
         todayYear-=1;
     }else if(UserBornDate>todayDate){
         todayDate+=31;
         todayMonth-=1;   
     }
     noOfDays=todayDate-UserBornDate;
     noOfMonths=todayMonth-UserBornMonth;
     noOfYears=todayYear-UserBornYear;
     if(noOfMonths>=12){
         noOfMonths-=12;
         noOfYears+=1;
     }
     document.getElementById('Youtput').innerHTML=noOfYears;
     document.getElementById('Moutput').innerHTML=noOfMonths;
     document.getElementById('Doutput').innerHTML=noOfDays;
     return false;
}


