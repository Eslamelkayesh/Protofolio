function SendMail(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    let parms = {
        first_name: document.getElementById("first_name").value,
        secound_name: document.getElementById("secound_name").value,
        exampleInputEmail1: document.getElementById("exampleInputEmail1").value,
        phone_number: document.getElementById("phone_number").value,
        exampleFormControlTextarea1: document.getElementById("exampleFormControlTextarea1").value,
    }

    emailjs.send("service_bvzvbcm", "template_n2jl62a", parms)
        .then(function(response) {
            alert("Email Sent!!");
        }, function(error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
}
