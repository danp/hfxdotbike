function greater(x,y){
  return x>y;
}
function lesserOrEqual(x,y){
  return x<=y;
}
function updateDisplayOfRides(parentElement,comparitor){

  var today = new Date();
  const rides=parentElement.getElementsByClassName("ride");
  for (let i = 0; i < rides.length; i++) {

    const rideDateStr=rides[i].getAttribute('ride_date');
    const rideDate=new Date(rideDateStr);
    const isUpcoming=comparitor(rideDate.getTime(),today.getTime());
    if(!isUpcoming){

      rides[i].style.display='none';
    }
    else{

      rides[i].style.display='block';
    }
  }
}
function setRideDisplayFromDate(){

  const upcomingRidesDiv=document.getElementsByClassName("upcoming-rides")[0];
  updateDisplayOfRides(upcomingRidesDiv,greater);
  const pastRidesDiv=document.getElementsByClassName("past-rides")[0];
  updateDisplayOfRides(pastRidesDiv,lesserOrEqual);
}
