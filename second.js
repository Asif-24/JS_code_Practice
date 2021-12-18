function wellcomeGuest(goodWell,Name){
    goodWell(Name)
}

var guestName = 'Khondoker Asif';

function goodMorning(Name){
    console.log('Good Morning',Name);
}
wellcomeGuest(goodMorning,guestName);
 

