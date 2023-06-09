import { create_post } from "./write_post.js";
import { admin_session } from "../session.js";

admin_session();
const btn_submit = document.querySelector('[button-submit]');
btn_submit.addEventListener('click', create_post);
