import { read_posts } from "./gen_structures.js";
import { user_session, log_out } from "../login_sign_up/session.js";

user_session();
read_posts('[posts-null]');
log_out('logout');
