import {log_out} from "./login_sign_up/session.js"
import { get_user_info, edit_user_info, save_user_info } from "./edit_about.js";

get_user_info();
log_out('logout');
const save_button = document.querySelector('[save-about]');
const edit_button = document.querySelector('[edit]');

edit_button.addEventListener('click', edit_user_info);
save_button.addEventListener('click', save_user_info);