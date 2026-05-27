/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )

   firebase.database().ref('/').set(
    {
      message: 'Goodbye'
    }
  )
}

  
function DO_THIS (snapshot) {
  console.log (snapshot.val());
}

//function simple read
 function simpleRead() {
    console.log ("reading theWord");
    //firebase.database().ref('/').child('message').once('value',displayRead);
    firebase.database().ref('/').child('theWord').once('value',display, fb_readError);
    console.log('Leaving simpleRead')

 }
// function display (displaying "theWord")
function display (snapshot) {
   var dbData = snapshot.val();
    if (dbData == null) 
    {
      console.log('there was no record when trying to read the theWord');
    }
     else
    {
      console.log ("the theWord is: " + dbData)
    }
  console.log ("Running display(), the theWord is: " + snapshot.val())
  HTML_OUTPUT.innerHTML= snapshot.val();
}


 function fb_readError(error) 
{
  console.log ("there was an error reading the theWord");
  console.error(error);
}


 // read listeners - real time data synchronisation, 
 // connection between the application and the database 
 function fb_readListener() 
{
  console.log ("Read Listener");
  firebase.database().ref('/message').on('value',  fb_logDatabaseRead)
}

// Writing more complex data

firebase.database().ref('/').set
/*(
{
  game1: 
  {
    users:
    {
      Sally: 999999,
      Lucy: 100000,
      Delilah: 9,
      Janice:878577
    }
  }
}
);*/

// more complex scores 
highscoreTable=
{
  game1: 
  {

  users:
    {    
      Sally: 999999,
      Lucy: 100000,
      Delilah: 9,
      Janice:878577
    }
  }
} 
//firebase.database().ref("/").set(highscoreTable)


// Reading a path

function fb_readHighScores()
{
 console.log("reading High Scores");
  firebase.database().ref('/game1/users').orderByValue().once('value', fb_displayHighScores, fb_readError);
  console.log("read high scores");
}



function fb_displayHighScores(snapshot) {
  snapshot.forEach (fb_showOneScore)
  let highScores = snapshot.val()
  console.log("displaying High Scores");
  console.log(snapshot.val())
  console.log("Sally got "+ highScores ["Sally"]+ "  points")
  console.log("Lucy got "+ highScores ["Lucy"]+ "  points")
  console.log("Delilah got "+ highScores ["Delilah"]+ "  points")
  console.log("Janice got "+ highScores ["Janice"]+ "  points")

}


function fb_showOneScore (child) {
  console.log (child.val());
}






// security 

/*
{
//allow anyone to read my data 
// only authentidcated content 
// owners can make changes to their data 

"rules": 
{
  ".read": true,
  ".write": false,
  "users": 
  {
"$uid":
{
  ".read":true,
  ".write": "auth.uid === $uid"
}
}
} 
}

{
  // open rules for testing 
  "rules":
  {
".read": true,
".write":true,
  }
}
*/


async function blockingRead(){
  console.log("reading message");
  var snapshot = await firebase.database().ref('/message').once('value');
  displayRead(snapshot);
  console.log("leaving blockingRead")

}

function displayRead(snapshot) {
  console.log("the message is: " + snapshot.val())
}