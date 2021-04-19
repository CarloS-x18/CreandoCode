document.addEventListener('DOMContentLoaded', function() {
    DOMContentLoaded();
});

function DOMContentLoaded() {

    // Menu del MediaQuerie
    menuNav();

    // Insertar el Resumen de los posts en la seccion Publicaciones
    resumeArticle();

    

}

function menuNav() {
    const menu = document.querySelector('.menu');

    menu.addEventListener('click', e => {
        const ocultarMenu = document.querySelector('.mostrar-menu');
    
        if(ocultarMenu) {
            ocultarMenu.classList.remove('mostrar-menu');
        } else {
            const mostrarMenu = document.querySelector('.navegacion-header');
            mostrarMenu.classList.add('mostrar-menu');
        }
    });
}


const contentArticle = document.querySelector('.resume-articles');

const titleArticle = document.querySelector('.article-title').innerHTML;

console.log(titleArticle)
