"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import libSound from "../../common/libs/libSound.mjs";
import { gameProps, EGameStatusType, spawnSequence } from "./SimonSays.mjs";

export class TColorButton extends libSprite.TSpriteButton {
    constructor(aSpriteCanvas, aSpriteInfo) {
        super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
        this.sound = null;
    }

    // Vi har noe som heter A.P.I.E. (Abstract, Polymorphism, Inheritance, Encapsulation)
    // Vi må løse dette ned polymorphism, når musa er over smultringen
    isMouseInside(aPoint) {
        let isInside = super.isMouseInside(aPoint);
    // Hvis musa er over, sjekk videre om den er utenfor radius 1 og utenfor radius 2.
        if(isInside){
            const dx = aPoint.x - gameProps.GameCenter.x;
            const dy = aPoint.y - gameProps.GameCenter.y;
            const dist = Math.hypot(dx, dy);
            isInside = dist >= (this.spi.dst.r1) && (dist <= this.spi.dst.r2);
        }
        return isInside;
    }

    // Vi må også løse dette problemet med polymorphism, når musa trykker på smultringen.
    onMouseDown() {
        this.index = 1;
        this.sound.play();
    }

    onLeave(aEvent) {
        if(aEvent.buttons !== 0){
            this.index = 0;
            this.sound.stop();
        }
    }

    // Vi må også løse dette problemet med polymorphism, når musa slippes opp på smultringen.
    onMouseUp() {
        if(this.index !== 1) return; // Hvis knappen ikke er trykket ned så gjør ingenting
        this.index = 0;
        this.sound.stop();
        if(gameProps.Status !== EGameStatusType.Player){
            return;
        }
        if(gameProps.activeButton === this){
            console.log("Riktig knapp");
            // Hvis vi har flere knapper i sekvensen, velg neste knapp spm aktiv.
            if(gameProps.seqIndex < gameProps.sequence.length - 1){
                gameProps.seqIndex++;
                gameProps.activeButton = gameProps.sequence[gameProps.seqIndex];
            }else{ 
                // Nå er vi på siste knapp i sekvensen, og det er computer sin tur! 
                gameProps.spnRound.value++;
                spawnSequence();
            }
            // Hvis ikke så spawn ny knapp i sekvensen.
        } else {
            console.log("Feil knapp");
            gameProps.Status = EGameStatusType.GameOver;
            gameProps.buttonStartEnd.index = 1;
            gameProps.buttonStartEnd.visible = true;
        }
    }

} // End of TColorButton class