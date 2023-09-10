import { auth } from "./config.js"
import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const usernameElm = document.getElementById('username')
const passwordElm = document.getElementById('password')
const LoginBtn = document.getElementById('login-btn')

const handleLogin = () => {
    const email = usernameElm.value;
    const password = passwordElm.value;
   signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Bạn đã đăng nhập thành công");
            window.location = './index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.code)
        });
}

LoginBtn.addEventListener('click', handleLogin)