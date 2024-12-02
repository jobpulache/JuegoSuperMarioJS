export const createAnimations=(game)=>{
    game.anims.create({
        key: 'mario-walk',
        //creamoa frames - Le decimos cuál es el spriteSheet que queremos utiliar
        frames: game.anims.generateFrameNumbers('mario',//Del mario quiero que me crees una animación que vaya desde el frame de  " " a ...
            {start: 3, end: 2}
        ),
         frameRate: 12,//Es la velocidad a la  que se va a realizar la animación
        //Le decimos cuantas veces se tiene que repetir
        repeat: -1// Infinito
    })
    //Creo otra animación para cuando mario no esta haciendo nada 
    game.anims.create({
        key: 'mario-idle',
        frames: [{key: 'mario',frame:0}]//Del spriteMARIO utiliza el frame 0
    })
    //Animation for jump
    game.anims.create({
        key:'mario-jump',
        frames: [{key:'mario', frame:5}]
        
    })
    game.anims.create({
        key:'mario-dead',
        frames:[{key:'mario', frame:4}]
    })
}