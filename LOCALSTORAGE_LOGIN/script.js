document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("registerForm")) {
        document.getElementById("registerForm").addEventListener("submit", function(e) {
            e.preventDefault();
            let email = document.getElementById("registerEmail").value;
            let password = document.getElementById("registerPassword").value;
            registerUser(email, password);
        })
        
    }

    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", function(e) {
            e.preventDefault();
            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;
            loginUser(email, password);
        })
        
    }

    if (document.getElementById("usersTableBody")) {
        displayUsers();
        
    }

})




function registerUser(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("Este email ja está cadastrado");
        return;
    }

    users.push([email, password])
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html"

    
}