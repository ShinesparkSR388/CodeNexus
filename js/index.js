const user = JSON.parse(localStorage.getItem('login_success')) || false
const SESSION_ = JSON.parse(localStorage.getItem('SESSION')) || false;
if(SESSION_['type'] == 'admin'){
    window.location.href = '../html/admin/home_feed.html';
}
if(SESSION_['type'] == 'user'){
  window.location.href = '../html/user/home_feed.html';
}
if(!user){
    window.location.href = '../html/login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = '../html/Login.html'
})