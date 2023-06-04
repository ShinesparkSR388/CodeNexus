const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = '../html/login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = '../html/Login.html'
})