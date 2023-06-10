//imports
import { admin_session, log_out } from "../session.js";
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