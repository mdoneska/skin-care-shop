

{
  

    let submitBtn = document.getElementById("submit");
    //let submitBtn = document.getElementById("submit");
    function openRegister() {
        let form = htmlToElement(`


        <form class="form" id = "form">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input class="form-control" id="firstName" placeholder="First Name" required />
          <div class="error"></div>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input class="form-control" id="lastName" placeholder="Last Name" required />
          <div class="error"></div>
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input class="form-control" id="city" placeholder="City" required />
          <div class="error"></div>
        </div>
        <div class="form-group">
          <label for="job">Job</label>
          <input class="form-control" id="job" placeholder="Job" />
          <div class="error"></div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Email" required />
          <div class="error"></div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" required />
          <div class="error"></div>
        </div>

       
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