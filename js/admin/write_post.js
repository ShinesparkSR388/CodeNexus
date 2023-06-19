export const create_post = (e) =>{
    e.preventDefault();
    const title = document.querySelector('[title-post]');
    const content = document.querySelector('[content-post]');
    //const url = url_image_set_post(img, reader_);
    if(title.value == '' || content.value == ''){
        alert('rellene los campos');
        return;
    }
    const users = JSON.parse(localStorage.getItem("usuarios"));
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const SESSION_ = JSON.parse(localStorage.getItem("SESSION"));
    let dt = SESSION_['id'];

    const post = {
        id: uuid.v4(),
        id_user: dt,
        title: title.value,
        content: content.value,
        date: moment().format('DD/MM/YYYY'),
        img_post: null
    }
    const reader_ = new FileReader();
    const img_url = document.querySelector('[img-post]');
    const img = img_url.files[0];
    reader_.readAsDataURL(img);
    reader_.addEventListener('load', () => {
        post['img_post'] = reader_.result;
        try{
            posts.push(post);
            localStorage.setItem('posts', JSON.stringify(posts));
            alert('Publicado correctamente');
            title.value = '';
            content.value = '';
            window.location.href = "home_feed.html"
        }catch (error){
            alert('Error al almacenar datos', error);
        }
    });
    
    
}
function url_image_set_post(){


    
    
    
}