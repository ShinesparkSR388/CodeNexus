import { create_post } from "./write_post.js";
import { admin_session, log_out } from "../login_sign_up/session.js";

admin_session();
log_out('logout');
const btn_submit = document.querySelector('[button-submit]');

btn_submit.addEventListener('click', create_post);