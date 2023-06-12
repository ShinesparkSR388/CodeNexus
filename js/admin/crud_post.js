export function get_posts(){
    const posts = JSON.parse(localStorage.getItem('posts'));

    //elementos html
    const numero = document.querySelector('[post-number]');
    const title = document.querySelector('[post-title]');


    let counter = 0;
    posts.forEach(element => {
        //number

        const row_ = document.createElement('div');
        row_.classList.add('row', 'bg-color-3');
        const col_ = document.createElement('div');
        col_.classList.add('col');
        const h4_ = document.createElement('h4');
        h4_.classList.add('margin-1');

        //Title
        const row__ = document.createElement('div');
        row__.classList.add('row', 'bg-color-3');
        const col__ = document.createElement('div');
        col__.classList.add('col');
        const h4__ = document.createElement('h4');
        h4__.classList.add('margin-1');

        if((counter % 2) == 0){
            row_.classList.add('bg-color-4');
            row__.classList.add('bg-color-4');
            counter = counter + 1;
        }else{
            counter = counter + 1;
        }
        row_.style.cursor = 'pointer';
        row_.setAttribute('number','');
        h4_.textContent = counter;
        col_.appendChild(h4_);
        row_.appendChild(col_);
        numero.appendChild(row_);
        
        row__.style.cursor = 'pointer';
        row__.setAttribute('title','');
        h4__.textContent = element['title'];
        col__.appendChild(h4__);
        row__.appendChild(col__);
        title.appendChild(row__);

        //parte para pasar datos por posible edicion/eliminacion
        const id_ = document.querySelector('[id-post]');
        const title_ = document.querySelector('[title-post]');
        const content_ = document.querySelector('[content-post]');
        const edit_ = document.querySelector('[button-edit]');
        const delete_ = document.querySelector('[button-delete]');
        function select(){
            (document.querySelectorAll('[number]')).forEach(element => {
                element.classList.remove('bg-color-ligth');
            });
            const form_ = document.querySelector('[form-edit]');
            form_.style.display = 'none';
            id_.textContent = element['id'];
            title_.value = element['title'];
            content_.value = element['content'];
            edit_.style.display = 'inline';
            delete_.style.display = 'inline';
            row_.classList.add('bg-color-ligth');
        }
        function hov(){
            row_.classList.add('border');
            row__.classList.add('border');
        }
        function reel(){
            row_.classList.remove('border');
            row__.classList.remove('border');
        }
        row_.addEventListener('click', select);
        row__.addEventListener('click', select);
        row_.addEventListener('mouseenter', hov);
        row__.addEventListener('mouseenter', hov);
        row_.addEventListener('mouseleave', reel);
        row__.addEventListener('mouseleave', reel);
    });
}
/**
 * <div class="row bg-color-3 border">
        <div class="col">
            <h4 class="margin-1">Nº</h4>
        </div>
    </div>
 */
export function delete_post(){
    const posts = JSON.parse(localStorage.getItem('posts'));
    const id_ = document.querySelector('[id-post]');
    let new_posts = [];

    posts.forEach(element => {
        if(element['id'] == id_.textContent){
            
        }else{
            new_posts.push(element);
        }
    });
    localStorage.setItem('posts', JSON.stringify(new_posts));
    (document.querySelectorAll('[number]')).forEach(element => {
        element.innerHTML = '';
    });(document.querySelectorAll('[title]')).forEach(element => {
        element.innerHTML = '';
    });
    get_posts();
}
export function edit_posts(){
    const form_ = document.querySelector('[form-edit]');
    form_.style.display = 'block';
    const edit_ = document.querySelector('[button-edit]');
    edit_.style.display = 'none';
    const delete_ = document.querySelector('[button-delete]');
    delete_.style.display = 'none';
}

export const save_edit_post = (e) =>{
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem('posts'));
    const id_ = document.querySelector('[id-post]');
    const title_ = document.querySelector('[title-post]');
    const content_ = document.querySelector('[content-post]');
    let new_posts = [];

    posts.forEach(element => {
        if(element['id'] == id_.textContent){
            element['title'] = title_.value;
            element['content'] = content_.value;
            new_posts.push(element);
        }else{
            new_posts.push(element);
        }
    });
    localStorage.setItem('posts', JSON.stringify(new_posts));
    (document.querySelectorAll('[number]')).forEach(element => {
        element.innerHTML = '';
    });(document.querySelectorAll('[title]')).forEach(element => {
        element.innerHTML = '';
    });

    get_posts();
    const form_ = document.querySelector('[form-edit]');
    form_.style.display = 'none';
    const edit_ = document.querySelector('[button-edit]');
    edit_.style.display = 'inline';
    const delete_ = document.querySelector('[button-delete]');
    delete_.style.display = 'inline';
}