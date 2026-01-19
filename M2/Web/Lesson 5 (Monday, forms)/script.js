        function sendForm(){
            const formulier = document.querySelector(".Dashboard").value;
            const name = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const topic = document.getElementById("topic").value;
            const messege = document.getElementById("msg").value;
            const check = document.getElementById("copyEmail").value;
            const methodCont = document.getElementsByClassName("checks").value;

            const mail = "Name: ${name} \n Email: ${email} \n Topic: ${topic} \n Message: ${messege}";

            const mailto = "b.heldt@ma-web.nl"
            const mailsubj = "Invilled by ${name}";
            const mailBody = "Beste ${mailto}, \n \n Thank you. \n ${topic}";

            const mailtolink = "mailto:${mailto}?cc=${email}&subject=${encodeURIComponent(messege)}&body=${encodeURIComponent(mailBody)}";

            window.location.href = mailtolink;
        }