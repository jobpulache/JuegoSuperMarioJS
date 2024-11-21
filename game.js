//Global phaser
const config ={
type: Phaser.AUTO,
width:256,
height:244,
backgroundColor:'#fff',
parent:'game',
scene:{
    preload, //Con esto se ejecuta para precargar los recurssos que vamos necesitar
    create, //Se ejecuta cuando el juego comienza
    update//Se ejcuta en cada frame
}
}
new Phaser.Game(config)

function preload(){//This se ejecura primero

}
function create(){}//Next

function update(){}//execute continuously(continuamente)
