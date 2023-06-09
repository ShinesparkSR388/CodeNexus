export function user_bar(){        
    const users = document.querySelector('[users_]');
    const posts = document.querySelector('[posts_]');
    const block = document.querySelector('[block_]');
    const section_user = document.querySelector('[admin-users]');
    const section_posts = document.querySelector('[admin-posts]');
    const section_blocks = document.querySelector('[admin-blocked]');

    users.classList.add('bg-color-2');
    posts.classList.remove('bg-color-2');
    block.classList.remove('bg-color-2');

    section_user.style.display = 'flex';
    section_posts.style.display = 'none';
    section_blocks.style.display = 'none';
}
export function post_bar(){        
    const users = document.querySelector('[users_]');
    const posts = document.querySelector('[posts_]');
    const block = document.querySelector('[block_]');
    const section_user = document.querySelector('[admin-users]');
    const section_posts = document.querySelector('[admin-posts]');
    const section_blocks = document.querySelector('[admin-blocked]');

    users.classList.remove('bg-color-2');
    posts.classList.add('bg-color-2');
    block.classList.remove('bg-color-2');

    section_user.style.display = 'none';
    section_posts.style.display = 'flex';
    section_blocks.style.display = 'none';
}
export function block_bar(){        
    const users = document.querySelector('[users_]');
    const posts = document.querySelector('[posts_]');
    const block = document.querySelector('[block_]');
    const section_user = document.querySelector('[admin-users]');
    const section_posts = document.querySelector('[admin-posts]');
    const section_blocks = document.querySelector('[admin-blocked]');

    users.classList.remove('bg-color-2');
    posts.classList.remove('bg-color-2');
    block.classList.add('bg-color-2');

    section_user.style.display = 'none';
    section_posts.style.display = 'none';
    section_blocks.style.display = 'flex';
}