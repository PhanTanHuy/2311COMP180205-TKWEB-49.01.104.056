function funAlert(){
    alert("Do admin chưa học sever nên bạn có thể nhập bất cứ thứ gì vào Tài khoản và Mật khẩu để đăng nhập!");
}

setTimeout(funAlert, 1000);

function creataccount(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === "" || password === "") {
       
        // alert('Vui lòng nhập đầy đủ tài khoản và mật khẩu.');
        document.getElementById('error-message').style.display = 'block';
    } else {
       
       
        window.location.href = 'contenthlw.html';
    }
}