function sendmsg() {
    var sendBtn = document.getElementById('sendmsg');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    //var subj = document.getElementById("subject").value || '';
    var msgObj = new Object();
    msgObj.name = name;
    msgObj.email = email;
    msgObj.msg = msg;
    //msgObj.subject = subj;
    var msgJSON = JSON.stringify(msgObj);
    //alert(msgJSON);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == 'y') {
                //alert(this.responseText);
                sendBtn.style.backgroundColor = 'green';
                sendBtn.innerHTML = 'Message successfully send';
                //alert("Thank you for contacting us.\nWe have taken note of your message. \nWe will be in touch shortly.")
            } else {
                sendBtn.innerHTML = 'Message Send Failed';
                sendBtn.style.backgroundColor = 'red';
                //alert("Sorry for this but there seems to be an issue with the email service.\nWe will fix it soon but consider calling us in the meantime.");
            }
        }
    };
    xmlhttp.open('GET', './msg.php?q=' + msgJSON, true);
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

function toggleMenu() {
    var nav = document.getElementsByClassName('navigation')[0];

    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}