export function get_user_info(){
    const SESSION_ = JSON.parse(localStorage.getItem('SESSION')) || {};
    const users = JSON.parse(localStorage.getItem('usuarios')) || {};
    const username = document.querySelector('[username_]');
    const about = document.querySelector('[information]');
    users.forEach(element => {
        if(element['id'] == SESSION_['id']){
            username.textContent = element['username'];
            if(element['about'] != null){
                about.textContent = element['about'];
            }else{
                about.textContent = 'No hay informacion que mostrar';
            }
        }
    });
} 

export function edit_user_info(){
    const SESSION_ = JSON.parse(localStorage.getItem('SESSION')) || {};
    const users = JSON.parse(localStorage.getItem('usuarios')) || {};
    const about = document.querySelector('[information]');
    const textarea = document.querySelector('[edit-content]');
    const save_button = document.querySelector('[save-about]');
    const edit_button = document.querySelector('[edit]');
    const title = document.querySelector('[title-about]');

    about.style.display = 'none';
    edit_button.style.display = 'none';
    title.style.display = 'none';
    save_button.style.display = 'block';


    users.forEach(element => {
        if(element['id'] == SESSION_['id']){
            textarea.textContent = element['about'];
        }
    });
    textarea.style.display = 'block';
}

export function save_user_info(){
    const SESSION_ = JSON.parse(localStorage.getItem('SESSION')) || {};
    const users = JSON.parse(localStorage.getItem('usuarios')) || {};
    const about = document.querySelector('[information]');
    const textarea = document.querySelector('[edit-content]');
    const save_button = document.querySelector('[save-about]');
    const edit_button = document.querySelector('[edit]');

    save_button.style.display = 'none';
    textarea.style.display = 'none';
    about.style.display = 'block';
    edit_button.style.display = 'block';
    const title = document.querySelector('[title-about]');
    title.style.display = 'block';
    let counter = 0;
    let new_users = [];
    users.forEach(element => {
        counter = counter + 1;
        if(element['id'] == SESSION_['id']){
            element['about'] = textarea.value;
            new_users.push(element);
        }else{
            new_users.push(element)
        }
    });
    localStorage.setItem('usuarios', JSON.stringify(users));
    get_user_info();
}