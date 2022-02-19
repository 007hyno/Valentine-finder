// console.log(firebase)
console.log("App.js 💔")
console.log("main.js 💏")

const dataQuestions= [
{
q:1,
  type:1,
question:"What should I call you?",
in:"text",
placeholder:"eg.Yourname",
text:"This Name will be displayed on your profile.",
},
{
q:1,
  type:2,
question:"What is your gender?",
a:"Man",
b:"Women",
text:"Your Gender will be visible on your profile",
},
{
q:1,
  type:1,
question:"Your Date of Birth",
in:"date",
text:"Your age will be visible on your profile",
},
{
q:1,
  type:1,
question:"What is ur Instagram username?",
in:"text",
placeholder:"eg.007hyno",
text:"Your Instagram will be displayed on your profile",
},
{
q:1,
  type:2,
question:"What is your Profession?",
a:"Student",
b:"Job",
text:"Your profession will be displayed on your profile",
},
{
q:1,
  type:1,
question:"Where are u from?",
in:"text",
placeholder:"eg.Dehradun",
text:"Your location will be displayed on your profile",
},
{
  q:1,
type:1,
question:"Describe yourself if in 15 words",
placeholder:"Describe Yourself..",
text:"Your Bio will be displayed on your profile",
},
{
  q:1,
  type:3,
  question:" Which quote is more realable?",
  a:"Then I found you and your eyes stole all my words away",
  b:"Your love is better than ice cream.",
  c:"Love is friendship that has caught on fire.",
  d:"Love planted a rose, and the world turned sweet.",
  text:"Your Quote will be displayed on your profile",
  },
]
const infoQuestions = [
{
q:2,
type:2,
question:"Do beleive in soulmates?",
a:"Yes",
b:"No",
text:"Tell me something about you.",
},
{
q:2,
type:3,
question:"Which type of relation you are looking for?",
a:"Romantic relationships",
b:"Casual relationships",
c:"Serious relationships",
d:"Friendship",
text:"Tell me something about you...",
},
{
q:2,
type:3,
question:" Cat or Dog?",
a:"Dog",
b:"Cat",
c:"Both",
d:"None",
text:"Tell me something about you...",
},
{
q:2,
type:3,
question:"Tea or Coffee?",
a:"Tea",
b:"Coffee",
c:"Both",
d:"None",
text:"Tell me something about you...",
},
{
  q:2,
type:3,
  question:"What are u looking for in your valentine",
  a:"Sense of Humor",
  b:"Maturity",
  c:"Openness",
  d:"Respect",
  text:"Tell me something about you...",
},
{
q:2,
type:3,
question:"Do u Smoke or Drink?",
a:"I smoke",
b:"I Drink",
c:"Both",
d:"None",
text:"Tell me something about you...",
},
{
q:2,
type:3,
question:"Are u Funny",
a:"Little bit",
b:"A Lot",
c:"No",
d:"Yes",
text:"Tell me something about you...",
},
{
q:2,
type:3,
question:"What do u prefer most",
a:"Movies",
b:"Poetry",
c:"Music",
d:"None",
text:"Last Question..",
},

] 
const auth = firebase.auth();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const lProfile = document.getElementById('Profile-card');
const lQuiz = document.getElementById('Quiz');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn1 = document.getElementById('signOutBtn1');
const signOutBtn2 = document.getElementById('signOutBtn2');
const userDetails = document.getElementById('userDetails');
const provider = new firebase.auth.GoogleAuthProvider();


const db = firebase.firestore();
let usd = db.collection('usersdata')
let usi = db.collection('usersinfo')
let ufb = db.collection('feedback')

const userData={}
const userInfo={}
const quizTaken = false

const quiz= document.getElementById('quiz')
const nq= document.getElementById('nextquiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const tt = document.getElementById('what')
const a3_text = document.getElementById('a3_text')
const b3_text = document.getElementById('b3_text')
const c3_text = document.getElementById('c3_text')
const d3_text = document.getElementById('d3_text')
const a2_text = document.getElementById('a2_text')
const b2_text = document.getElementById('b2_text')
const a3 = document.getElementById('a3')
const b3 = document.getElementById('b3')
const c3 = document.getElementById('c3')
const d3 = document.getElementById('d3')
const a2 = document.getElementById('a2')
const b2 = document.getElementById('b2')
const t1 = document.getElementById('type1')
const t2 = document.getElementById('type2')
const t3 = document.getElementById('type3')
const text = document.getElementById('text')
const submitBtn = document.getElementById('submit')
const submitBtn2 = document.getElementById('submit2')


const pusername = document.getElementById('username')
const page = document.getElementById('age')
const pgender = document.getElementById('gender')
const pzodiac = document.getElementById('zodiac')
const pzodiact = document.getElementById('zodiac-text')
const pinstagram = document.getElementById('instagram')
const pprofession = document.getElementById('profession')
const plocation = document.getElementById('location')
const pbio = document.getElementById('bio')
const pquote = document.getElementById('quote')
const pphoto = document.getElementById('profile-picture')
const fb = document.getElementById('feedback')

const matchList = document.querySelector('.cont-res')

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn1.onclick = () => sout()
signOutBtn2.onclick = () => sout()
// out.onclick = () => sout()
function sout(){
  console.log("Logging Out");
  console.log("See you soon💜");
  auth.signOut();
  location.reload();
  console.log("loaded re");
}
const ar=[]
auth.onAuthStateChanged(user => {
if (user) {
  //what to open(url) 💜STEP-1
whenSignedIn.style.display = "block";
whenSignedOut.style.display = "none";
console.log("Welcome💖");
usd = db.collection('usersdata')
let profileUid  
let quizdata  
usd.where('uid','==',user.uid).get().then((snapshot)=>{
snapshot.docs.map(doc => {profileUid=doc.data()})})

usi.where('uid','==',user.uid).get().then((snapshot)=>{
snapshot.docs.map(doc => {quizdata=doc.data()})
if(snapshot.docs.length){
  console.log("Open Profile");
  lQuiz.style.display = "none"
  lProfile.style.display = "block"
  // console.log("aya ",profileUid);   
  if(pusername.innerText==""){
  console.log("Fetch profile called"+pusername.innerText);
  fetchProfile(profileUid,quizdata);
} 
        // location.href = "https://findvalentineon.web.app/profile.html";
}else{
  console.log("Open Quiz");
  lProfile.style.display = "none"
  lQuiz.style.display = "block"
  currentQuiz=0
  modalf('Profile Form-','Questions for your profile',)
  // modalf('Lets start Personality Quiz','This quiz will help your find people with similar interest Lets go')

  loadQuiz(dataQuestions)
}
}).catch(function(error){
  // console.log("error - ",error);
})
// -----------------💜🧡💝💞💟🖤💔💔🤍🩺😻 Quiz Game ❤🖤💔😍💌💛💛❤🖤💟💞🧡💜----------------- ///
fetchProfile= (data,quiz) => {
  // localStorage.setItem('profileData', JSON.stringify(data));
var lll = localStorage.getItem('profileData');
// console.log("love -"+JSON.stringify(lll))
pusername.innerText=data[0]
pgender.innerText+=data[1]
page.innerText+=agecalc(data[2])
// console.log(data[2]);
// console.log(agecalc(data[2]));
pzodiac.src="sign/"+zodiac(pD(data[2]).getMonth(),pD(data[2]).getMonth())+".svg"
pzodiact.innerText=zodiac(pD(data[2]).getMonth(),pD(data[2]).getMonth()) 
pinstagram.innerText+=data[3] 
pinstagram.href="https://www.instagram.com/"+data[3] 
pprofession.innerText=data[4]
plocation.innerText=data[5]
pbio.innerText=data[6]
pquote.innerText+=data[7]
pquote.innerText+='"'
pphoto.src=data["photoUrl"]
fetchMatches(data[1],quiz);
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
function fetchMatches(gender,quizdata) {
  setTimeout(function(){
    let ema = user.email
      let feedbackdone=false
      ufb.where('email','==',ema)
      .get().then((snapshot)=>{
        if(snapshot.docs==""){
          fmodal.style.display = "block";
        }
      })
    
  }, 12000);
  // let nd
  let mat=0
  usd
.where('1','!=',gender)
.get().then((snapshot)=>{
  snapshot.docs.map(doc => {
    // nd=doc.data()
    usi.where('uid','==',doc.get('uid'))
    .get().then((snapshot)=>{
      snapshot.docs.map(d => {
      for (let i = 0; i < 8; i++) {
        if(d.get(`${i}`)==quizdata[i]){
          mat++;
        }
      }
      if(mat==0){
        console.log("Not matched");
      }else{
        $(".cont-res").append(`<li class="li shadow">
        <div class="gpa">
        <img class="pic" src="${doc.data().photoUrl}" alt="${doc.data().uid}">
        <div class="lis">
        <p class="sp li-e name">${doc.get('0')}</p>
        <div class="liss">
        <p class="sp li-e ">${agecalc(doc.get('2'))}</p>
        <p>-</p>
        <p class="sp li-e ">${doc.get('5')}</p>
        </div>
        </div>
        </div>
        <div class="lis mat"> 
        <p class=" li-e li-b bub">${(mat/8)*100}% Matched</p>
        </div>
        </li>`);
        mat=0
      }
    })})


  })
  })
}
$('#matchl').on('click','li', function(e){
e.preventDefault();
// console.log($(this).find("img").attr("alt"));
// console.log("p");
profileModal($(this).find("img").attr("alt"))
});
let og = {}
function test(data) {
og.push(data)
  // console.log("😶🥰- "+JSON.stringify(data))
  // console.log("😶🥰- "+data)
  // console.log("😶🥰- "+og)
}


var currentQuiz = 0
function loadQuiz(questions) {

  console.log("_____________-------------------Quiz_____________-------------_____");
  // console.log("Qno. "+currentQuiz);
  deselectAnswers() 
  quiz.style.display="block";  
  nq.style.display="none";  
  t1.style.display = "none"; 
t2.style.display = "none"; 
t3.style.display = "none";  
if(questions[currentQuiz].q===1){
  submitBtn.style.display = "block";  
  submitBtn2.style.display = "none";  
}else{
  // console.log("4 option- "+questions[currentQuiz].q);
  submitBtn2.style.display = "block";  
  submitBtn.style.display = "none";  
}
const currentQuizData = questions[currentQuiz]
questionEl.innerText = currentQuizData.question
tt.innerText=currentQuizData.text
if(currentQuizData.type===1){
text.placeholder = currentQuizData.placeholder;
text.type = currentQuizData.in;
t1.style.display = "block"; 
}else if (currentQuizData.type===2){
t2.style.display = "block"; 
a2_text.innerText = currentQuizData.a
a2.value = currentQuizData.a
b2_text.innerText = currentQuizData.b
b2.value = currentQuizData.b
}else{
t3.style.display = "block"; 
a3_text.innerText = currentQuizData.a
a3.value = currentQuizData.a
b3_text.innerText = currentQuizData.b
b3.value = currentQuizData.b
c3_text.innerText = currentQuizData.c
c3.value = currentQuizData.c
d3_text.innerText = currentQuizData.d
d3.value = currentQuizData.d
}
}

function deselectAnswers() {
  console.log("Input Clean🆑🆑🆑");
text.value=""
answerEls.forEach(answerEl => answerEl.checked = false)
}

// 💜💜💜💜💜💜💜💜💜💜💜
function getSelected(qq) {
  let uanswer=null
  const ty = qq[currentQuiz].type
  if(ty===1){
    uanswer=text.value
  }else{  
    answerEls.forEach(answerEl => { 
      if(answerEl.checked) {
        uanswer = answerEl.value
      }
    })
  }
  // console.log("Ans- ",uanswer);
  return uanswer
} 
// 🧡🧡🧡🧡🧡🧡🧡
// submitBtn.addEventListener('click', () => {
submitBtn.onclick= () => {
  console.log("1-🧈🧈Button clicked🧈🧈");
  // console.log("Q.no- ",currentQuiz);
  let choice=getSelected(dataQuestions)
  // console.log("choice - "+choice);
  if(choice===""||choice===null){
    modalf("Note","Please fill the field")
    console.log("Please answer the question to proceed")
    loadQuiz(dataQuestions)
  }else{
    // console.log("Not empty");
    // console.log("if - curerent-"+currentQuiz+" < total- "+dataQuestions.length+" -  ")
    // console.log("answer stored and qno increase++ ")
    userData[currentQuiz]=choice
    currentQuiz++
    if(currentQuiz < dataQuestions.length) {
      // console.log("next quz open  ")
   loadQuiz(dataQuestions)
  } else {
    // console.log("How much data store💞- ",currentQuiz);
    modalf('Personality Quiz','Please answer 8 simple questions \n To complete your profile..')
      currentQuiz=0
      loadQuiz(infoQuestions)
    // console.log("Qz1- "+JSON.stringify(userData))
  }
  }
}
// )
// submitBtn2.addEventListener('click', () => {
submitBtn2.onclick= () => {
  // console.log("Q.no- ",currentQuiz);
  let choice=getSelected(infoQuestions)
  if(choice===""||choice===null){
    loadQuiz(infoQuestions)
  }else{
  userInfo[currentQuiz]=choice
     currentQuiz++
         if(currentQuiz < infoQuestions.length) {
           loadQuiz(infoQuestions)
          } else {
            // console.log("End🦞 - ",userInfo)
            // console.log("type - - ",typeof(userInfo))
            insertProfileData(userData,userInfo)
            
            // location.href = "https://findvalentineon.web.app";
  }
  }
}
//)
function insertProfileData(d1,d2){
  console.log('inserting🔃')
  d1.uid=user.uid
  d2.uid=user.uid
  d1.displayName=user.displayName
  d2.displayName=user.displayName
  d1.photoUrl=user.photoURL
  d1.email=user.email
  d2.email=user.email
  d1.time=firebase.firestore.FieldValue.serverTimestamp()
  d2.time=firebase.firestore.FieldValue.serverTimestamp()
  console.log('inserted✅')
  usd.add(d1)
  usi.add(d2)
  console.log('inserted✅')
  setTimeout(function(){
    location.reload();
}, 1000);
}

////////////////////---------------Feedback-----------------


fb.onclick = () => {
  feedModal(user.email);
  // alert("fee")
}

fbs.onclick = function() {
  const feedback={}
  var stars = $('.star:checked').val();
  var fbtext = $('#feedback-text').val();
  console.log('inserting🔃')
  feedback.stars=stars
  feedback.feedback=fbtext
  feedback.displayName=user.displayName
  feedback.photoUrl=user.photoURL
  feedback.email=user.email
  feedback.exist=true
  feedback.time=firebase.firestore.FieldValue.serverTimestamp()
  console.log('inserted✅')
  ufb.add(feedback)
  fmodal.style.display = "none";
  modalf("Feedback","Your feedback has been submitted successfully")
} 







} else {
  // not signed in
  console.log("Please logIn.");
  whenSignedIn.style.display = "none";
  whenSignedOut.style.display = "block";
}
});

///////////////////////////// I dont get it💀⚡⚡⚡⚡⚡😴😴😴😴😪🛏😫😪😪😪
// let unsubscribe;

// auth.onAuthStateChanged(user => {

//     if (user) {
//------------------------------------------------------
          
//------------------------------------------------------
        //Profile🙊
        //  usi
        // .where('uid','==',user.uid)
        // .onSnapshot(querySnapshot=>{
        //     querySnapshot.docs.map(doc=>{
        //         // console.log(doc.data().uid)
        //     })
        // });
    // } else {
        // Unsubscribe when the user signs out
        // unsubscribe && unsubscribe();
    // }
// });