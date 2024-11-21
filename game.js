//Global phaser
const config ={
type: Phaser.AUTO,
width:256,
height:244,
backgroundColor:'#049cd8',
parent:'game',//El parent donde se va a renderizar mnuestro juego es el elemento con el identificador "game"
scene:{
    preload, //Con esto se ejecuta para precargar los recurssos que vamos necesitar
    create, //Se ejecuta cuando el juego comienza
    update//Se ejcuta en cada frame - se ejecuta constantemente
}
}
new Phaser.Game(config)//Le pasamos la configuración

function preload(){//This se ejecuta primero
    //This-> game _> el juego que estamos construyendo
    //Vamoa a cargar la imagen

//image(y(vertical), y(horizontal), id-del-asset)
this.load.image('cloud1', 'assets/scenery/overworld/cloud1.png')

this.load.spritesheet('mario', //Esta es la id, tiene que ser unico
    'assets/entities/mario.png',
{frameWidth:18, frameHeight:16})//Cuanto es que ocupa uno de los marios(imagenes - ancho)
this.load.image('floorbricks',
    'assets/scenery/overworld/floorbricks.png'
)


}
function create(){
    //Luego de cargar la imagen, la mostramos
    this.add.image(0,0, 'cloud1')//Pasamos la posicion luego la imagen
    .setOrigin(0,0)
    .setScale(0.15)//Escalamos la imagen(converting in small)
    
    //0-empiece abajo en la izquierda--altura - ancho -- tamaño de la altura -- de que elemento?
    this.add.tileSprite(0, config.height, config.width, 32, 'floorbricks')
    .setScale(1)
    .setOrigin(0,1)

    
    this.add.sprite(50,210, 'mario')
    .setOrigin(0,1)






}//then

function update(){}//execute continuously(continuamente)- en bucle infinito

