import { read_posts } from "./gen_structures.js";
import { admin_session, log_out } from "../login_sign_up/session.js";

admin_session();
log_out('logout');
read_posts('[posts-null]');
