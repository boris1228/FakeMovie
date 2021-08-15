
import {Container, Form, FormGroup, Button, FormLabel} from 'react-bootstrap';



export default function SignIn(){
    const signIn = (event) => {
        event.preventDefault();
    
        var email = document.getElementById("signupEmail");
        var pass = document.getElementById("signupPassword");
        if (email.value === "") {
          email.style.borderColor = "red";
          document.getElementById("emailerror").style.display = "block";
        } else {
          email.style.border = "none";
          document.getElementById("emailerror").style.display = "none";
        }
        if (pass.value === "") {
          pass.style.borderColor = "red";
          document.getElementById("passerror").style.display = "block";
        } else {
          pass.style.border = "none";
          document.getElementById("passerror").style.display = "none";
    
          fetch("https://mongodb-api-fakemovie.herokuapp.com/auth", {
            method: "POST",
            body: JSON.stringify({
              email: email.value,
              password: pass.value,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data.msg);
              if (data.msg === "Invalid Email or Password!") {
                alert("Invalid Email or password!");
              } else {
                localStorage.setItem("authorization", data.msg);
                window.location = "/admin";
              }
            })
            .catch((err) => alert(err));
        }};

        const register = (event) => {
          event.preventDefault();
          var passex = "^[a-zA-Z0-9]{6,12}$";
          var name = document.getElementById("signupName");
          var email = document.getElementById("signupEmail");
          var pass = document.getElementById("signupPassword");
          var cpass = document.getElementById("signupPasswordagain");
          if (name.value === "") {
            name.style.borderColor = "red";
            document.getElementById("nameerror").style.display = "block";
          } else {
            name.style.border = "none";
            document.getElementById("nameerror").style.display = "none";
          }
          if (email.value === "") {
            email.style.borderColor = "red";
            document.getElementById("emailerror").style.display = "block";
          } else {
            email.style.border = "none";
            document.getElementById("emailerror").style.display = "none";
          }
          if (pass.value === "") {
            pass.style.borderColor = "red";
            document.getElementById("passerror").style.display = "block";
          } else {
            pass.style.border = "none";
            document.getElementById("passerror").style.display = "none";
          }
          if (cpass.value === "") {
            cpass.style.borderColor = "red";
            document.getElementById("cpasserror").style.display = "block";
          } else {
            cpass.style.border = "none";
            document.getElementById("cpasserror").style.display = "none";
          }
          if (!pass.value.match(passex)) {
            document.getElementById("passerror").style.display = "block";
            document.getElementById("passerror").innerHTML =
              "! Password Must be 6-12 character and no special character";
          } else {
            pass.style.border = "none";
            document.getElementById("passerror").style.display = "none";
      
            fetch("https://mongodb-api-fakemovie.herokuapp.com/user", {
              method: "POST",
              body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: pass.value,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                alert(data.msg);
              })
              .catch((err) => console.log(`Error ${err}`));
          }
        };

    return (
        <Container>
            <Form className="form-container">
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <Form.Control 
                    name="email"
                    type="email"
                    />

                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <Form.Control 
                    name="password"
                    type="password"
                    />
                </FormGroup>

                <Button onClick={signIn} className="mt-4" variant="primary" block>
                    Sign In
                </Button> 

                <Button onClick={register} className="mt-4" variant="primary" block>
                    Register
                </Button> 
            </Form>

        </Container>
    )
}