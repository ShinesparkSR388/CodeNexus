//imports
import { admin_session, log_out } from "../login_sign_up/session.js";
import { user_bar, post_bar, block_bar } from "./sett_toolbar.js";

//acciones
admin_session();
log_out('logout');
const users = document.querySelector('[users_]');
const posts = document.querySelector('[posts_]');
const block = document.querySelector('[block_]');
user_bar();
users.addEventListener('click',user_bar);
posts.addEventListener('click',post_bar);
block.addEventListener('click',block_bar);

//otras funciones
//posts crud
import { get_posts, delete_post, edit_posts, save_edit_post } from "./crud_post.js";

get_posts();
const delete_post_ = document.querySelector('[button-delete]');
delete_post_.addEventListener('click', delete_post);
const edit_ = document.querySelector('[button-edit]');
edit_.addEventListener('click', edit_posts);
const save_post = document.querySelector('[button-save]');
save_post.addEventListener('click', save_edit_post);