function userForm() {

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let userEmail = document.getElementById("email").value;
    let userAddress = document.getElementById("address").value;
    let userCity = document.getElementById("city").value;
    let userProvince = document.getElementById("province").value;
    let membershipBasic = document.getElementById("basic").value;
    let membershipStandard = document.getElementById("standard").value;
    let membershipPremium = document.getElementById("premium").value;
    

    document.getElementById("user_fullname").innerHTML = firstName + " " + lastName;
    document.getElementById("user_email").innerHTML = userEmail;
    document.getElementById("user_address").innerHTML = userAddress;
    document.getElementById("user_city").innerHTML = userCity;
    document.getElementById("user_province").innerHTML = userProvince;

    if (membershipBasic) {
        document.getElementById("user_membership").innerHTML = membershipBasic;
    }

    if (membershipStandard) {
        document.getElementById("user_membership").innerHTML = membershipStandard;
    }

    if (membershipPremium) {
        document.getElementById("user_membership").innerHTML = membershipPremium;
    }

}

let numbers = []
let numberOfNumbers = numbers.length;

 let autoSum = document.getElementById("autosum").value;
 let average = document.getElementById("average").value;
 let min = document.getElementById("min").value;
 let max = document.getElementById("max").value;

 function myExcelFuns() {
    if (autoSum) {
    document.getElementById("numbers").value;
        let autoSum = autoSum.split(" ");
    
}
if (average) {
    document.getElementById("numbers").value;
        let average = average.split(" ");
}

    if (min) {

}

    if (max) {

}
}

      