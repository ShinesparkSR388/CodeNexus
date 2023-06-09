import { read_posts } from "./gen_structures.js";
import { admin_session } from "../session.js";

admin_session();
read_posts('[posts-null]');
