var usernameId;
var passwordId;


function verifyInfo(){
      usernameId = document.getElementById("usernameInput").value
      passwordId = document.getElementById("passwordInput").value
      console.log(usernameId, passwordId);
      if (usernameId == passwordId) {
        alert("Username and Password can NOT be the same!");
      } else if (usernameId.length <= 6 || passwordId.length <= 6){
        alert("Username and Password MUST be more than 6 characters!");
      } else if (usernameId.includes("!") || usernameId.includes("#") || usernameId.includes("$")){
        alert("Username can NOT include !, #, or $");
      } else if (!(passwordId.includes("!") || passwordId.includes("#") || passwordId.includes("$"))){
        alert("Password MUST include atleast one !, #, or $");
      } else if (passwordId == "password") {
        alert("Password can NOT be password");
      } else {
        alert("Successful Account Created!");
      }
}
