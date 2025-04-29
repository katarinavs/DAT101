"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList } from "./BrickBreaker.mjs";

export class THero {
    #sprites;
    #paddleIndex = 0;
    constructor(aSpriteCanvas){

        const pos = new lib2D.TPoint(300, 650);
        this.#sprites = [
            new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.PaddleSmall, pos),
            new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.PaddleLarge, pos),
        ];
    }

    draw(){
        this.#sprites[this.#paddleIndex].draw();
    }
}
