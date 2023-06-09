export function change_state_user(id_user){
    let users = JSON.parse(localStorage.getItem('usuarios'));
    users.forEach(element => {
       if(element['id'] == id_user){
            if(element['state'] == true){
                element['state'] = false;
            }else{
                element['state'] = true; 
            }
       }
    });
    localStorage.setItem('usuarios', JSON.stringify(users));
}
export function get_state(id_user){
    const users = JSON.parse(localStorage.getItem('usuarios'));
    var tf = true;
    users.forEach(element => {
       if(element['id'] == id_user){
            tf = element['state'];
       }
    });
    return tf;
}