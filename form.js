  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCEA9MmY6lwlxa0tnaPwDqHcOuhuxDFvi4",
    authDomain: "beyondblindness-b52a7.firebaseapp.com",
    databaseURL: "https://beyondblindness-b52a7.firebaseio.com",
    projectId: "beyondblindness-b52a7",
    storageBucket: "beyondblindness-b52a7.appspot.com",
    messagingSenderId: "644863850908",
    appId: "1:644863850908:web:3966175d53cbbe0c4ff059"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

    function signUp(){
  
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("Signed Up");
       }
       
       
       
       function signIn(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        
        
        
       }
       
       
       function signOut(){
        
        auth.signOut();
        alert("Signed Out");
        
       }
       
       
       
       auth.onAuthStateChanged(function(user){
        
        if(user){
         
         var email = user.email;
         alert("Active User " + email);
         
         //Take user to a different or home page
      
         //is signed in
         
        }else{
         
         alert("No Active User");
         //no user is signed in
        }
        
        
        
       });