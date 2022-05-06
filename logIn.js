let loggedUser = JSON.parse(localStorage.getItem("loggedUser")) == undefined // proverka dali postoi key , ako ne postoi vrakja undefined
    ? {} // ako ne postoi togash davame vrednost prazna niza
    : JSON.parse(localStorage.getItem("loggedUser"));


let createdDiv = document.getElementById("firstChild");

function openSignIn() {
    let form = htmlToElement(
        `
        <form class="form" id="myForm">   
        <div id="error"> </div> 
        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" id="email" name="email" required placeholder="Email" minlength="5" maxlength="25"  />
          <div class="error"></div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" required name="password" placeholder="Password" minlength="5" maxlength="20"  />
          <div class="error"></div>
        </div> 
      </form>`
    )
    modalBody.innerHTML = '';
    modalBody.append(form);

    // appendFooter("Sign In");



    // document.getElementById("submit").addEventListener("click", function () {

    //     let email = document.getElementById("email");
    //     let pass = document.getElementById("password");

    //     let user = {
    //         email: email.value,
    //         password: pass.value
    //     }

    //     if (user.email != "" && user.password != "") {

    //         axios
    //             .get(
    //                 `http://www.sedc.somee.com/api/users/${user.email}/${user.password}`
    //             )
    //             .then(function (response) {

    //                 console.log(response);

    //                 if (response.data) {

    //                     loggedUser.name = response.data.firstName;
    //                     loggedUser.lastName = response.data.lastName;
    //                     loggedUser.email = response.data.email;
    //                     loggedUser.userId = response.data.id;


    //                     localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    //                     setTimeout(clickButton, 500);

    //                     writeLoggedUser(loggedUser);

    //                     signOut();

    //                 }
    //                 else {
    //                     let err = document.getElementById("error");
    //                     err.innerText = "Your email and password doesn't match";
    //                     err.style = "color: red";
    //                 }
    //             });


    //     }
    //     else {
    //         labelText("Please fill the required fields", "red");
    //     }


    // })
}

function clickButton() {
    click_event = new CustomEvent("click");
    btn_element = document.getElementsByClassName("modalDismiss")[0];
    btn_element.dispatchEvent(click_event);
}

function writeLoggedUser(user) {
    createdDiv.innerText = "Welcome " + user.name + " " + user.lastName;
    createdDiv.style = "color: white; margin-right:20px";
}

function signOut() {

    let signOut = htmlToElement(
        `
<li class="nav-item" id="liSignOut">
<a class="nav-link active" aria-current="page" href="#"  id="signOut"   
  >Sign Out</a
>
</li>
`
    );

    document.getElementById("ulList").append(signOut);
    document.getElementById("liRegister").style = "display:none";
    document.getElementById("liLogIn").style = "display:none";
    document.getElementById("signOut").addEventListener("click", function () {
        if (confirm("Are you sure you want to sign out ?")) {
            localStorage.removeItem("loggedUser");
            document.getElementById("liRegister").style = "display:block";
            document.getElementById("liLogIn").style = "display:block";
            document.getElementById("liSignOut").remove()
            loggedUser = {};
            createdDiv.innerText = "";
        }
    })


}


if (loggedUser.name !== undefined) {
    writeLoggedUser(loggedUser);
    signOut();
}