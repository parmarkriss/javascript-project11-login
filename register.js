let data = [
    {
        userid: 1,
        name: 'kriss',
        email: 'kriss@gmail.com',
        password: 'kriss@123',
        role: 'admin'
    }
];
const save = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    if (name == "" || email == "" || password == "" || cpassword == "") {
        alert("please fill the all data");
    } else {
        let userdata = JSON.parse(localStorage.getItem("register"));
        if (userdata) {
            let find = userdata.find((information) => information.email === email);
            if (find) {
                return alert("Email already exist");
            }
        }
        if (cpassword == password) {
            let obj = {
                userid: Math.floor(Math.random() * 100000),
                name: name,
                email: email,
                password: password,
                role: "user"
            }
            if (localStorage.getItem('register') === null || localStorage.getItem('register') === undefined) {
                data.push(obj);
                localStorage.setItem('register', JSON.stringify(data));
            } else {
                let val = JSON.parse(localStorage.getItem('register'));
                val.push(obj);
                localStorage.setItem('register', JSON.stringify(val))
            }
            alert("User successfully created");
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
            document.getElementById('cpassword').value = "";
            window.location.href = "index.html";
        } else {
            alert("password and confirm password not match");
        }
    }
}

let alluser = JSON.parse(localStorage.getItem('register'));