//Global phaser
const config ={
type: Phaser.AUTO,
width:256,
height:244,
backgroundColor:'#049cd8',
parent:'game',//El parent donde se va a renderizar mnuestro juego es el elemento con el identificador "game"
physics:{//Esto se encarga de la fisica
    default: 'arcade',
    arcade:{
        gravity: {y:300},//Mi eje Y(hacia abajo) tenga esta gravedad
        debug:false
    }

},
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
    
    //ADD para que el suelo tenga colisión y retenga al mario
    //En las physics añadimos un grupo estatico
    this.floor = this.physics.add.staticGroup()

    this.floor
    .create(0, config.height -16, 'floorbricks')
    .setOrigin(0,0.5)
    .refreshBody()

    this.floor
    .create(150, config.height -16, 'floorbricks')
    .setOrigin(0,0.5)
    .refreshBody()//Hacer que si hay un agujero mario caiga - pilla la posición de las physics

    //0-empiece abajo en la izquierda--altura - ancho -- tamaño de la altura -- de que elemento?
  //This config.height sale de mi mi config. 
 


    // // creamos otro suelo
    // this.add.tileSprite(100, config.height-32, 64, 32, 'floorbricks')
    // .setOrigin(0,0)

    //Lo guardamos en un objeto
//  this.mario=   this.add.sprite(50,210, 'mario')
//     .setOrigin(0,1)

    this.mario = this.physics.add.sprite(50,100, 'mario')
    .setOrigin(0,1)
    .setCollideWorldBounds(true)//Evitamos que mario salga de su mundillo
    .setGravityY(300)//Podemos modificar la gravedad que viene por default

   //agregamos colisión de mario con el suelo para que no caiga
   this.physics.add.collider(this.mario, this.floor)

    //Creamos las animaciones
this.anims.create({
    key: 'mario-walk',
    //creamoa frames - Le decimos cuál es el spriteSheet que queremos utiliar
    frames: this.anims.generateFrameNumbers('mario',//Del mario quiero que me crees una animación que vaya desde el frame de  " " a ...
        {start: 3, end: 2}
    ),
     frameRate: 12,//Es la velocidad a la  que se va a realizar la animación
    //Le decimos cuantas veces se tiene que repetir
    repeat: -1// Infinito
})
//Creo otra animación para cuando mario no esta haciendo nada 
this.anims.create({
    key: 'mario-idle',
    frames: [{key: 'mario',frame:0}]//Del spriteMARIO utiliza el frame 0
})
//Animation for jump
this.anims.create({
    key:'mario-jump',
    frames: this.anims.generateFrameNumbers('mario',
        {start: 2, end: 5}
    )
})

    //Movimiento del mario. COn las llaves
    this.keys = this.input.keyboard.createCursorKeys()// createCursorKeys este es ubn metodo que lo que va a ser es poder visualizar las teclas en la funcion Update  
    
}//then

function update(){//execute continuously(continuamente)- en bucle infinito
    //Ahora dentro de update vamos a tener acceso 
    if(this.keys.left.isDown){//Si la tecla de la izquierda se esta presionando
    this.mario.x-=2//Movemos el mario en eje X-2

    this.mario.flipX = true//Si va a la izquierda gire la X
    //Le pasamos la animación que tiene que ejecutar
    this.mario.anims.play('mario-walk', true)//true-Si ya existe esta animación no se ejecuta
    }else if(this.keys.right.isDown){//Podemos hacer lo contrario(mover derecha)
        this.mario.anims.play('mario-walk', true)
        this.mario.x +=2
        this.mario.flipX=false//Deje de girar a mario

    }else{
        this.mario.anims.play('mario-idle', true)//Sino estoy pulsando ni derecha, ni izquiera. Entonces ejecuta esto(queda parado)
    }
    if(this.keys.up.isDown && this.mario.body.touching.down){//vemosque el mario(elemento)esta tocando por abajo
        this.mario.setVelocityY(-300)//Velocidad del salto
        this.mario.anims.play('mario-jump', true)//Animation jump
    }

}