function apply() {
    var idnum = document.getElementById('idnum').value;
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var sex = document.getElementById('sex').value;
    var dob = document.getElementById('dob').value;
    var cell = document.getElementById('cell').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var province = document.getElementById('province').value;
    var school = document.getElementById('cschool').value;
    var level = document.getElementById('level').value;

    var applyBtn = document.getElementById('apply-btn');

    var applicationObj = new Object();
    applicationObj.idnum = idnum;
    applicationObj.name = name;
    applicationObj.surname = surname;
    applicationObj.sex = sex;
    applicationObj.dob = dob;
    applicationObj.cell = cell;
    applicationObj.email = email;
    applicationObj.address = address;
    applicationObj.province = province;
    applicationObj.school = school;
    applicationObj.level = level;

    var msgJSON = JSON.stringify(applicationObj);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == 'y') {
                //alert(this.responseText);
                applyBtn.style.backgroundColor = 'green';
                applyBtn.innerHTML = 'Application Sent';
                //alert("Thank you for contacting us.\nWe have taken note of your message. \nWe will be in touch shortly.")
            } else {
                applyBtn.innerHTML = 'Application Failed';
                applyBtn.style.backgroundColor = 'red';
                //alert("Sorry for this but there seems to be an issue with the email service.\nWe will fix it soon but consider calling us in the meantime.");
            }
        }
    };
    xmlhttp.open('GET', './apply.php?q=' + msgJSON, true);
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}