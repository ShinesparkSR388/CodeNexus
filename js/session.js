const SESSION_ = JSON.parse(localStorage.getItem('SESSION')) || false;

export const admin_session = (e) => {
    if(SESSION_['type'] != 'admin'){
        localStorage.removeItem('SESSION');
        window.location.href = '../Login.html'
    }
}
export const user_session = (e) => {
    if(SESSION_['type'] != 'user'){
        localStorage.removeItem('SESSION');
        window.location.href = '../Login.html'
    }
}
