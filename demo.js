function splitName() {
    let fullName = document.getElementById("fullname").value.trim();
    let nameParts = fullName.split(" ");
    document.getElementById("firstname").value = nameParts[0] || "";
    document.getElementById("middlename").value = nameParts.length > 2 ? nameParts[1] : "";
    document.getElementById("lastname").value = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
}

function validateForm(event) {
    event.preventDefault();

    let aadhar = document.getElementById("aadhar").value;
    let pan = document.getElementById("pan").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let marks = Array.from(document.querySelectorAll(".marks"), input => parseFloat(input.value) || 0);
    
    if (!/^[0-9]{12}$/.test(aadhar)) {
        alert("Aadhar Number must be exactly 12 digits.");
        return false;
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
        alert("PAN Number must be exactly 10 characters (5 uppercase letters, 4 digits, 1 uppercase letter).");
        return false;
    }
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        alert("Mobile Number must be exactly 10 digits and start with 6, 7, 8, or 9.");
        return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (new Date(dob) >= new Date()) {
        alert("Invalid Date of Birth");
        return false;
    }
    
    if (marks.length < 6) {
        alert("Please enter marks for all 6 subjects.");
        return false;
    }
    
    let bestFive = marks.sort((a, b) => b - a).slice(0, 5);
    let percentage = bestFive.reduce((sum, mark) => sum + mark, 0) / bestFive.length;
    document.getElementById("percentage").value = percentage.toFixed(2);
    
    return false;
}

document.querySelector("form").addEventListener("submit", validateForm);