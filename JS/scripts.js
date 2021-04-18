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