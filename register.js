

{


  let submitBtn = document.getElementById("submit");
  //let submitBtn = document.getElementById("submit");
  function openRegister() {
    let form = htmlToElement(`
        <form class="form" id="myForm">
        <h3>Need an account? Sign up now!</h3>
       
         <div class="container">
                 <label for="email"><b>Email</b></label>
                 <input type="text" id="email" placeholder="Enter email" name="email" required>
          </div>
 
         <div class="container">
                 <label for="password"><b>Password</b></label>
                 <input type="password" id="password" placeholder="Enter Password" name="password" minlength="8" maxlength="20" required>
          </div>

          <div class="container">
                <label for="confirmPassword">Confirm password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" id="confirmPassword" minlength="8" maxlength="20" required "> 
          </div>

          <div class="container">
            <span class="label">Gender</span>
            <input type="radio" name="gender" id="male" value="male" checked>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female">
            <label for="female">Female</label>
        </div>

        <div class="container">
        <label for="country">Country</label>
        <select name="country" id="country" required  onblur="validateInput(this)">
            <option value="">Select country</option>
            <option value="Macedonia">Macedonia</option>
            <option value="USA">America</option>
            <option value="Russia">Russia</option>
        </select>
        
    </div>

           <div class="container">
                  <button id="btn" type="submit" onclick="formSubmit()">Sign up</button> 
          </div>
       
        
       </form>
   </form>

      
      `
    )
    modalBody.innerHTML = '';
    modalBody.append(form);
    appendFooter("Register");




    // let btn = document.getElementById("submit")

    submitBtn.addEventListener("click", function () {

      let firstName = document.getElementById("firstName");
      let lastName = document.getElementById("lastName");
      let city = document.getElementById("city");
      let email = document.getElementById("email");
      let job = document.getElementById("job");
      let password = document.getElementById("password");


      let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        city: city.value,
        email: email.value,
        job: job.value,
        password: password.value
      }


      axios.post(url, user
      ).then(function (response) {
        setTimeout(clickButton, 500);
      })



    })
  }
}