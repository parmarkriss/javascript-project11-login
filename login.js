 

let allData = []
const save = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;
    
    let allUser = JSON.parse(localStorage.getItem('register'));

    let login = allUser.filter((v)=>{
        return v.email == email;
    })

    if(login.length != 0){
       if(login[0].password == password){
            if(login[0].role == role){
                localStorage.setItem('checkUserLogin',JSON.stringify(login[0]));
                window.location.href = "dashboard.html";
            }else{
                alert("role is not valid");
            }
       }else{
        alert("password is not valid");
       }
    }else{
        alert("Email is not found");
    }
}

const forgot = () => {
    let useremail = document.getElementById('useremail').value;
    let allUser = JSON.parse(localStorage.getItem('register'));
    let ans = allUser.filter((v)=>{
        return v.email == useremail
    });
    if(ans.length == 1){
        let otp = Math.floor(Math.random() * 100000);
        let obj = {
            userotp : otp,
            email : ans[0].email
        }
        localStorage.setItem('userOtp',JSON.stringify(obj));
        alert("Your Otp :- "+otp)
        window.location.href = "otp.html"
    }else{
        alert("Email is not valid")
    }
}
const Otp = () => {
    let otp = document.getElementById('email').value;
    let checkOtp = JSON.parse(localStorage.getItem('register'));
    let ans = checkOtp.filter((v)=>{
        return v.email === otp;
    })
    if(ans){
        let obj = {
            email : otp,
            unid : Math.floor(Math.random() * 100000)
        }
        alert("your OTP :- "+obj.unid)
        allData.push(obj);
        localStorage.setItem('otpUser',JSON.stringify(allData))
        window.location.href = "otp.html";
    }else{
        alert("Otp is wrong");
    }
}
const newotp = () =>{
    let userdata = document.getElementById('dataotp').value;
    let ans = JSON.parse(localStorage.getItem('otpUser'));
    let otpname = ans.filter((val)=>{

       return val.unid == userdata
    })
    if(otpname){
        alert("otp is successfully");
        window.location.href = "newpassword.html";
    }
    
}


const newpassword = () => {
    let newpassword = document.getElementById('newpassword').value;
    let cpass = document.getElementById('cpassword').value;
    if(newpassword == cpass){
        let allUser = JSON.parse(localStorage.getItem('register'));
        let userOtp = JSON.parse(localStorage.getItem('otpUser'));
        let ans = allUser.filter((val)=>{
           if(val.email == userOtp[0].email){
                val.password = newpassword;
           }
           return val;    
        })
        console.log(ans);
        localStorage.setItem('register',JSON.stringify(ans));
        alert("Password successfully changed!");
        
    }else{
        alert("Newpassword and Confirm password not same");
    }
    localStorage.removeItem('userOtp');
    window.location.href = "index.html";
}

