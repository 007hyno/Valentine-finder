const mpusername = document.getElementById('m-username')
const mpage = document.getElementById('m-age')
const mpgender = document.getElementById('m-gender')
const mpzodiac = document.getElementById('m-zodiac')
const mpzodiact = document.getElementById('m-zodiac-text')
const mpinstagram = document.getElementById('m-instagram')
const mpprofession = document.getElementById('m-profession')
const mplocation = document.getElementById('m-location')
const mpbio = document.getElementById('m-bio')
const mpquote = document.getElementById('m-quote')
const mpphoto = document.getElementById('m-profile-picture')

var modal = document.getElementById("myModal");
var fmodal = document.getElementById("fmyModal");
var pmodal = document.getElementById("profileModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var modal_title = document.getElementById("modal-title");
var modal_data = document.getElementById("modal-data");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_m = document.getElementById("closed");
var cspan = document.getElementById("fclose");
const fbs = document.getElementById('fb-submit')

$(".details-btn").click(function(){
    $(".details").toggle('slow');
});
profileModal = (uid)=> {
  pmodal.style.display = "block";
  fetchProfileModal(uid)
    // console.log("😶- "+JSON.stringify(nd))
    // console.log("🤣- "+JSON.stringify(doc.data()))
  }
  


feedModal = (email)=> {
  let feedbackdone=false
  ufb.where('email','==',email)
  .get().then((snapshot)=>{
    if(snapshot.docs==""){
      fmodal.style.display = "block";
    }else{
        modalf("Feedback","Your feedback has been already recorded")
    }
  })
}
modalf = (mt,md)=> {
modal.style.display = "block";
modal_data.innerText= md;
modal_title.innerText = mt;
}

  // When the user clicks on <span> (x), close the modal
  cspan.onclick = function() {
    fmodal.style.display = "none";
  }
  span_m.onclick = function() {
    pmodal.style.display = "none";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == pmodal) {
      pmodal.style.display = "none";  
    }
    if (event.target == fmodal) {
      fmodal.style.display = "none";  
    }
  }
/////  --------------------list profile--------------------
  fetchProfileModal= (uid) => {
    // localStorage.setItem('profileData', JSON.stringify(data));
    usd
    .where('uid','==',uid)
    .get().then((snapshot)=>{
      snapshot.docs.map(doc => {
  mpusername.innerText=doc.get('0')
  mpgender.innerText=doc.get('1')
  mpage.innerText=agecalc(doc.get('2'))
  mpzodiac.src="sign/"+zodiac(pD(doc.get('2')).getMonth(),pD(doc.get('2')).getMonth())+".svg"
  mpzodiact.innerText=zodiac(pD(doc.get('2')).getMonth(),pD(doc.get('2')).getMonth()) 
  mpinstagram.innerText=doc.get('3') 
  mpinstagram.href="https://www.instagram.com/"+doc.get('3') 
  mpprofession.innerText=doc.get('4')
  mplocation.innerText=doc.get('5')
  mpbio.innerText=doc.get('6')
  mpquote.innerText=doc.get('7')
  // mpquote.innerText='"'
  mpphoto.src=doc.get("photoUrl")
})
})
  }
  function pD(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }
  function agecalc(data){
    var dob = data  
    var month_diff = Date.now() - pD(dob).getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970); 
    return age
  }
  function zodiac(day,month){
    if (month == 11){ 
      if (day < 22)
      return "sagittarius";
      else
      return "capricornus";
    } 
    else if (month == 0){
      if (day < 20)
      return "capricornus";
      else
      return "aquarius";
    }
    else if (month == 1){
      if (day < 19)
      return "aquarius";
      else
      return "pisces";
    }
    else if(month == 2){
      if (day < 21)
      return "pisces";
      else
      return "aries";
    }
    else if (month == 3){
      if (day < 20)
      return "aries";
      else
      return "taurus";
    } 
    else if (month ==4){
      if (day < 21)
      return "taurus";
      else
      return "gemini";
    } 
    else if( month == 5){
      if (day < 21)
      return "gemini";
      else
      return "crab";
    }
    else if (month == 6){
      if (day < 23)
      return "crab";
      else
      return "lion";
    }
    else if( month == 7){
      if (day < 23)
      return "lion";
      else
      return "virgo";
    } 
    else if (month == 8){
      if (day < 23)
      return "virgo";
      else
      return "libra";
    }
    else if (month == 9){
      if (day < 23)
      return "libra";
      else
      return "scorpion";
    }
    else if (month == 10){
      if (day < 22)
      return "scorpion";
      else
      return "sagittarius";
    }
      
  } 