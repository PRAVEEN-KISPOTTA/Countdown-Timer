const endDate = "17 July 2023 12:00 AM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    
    
    if(diff < 0){
        document.querySelector("h1").innerHTML = "😊 GOOD TO SEE YOU 😊";
        return;
    }
    //convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    
   //convert into hours
    inputs[1].value = Math.floor((diff/3600)%24);
    
    //convert into minute
    inputs[2].value = Math.floor((diff/60)%60);
    
    //convert into second
    inputs[3].value = Math.floor(diff%60);
}

clock();


/*
1 day = 24hrs
1 hr = 60 min
1 min = 60sec OR 60 min = 3600 sec

*/
setInterval(
    ()=>{
        clock();
    }, 1000
)