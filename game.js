//Global phaser
const config ={
type: Phaser.AUTO,
width:256,
height:244,
backgroundColor:'#fff',
parent:'game',//El parent donde se va a renderizar mnuestro juego es el elemento con el identificador "game"
scene:{
    preload, //Con esto se ejecuta para precargar los recurssos que vamos necesitar
    create, //Se ejecuta cuando el juego comienza
    update//Se ejcuta en cada frame - se ejecuta constantemente
}
}
new Phaser.Game(config)//Le pasamos la configuración

function preload(){//This se ejecuta primero

}
function create(){}//then

function update(){}//execute continuously(continuamente)- en bucle infinito

