import { auth } from "./config.js"
import { signOut} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const LogoutBtn = document.getElementById('logout-btn')
const handleLogout = () => {
    signOut(auth).then(() => {
        window.location = './login.html'
      })
    .catch((error) => {
      });
}

LogoutBtn.addEventListener('click',handleLogout)