const SESSION_ = JSON.parse(localStorage.getItem('SESSION')) || false;

export const admin_session = (e) => {
    if(SESSION_['type'] != 'admin'){
        localStorage.removeItem('SESSION');
        window.location.href = '../../'
    }
};
export const user_session = (e) => {
    if(SESSION_['type'] != 'user'){
        localStorage.removeItem('SESSION');
        window.location.href = '../../'
    }
};
export function log_out(item){
    const item_ = document.querySelector('[' + item + ']');
    item_.addEventListener('click', function(){
        localStorage.removeItem('SESSION');
        window.location.href = '../../home.html';
    });
    item_.style.cursor = 'pointer';
}