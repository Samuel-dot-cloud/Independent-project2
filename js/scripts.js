function assignment() {
    var year = parseInt(document.getElementById("Year").value);
    var month = parseInt(document.getElementById("Month").value);
    var day = parseInt(document.getElementById("Day").value);

    var date = new Date(year, month - 1, day);
    var datebirth = date.getDay();
    var male = document.getElementById("Male");
    var female = document.getElementById("Female");

    var Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];


    if (male.checked == false && female.checked == false) {
        alert("Please fill in the fields.");
    } else if (year == "" || year.length < 4 || year.length > 4) {
        alert("Please type in the correct input.");
    } else if (month < 1 || month > 12 || month == 2 && day > 29) {
        alert("Please type in the correct input.");
    } else if (day < 1 || day > 31) {
        alert("Please type in the correct input.");
    } else if (male.checked === true) {
        alert("Hi there, " + " Your AKAN name is " + male[datebirth] + " as you were born on a " + Week[datebirth]);
    } else {
        alert("Hi there, " + " Your AKAN name is " + male[datebirth] + " as you were born on a " + Week[datebirth]);
    }
}