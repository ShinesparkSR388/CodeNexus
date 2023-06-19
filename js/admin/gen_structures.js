import { change_state_user, get_state } from "./lock_unlock.js";

function read_comments(id_post) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const users_ = JSON.parse(localStorage.getItem('usuarios')) || []; 
    let comments_list = [];
    comments.forEach(_ => {
        const row_1 = document.createElement('div');
        let bl_1 = false;
    if(_['id_post'] == id_post){
        bl_1 = true;
        //estructura de los contenedores
        row_1.classList.add("row");
        row_1.classList.add("bg-color-1");
        row_1.classList.add("border-top-2");
        row_1.classList.add("color-1");
        const col_1 = document.createElement('div');
        col_1.classList.add("col");
        const row_ = document.createElement('div');
        row_.classList.add("row");
        row_.classList.add("margin-top-1");
        row_.classList.add("margin-bottom-1");
        const col_2 = document.createElement("div");
        col_2.classList.add("col-1");
        col_2.classList.add("flex-container");
        col_2.classList.add("flex-align-center");
        col_2.classList.add("flex-justify-center");
        const img_user = document.createElement("img");
        img_user.classList.add('rounded-5');
        img_user.classList.add('img-icon-5');
        img_user.setAttribute("src", "../src/user.jpg");
        //estructura de las filas de informacion nombre y contenido
        const col_comment = document.createElement("div");
        col_comment.classList.add("col-9");
        const row_name = document.createElement("div");
        row_name.classList.add('row');
        const row_options_ = document.createElement("div");
        row_options_.classList.add('row', 'margin-top-1');
        //3 options
        const option_col = document.createElement('div');
        option_col.classList.add('col', 'flex-container', 'flex-justify-right', 'padding-right-1');
        
        //ELIMINAR COMENTARIO
        const delete_ = document.createElement('a');
        delete_.textContent = 'Eliminar';
        delete_.classList.add('margin-left-1', 'text-1', 'color-3');
        delete_.style.cursor = 'pointer';
        
        delete_.addEventListener('click', function(){
            let new_list = [];
            let ct = 0;
            comments.forEach(item_ => {
                if(item_['id'] == _['id']){
                    delete(comments[ct]);
                }
                if(item_['id'] != _['id']){
                    new_list.push(item_);
                }
                ct = ct + 1;
            });
            localStorage.setItem('comments', JSON.stringify(new_list));
            row_1.style.display = 'none';
            location.reload();
        });

        //SILENCIAR (JUNTO AL NOMBRE)

        let block_ = document.createElement('a');
        console.log(get_state(_['id_user']));
        if(get_state(_['id_user']) == true){
            block_.textContent = ' !Bloquear!';
        }else{
            block_.textContent = '(Bloqueado)';
        }

        block_.addEventListener('click', function(){
            change_state_user(_['id_user']);
            if(get_state(_['id_user']) == true){
                block_.textContent = ' !Bloquear!';
            }else{
                block_.textContent = '(Bloqueado)';
            }
            location.reload();
        });
        block_.classList.add('margin-left-2', 'text-1', 'color-3', 'opacity-7', 'text-2', 'text-w-1');
        block_.style.cursor = 'pointer';

        option_col.appendChild(delete_);
        row_options_.appendChild(option_col);
        const name = document.createElement("h5");
        name.classList.add('margin-0');
        let user_name = '';
        users_.forEach(__ => {
            if(_['id_user'] == __['id']){
                user_name = __['username'];
            }
        });
        name.textContent = user_name;
        const row_content = document.createElement("div");
        row_content.classList.add("row");
        const content = document.createElement("p");
        content.textContent = _['content'];
        content.classList.add('margin-0');
        content.classList.add('text-1');
        //Agregamos botones para bloquear a el usuario segun sea necesario

        //Ahora meter _os y contenedores dentro de contenedores

        row_content.appendChild(content);
        row_name.appendChild(name);
        row_name.appendChild(block_);
        col_comment.appendChild(row_name);
        col_comment.appendChild(row_content);
        col_comment.appendChild(row_options_);
        col_2.appendChild(img_user);
        row_.appendChild(col_2);
        row_.appendChild(col_comment);
        col_1.appendChild(row_);
        row_1.appendChild(col_1);

    }
    //agregamos el comentario a la lista de comentarios generados de la publicacion
    if(bl_1){
        comments_list.push(row_1);
    }
    }); 
    return comments_list;

} 
/*
<div class="row bg-color-1 border-top-2 color-1 border-bottom">
<div class="col">
<div class="row margin-top-1 margin-bottom-1 ">
    <div class="col-1 flex-container flex-align-center flex-justify-center">
        <img src="../src/user.jpg" class="img-icon-5 rounded-5" alt="user">
    </div>
    <div class="col-9">
        <div class="row">
            <h5 class="margin-0">Nombre de usuario</h5>
        </div>
        <div class="row">
            <p class="margin-0 text-1">Contenido de comentario</p>
        </div>
    </div>
</div>
</div>
</div> */

//LEER COMENTARIOS SIN AUTORIZAR
function read_unmoderated_comments(id_post) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const unautorized_comments = JSON.parse(localStorage.getItem('unautorized_comments')) || [];
    const users_ = JSON.parse(localStorage.getItem('usuarios')) || []; 
    let comments_list = [];
    unautorized_comments.forEach(_ => {
            const row_1 = document.createElement('div');
            let bl_1 = false;
        if(_['id_post'] == id_post){
            bl_1 = true;
            //estructura de los contenedores
            row_1.classList.add("row");
            row_1.classList.add("bg-color-1");
            row_1.classList.add("border-top-2");
            row_1.classList.add("color-1");
            const col_1 = document.createElement('div');
            col_1.classList.add("col");
            const row_ = document.createElement('div');
            row_.classList.add("row");
            row_.classList.add("margin-top-1");
            row_.classList.add("margin-bottom-1");
            const col_2 = document.createElement("div");
            col_2.classList.add("col-1");
            col_2.classList.add("flex-container");
            col_2.classList.add("flex-align-center");
            col_2.classList.add("flex-justify-center");
            const img_user = document.createElement("img");
            img_user.classList.add('rounded-5');
            img_user.classList.add('img-icon-5');
            img_user.setAttribute("src", "../src/user.jpg");
            //estructura de las filas de informacion nombre y contenido
            const col_comment = document.createElement("div");
            col_comment.classList.add("col-9");
            const row_name = document.createElement("div");
            row_name.classList.add('row');
            const row_options_ = document.createElement("div");
            row_options_.classList.add('row', 'margin-top-1');
            //3 options
            const option_col = document.createElement('div');
            option_col.classList.add('col', 'flex-container', 'flex-justify-right', 'padding-right-1');
            //AUTORIZAR
            const autorize = document.createElement('a');
            autorize.textContent = 'Autorizar';
            autorize.classList.add('margin-left-1', 'text-1', 'color-3');
            autorize.style.cursor = 'pointer';
            
            autorize.addEventListener('click', function(){
                let new_list = [];
                comments.push(_);
                let ct = 0;
                unautorized_comments.forEach(item_ => {
                    if(item_['id'] == _['id']){
                        delete(unautorized_comments[ct]);
                    }
                    if(item_['id'] != _['id']){
                        new_list.push(item_);
                    }
                    ct = ct + 1;
                });
                localStorage.setItem('unautorized_comments', JSON.stringify(new_list));
                localStorage.setItem('comments', JSON.stringify(comments));
                row_1.style.display = 'none';
                location.reload();
            });
            //ELIMINAR COMENTARIO
            const delete_ = document.createElement('a');
            delete_.textContent = 'Eliminar';
            delete_.classList.add('margin-left-1', 'text-1', 'color-3');
            delete_.style.cursor = 'pointer';
            
            delete_.addEventListener('click', function(){
                let new_list = [];
                let ct = 0;
                unautorized_comments.forEach(item_ => {
                    if(item_['id'] == _['id']){
                        delete(unautorized_comments[ct]);
                    }
                    if(item_['id'] != _['id']){
                        new_list.push(item_);
                    }
                    ct = ct + 1;
                });
                localStorage.setItem('unautorized_comments', JSON.stringify(new_list));
                row_1.style.display = 'none';
                location.reload();
            });

            //SILENCIAR (JUNTO AL NOMBRE)

            let block_ = document.createElement('a');
            console.log(get_state(_['id_user']));
            if(get_state(_['id_user']) == true){
                block_.textContent = ' !Bloquear!';
            }else{
                block_.textContent = '(Bloqueado)';
            }

            block_.addEventListener('click', function(){
                change_state_user(_['id_user']);
                if(get_state(_['id_user']) == true){
                    block_.textContent = ' !Bloquear!';
                }else{
                    block_.textContent = '(Bloqueado)';
                }
                location.reload();
            });
            block_.classList.add('margin-left-2', 'text-1', 'color-3', 'opacity-7', 'text-2', 'text-w-1');
            block_.style.cursor = 'pointer';

            option_col.appendChild(autorize);
            option_col.appendChild(delete_);
            row_options_.appendChild(option_col);
            const name = document.createElement("h5");
            name.classList.add('margin-0');
            let user_name = '';
            users_.forEach(__ => {
                if(_['id_user'] == __['id']){
                    user_name = __['username'];
                }
            });
            name.textContent = user_name;
            const row_content = document.createElement("div");
            row_content.classList.add("row");
            const content = document.createElement("p");
            content.textContent = _['content'];
            content.classList.add('margin-0');
            content.classList.add('text-1');
            //Agregamos botones para bloquear a el usuario segun sea necesario

            //Ahora meter _os y contenedores dentro de contenedores

            row_content.appendChild(content);
            row_name.appendChild(name);
            row_name.appendChild(block_);
            col_comment.appendChild(row_name);
            col_comment.appendChild(row_content);
            col_comment.appendChild(row_options_);
            col_2.appendChild(img_user);
            row_.appendChild(col_2);
            row_.appendChild(col_comment);
            col_1.appendChild(row_);
            row_1.appendChild(col_1);

        }
        //agregamos el comentario a la lista de comentarios generados de la publicacion
        if(bl_1){
            comments_list.push(row_1);
        }
    }); 
    return comments_list;

}

//Barra de comentarios
function comments_struct(post_, user_){
    const un_comments = JSON.parse(localStorage.getItem('unautorized_comments')) || [];
    const container = document.createElement('div');
    container.classList.add('row', 'padding-0', 'padding-left-1','padding-top-1', 'padding-right-1');
    const col__ = document.createElement('div');
    col__.classList.add('col', 'flex-container', 'flex-justify-rigth', 'flex-align-center');
    const text_ = document.createElement('input');
    text_.setAttribute('type','text');
    text_.classList.add('bg-color-1', 'color-4')
    const btn_sub = document.createElement('button');
    btn_sub.textContent = 'Comentar';
    btn_sub.addEventListener('click', function(){
        const comment_ = {
            id: uuid.v4(),
            id_user: user_,
            id_post: post_,
            content: text_.value,
            date: moment().format('DD/MM/YYYY')
        };
        un_comments.push(comment_);
        localStorage.setItem('unautorized_comments', JSON.stringify(un_comments));
        location.reload();
    });
    col__.appendChild(text_);
    col__.appendChild(btn_sub);
    container.appendChild(col__);
    return container;
}

export function read_posts(query_){
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    posts = posts.reverse();
    const posts_ = document.querySelector(query_);

    posts.forEach(element_ => {
        const div_1 = document.createElement('div');
        div_1.classList.add('row', 'margin-top-1', 'margin-bottom-1', 'bg-color-4', 'rounded-2');
        const col_ = document.createElement('div');
        col_.classList.add('col', 'border-bottom', 'margin-bottom-2');
        const centralRow_ = document.createElement('div');
        centralRow_.classList.add('row', 'bg-color-2', 'padding-top-1', 'rounded-TopLeft-2', 'rounded-TopRight-2');
        const innerCol_ = document.createElement('div');
        innerCol_.classList.add('col', 'padding-left-2');
        const h2_ = document.createElement('h2');
        h2_.textContent = element_['title'];
        const row_ = document.createElement('div');
        row_.classList.add('row');
        const h4_ = document.createElement('h4');
        h4_.classList.add('text-2', 'margin-left-2');
        h4_.textContent = element_['date'];
        users.forEach(item__ => {
            if(element_['id_user'] == item__['id']){
                h4_.textContent = h4_.textContent + ' ' + item__['username'];
            }
        });
        const col_3 = document.createElement('div');
        col_3.classList.add('col', 'form-text', 'margin-1', 'margin-left-2', 'margin-right-2', 'padding-left-2');
        const p_ = document.createElement('p');
        p_.textContent = element_['content'];
        
        const comments_to_do = read_comments(element_['id']);
        const comments_to_autorize = read_unmoderated_comments(element_['id']);
        //Imagen
            const img_post = new Image();
            img_post.src = element_['img_post'];
            img_post.classList.add('objetfit-img-post', 'rounded-3');
            const row_img = document.createElement('div');
            row_img.classList.add('row');
            const row_text = document.createElement('div');
            row_text.classList.add('row');
            const col_img = document.createElement('div');
            col_img.classList.add('col');
            const col_text = document.createElement('div');
            col_text.classList.add('col');
            col_img.appendChild(img_post);
            col_text.appendChild(p_);

            row_img.appendChild(col_img);
            row_text.appendChild(col_text);
        //
        innerCol_.appendChild(h2_);
        centralRow_.appendChild(innerCol_);
        col_.appendChild(centralRow_);
        col_.appendChild(row_);
        col_3.appendChild(row_img);
        row_.appendChild(h4_);
        col_3.appendChild(row_text);
        row_.appendChild(col_3);
        div_1.appendChild(col_);
        posts_.appendChild(div_1);
        comments_to_do.forEach(element__ => {
            col_.appendChild(element__);
        });
        //Comentarios no moderados
        if(comments_to_autorize != ''){
            const h3_ = document.createElement('h4');
            h3_.textContent = 'Comentarios no moderados';
            h3_.classList.add('margin-0', 'padding-0', 'margin-top-1');
            const unmoderated = document.createElement('div');
            unmoderated.classList.add('border-top','row');
            const col_unmoderated = document.createElement('div');
            col_unmoderated.classList.add('col', 'bg-color-dark');
            col_unmoderated.appendChild(h3_);
            comments_to_autorize.forEach(element___ => {
                col_unmoderated.appendChild(element___)
            });
            unmoderated.appendChild(col_unmoderated);
            col_.appendChild(unmoderated);
        }
        //Campo de texto para comentarios
        const dtt_ = (JSON.parse(localStorage.getItem('SESSION')))['id'];
        if(get_state(dtt_)){
            const comment_bar = comments_struct(element_['id'], dtt_);
            col_.appendChild(comment_bar);
        }else{
            
            const comment__ = document.createElement('h4');
            comment__.classList.add('margin-0', 'padding-0', 'margin-top-1', 'opacity-5', 'margin-left-2');
            comment__.textContent = 'Cuenta restringida';
            col_.appendChild(comment__);
        }
    });
} 
/*
<div class="row margin-2 bg-color-4 rounded-2">
    <div class="col">
        <div class="row bg-color-2 padding-top-1 rounded-TopLeft-2 rounded-TopRight-2">
            <div class="col padding-left-2">
                <h2>Titulo</h2>
            </div>
        </div>
        <div class="row">
            <h4 class="text-2 margin-left-2">00/00/2023<br></h4>
            <div class="col form-text row margin-1 margin-left-2 margin-right-2 padding-left-2">
                
                <p>Descripcion y contenido de todo el articulo o post</p>
            </div>
        </div>
        <div class="row bg-color-1 border-top-2 color-1 border-bottom" post-comments>
            
        </div>
    </div>
</div>
*/