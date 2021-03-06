//logs the user in if the email and password are correct
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {   
            document.location.replace('/landing');
        } else {
            $("#loginErrorModal").modal()
        }
    }
}

// async function signUpHandler (event){
//     document.location.replace('/user-form');
// }

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);

// document.querySelector('#sign-up').addEventListener('submit', signUpHandler);