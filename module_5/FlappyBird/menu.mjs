"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus, startGame, playSound, stopResetSound} from "./FlappyBird.mjs";

/* 
Dere skal flytte FlappyBird Spriten til en fornuftig plass på skjermen.
Lage en play knapp som kan starte spillet.
*/

export class TMenu {
    #spFlappyBird;
    #spButtonPlay;
    #spNumber;
    #spInfoText;
    #spGameOver;
    #spMedal;
    #spcvs;
    #activateSprite;
    #posScore;
    #posBestScore;
    #posPlayScore;
    #ranking = {first: 0, second: 0, third: 0};
    constructor(aSpriteCanvas) {
        this.#spcvs = aSpriteCanvas;
        
        GameProps.status = EGameStatus.idle; // gameOver / idle
        const pos = new lib2d.TPosition(210, 100);
        this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);

        pos.y = 260;
        pos.x = 245;
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPLay, pos);

        pos.x = 200;
        pos.y = 70;
        this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos);

        pos.x = 285;
        pos.y = 180;
        this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig, pos);
        this.#spNumber.index = 3; // Nedtelling starter på 3.

        pos.x = 185;
        pos.y = 128;
        this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver, pos);
        
        pos.x = 210;
        pos.y = 170;
        this.#spMedal = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.medal, pos);
        
        this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
        this.#spcvs.addEventListener("click", this.#onClick);
        this.#activateSprite = null; // Vi har ingen aktive sprite enda, når musen er over en sprite setter vi denne til den aktive spriten.

        this.#posScore = new lib2d.TPosition(370, 181);
        this.#posBestScore = new lib2d.TPosition(383, 225);
        this.#posPlayScore = new lib2d.TPosition(75, 50)
        GameProps.sounds.countDown = new libSound.TSoundFile("./Media/countDown.mp3");
        GameProps.sounds.gameOver = new libSound.TSoundFile("./Media/gameOver.mp3");
    }

    draw(){
        switch (GameProps.status) {
            case EGameStatus.idle:
                this.#spFlappyBird.draw();
                this.#spButtonPlay.draw();
            
                break;
            case EGameStatus.getReady:
                this.#spInfoText.index = 0; // Endre teksten til "Get ready"
                this.#spInfoText.draw();
                this.#spNumber.draw();
                break;
            case EGameStatus.gameOver:
                this.#spInfoText.draw();
                this.#spInfoText.index = 1; // Endrer teksten til "Game Over"
                this.#spGameOver.draw();
                this.#spMedal.draw();
                this.#spcvs.drawText(GameProps.score.toString(), this.#posScore);
                this.#spcvs.drawText(GameProps.bestScore.toString(), this.#posBestScore);
                this.#spButtonPlay.draw();
                stopResetSound(GameProps.sounds.countDown);
                break;
            case EGameStatus.playing:
                this.#spcvs.drawText(GameProps.score.toString(), this.#posPlayScore);
                break;
        }
    } // End of draw

    incScore(aScore) { // increaseScore
        GameProps.score += aScore
        if(GameProps.score > this.#ranking.first){ // Første plass
            this.#ranking.third = this.#ranking.second;
            this.#ranking.second = this.#ranking.first;
            this.#ranking.first = GameProps.score;
            GameProps.bestScore = this.#ranking.first;
            this.#spMedal.index = 2;
        }else if(GameProps.score > this.#ranking.second){ // Andre plass
            this.#ranking.third = this.#ranking.second;
            this.#ranking.second = GameProps.score;
            this.#spMedal.index = 1;
        }else if(GameProps.score > this.#ranking.third){ // Tredje plass
            this.#ranking.third = GameProps.score;
            this.#spMedal.index = 3;
        }else{  // Ingen plassering
            this.#spMedal.index = 0;
        }
    }

    reset() {
        GameProps.score = 0;
        this.#spNumber.index = 3;
        this.#spInfoText.index = 0;
    }

    // Ikke eksamensrelevant kode, men viktig for eventer i canvas.
    #onMouseMove = (aEvent) => {
        const pos = this.#spcvs.getMousePos(aEvent);
        const boundRect = this.#spButtonPlay.boundingBox;
        switch(GameProps.status) {
            case EGameStatus.idle:
                if (boundRect.isPositionInside(pos)) {
                    this.#spcvs.style.cursor = "pointer";
                    this.#activateSprite = this.#spButtonPlay;
                } else {
                    this.#spcvs.style.cursor = "default";
                    this.#activateSprite = null; // Ingen sprite er aktiv
        }
        break;
    }
};

#onClick = () => {
    if (this.#activateSprite === this.#spButtonPlay) {
        GameProps.status = EGameStatus.getReady;
        playSound(GameProps.sounds.countDown);
        this.#spcvs.style.cursor = "default";
        setTimeout(this.#onCountDown, 1000);
    }
};

#onCountDown = () => {
    if (this.#spNumber.index > 1){
        this.#spNumber.index--;
        setTimeout(this.#onCountDown, 1000);
    } else {
        startGame();       
    }
};

} // End of TMenu class