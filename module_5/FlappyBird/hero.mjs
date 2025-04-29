"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { EGameStatus, GameProps, playSound, stopResetSound } from "./FlappyBird.mjs";

class THero extends libSprite.TSprite {
    #spi;
    #gravity = 9.81 / 60;
    #velocity = 0;
    #sineWave;
    constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
        super(aSpriteCanvas, aSpriteInfo, aPosition);
        this.#spi = aSpriteInfo;
        this.animateSpeed = 30;
        this.isDead = false;
        this.rotation = 0;
        this.#sineWave = new lib2d.TSineWave(1.5,2 );
    }

    draw(){
        super.draw();
    }

    update(){
        const groundY = GameProps.ground.posY;
        const bottomY = this.posY + this.#spi.height;
        if(bottomY < groundY) {
            if(this.posY < 0){
                this.posY = 0;
                this.#velocity = 0;
            }
            this.translate(0, this.#velocity);
            this.rotation  = this.#velocity * 10;
            this.#velocity += this.#gravity;
        } else {
            stopResetSound(GameProps.sounds.gameOver);
            playSound(GameProps.sounds.gameOver);
            this.posY = groundY - this.#spi.height;
            GameProps.status = EGameStatus.gameOver;
            this.animateSpeed = 0;
            stopResetSound(GameProps.sounds.running); // Stopper musikken når helten dør
        }
    }   

    updateIdle(){
        this.translate(0, this.#sineWave.value);
    }

    flap(){
        this.#velocity = -3;
    }
}

export default THero;