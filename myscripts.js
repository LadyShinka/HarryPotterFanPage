function openArticle(file) {
    open('./articles/' + file);
}

function showForm(formType) {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");
    if (formType == "login") {
        loginForm.classList.replace("hide", "show-form");
    }
    else {
        signupForm.classList.replace("hide", "show-form");
    }
    
}

function hideForm(formType) {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");
    if (formType == "login") {
        loginForm.classList.replace("show-form", "hide");
    }
    else {
        signupForm.classList.replace("show-form", "hide");
    }
}
 
function submitForm(formType) {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");
    var formData = new FormData(loginForm);
    console.log(formData.values);
    // get name
    // replace name with login (hide signup)

    if (formType == "login") {
        loginForm.classList.replace("show-form", "hide");
    }
    else {
        signupForm.classList.replace("show-form", "hide");
    }
}

// get login name and show it somwhere in an element  