let user = document.getElementById("user");
let relog = document.getElementById("relog");
let title = document.getElementById("title");
let detailProduct = document.getElementById("product-render");

let userLogin = JSON.parse(localStorage.getItem("users"))||[];
let renderUser = JSON.parse(localStorage.getItem("login"))||[];
let productDetail = JSON.parse(localStorage.getItem("products"))||[];

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

let cartCount = document.getElementById("count");
        
for (let i = 0; i < userLogin.length; i++) {
    if(userLogin[i].email===renderUser){
        if(userLogin[i].cart != ""){
            cartCount.style.display = "block";
            cartCount.innerHTML = userLogin[i].cart.length;
            break;
        }else{
            cartCount.style.display = "none";
        }
    }
}

for(let i=0;i<userLogin.length;i++){
    if(userLogin[i].email===renderUser){
        user.innerHTML = `
                                <div class="userInfor">
                                    <a href="#">
                                        <img style="width: 20px; height: 20px;" src="../assets/images/avt.png">
                                        <t>${userLogin[i].name}</t>
                                    </a>
                                    <div class="userDown">
                                        <a href="#">Tài khoản của tôi</a>
                                        <a href="#">Đơn mua</a>
                                        <a href="../pages/login.html" onclick="logout(event)">Đăng xuất</a>
                                    </div>
                                </div>
                            `
    }
}