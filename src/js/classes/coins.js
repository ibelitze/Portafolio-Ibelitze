/* -------------------------------------------------------------------------------------- */
/* GENERIC OBJECT CLASS (BACKGROUND, HILLS, CLOUDS, ETC) */
/* GENERIC OBJECT CLASS (BACKGROUND, HILLS, CLOUDS, ETC) */

export class Coin {
    constructor({x,  y, image, type}) {
        this.position = {
            originX: x,
            x,
            y
        }
        this.type = type;
        this.image = image;
        this.width = 65;
        this.height = this.image.height;    
        this.taken = false;
        this.framesquare = 0;
        this.currentSpriteWidth = 64;
    }

    // dibuja al jugador en el canvas
    draw(context) {
        if (!this.taken) {
            context.drawImage(
                this.image, 
                this.currentSpriteWidth * Math.floor(this.framesquare),
                0,
                64,
                65,
                this.position.x, 
                this.position.y, 
                this.width, 
                this.height
            );
        } else {
            this.image = null;
        }

    }


    update(context) {
        if (!this.taken) {
            this.framesquare += 1;
            if (this.framesquare == 24) {
                this.framesquare = 0;
            }
    
            this.draw(context);
        }
    }

    movetoRight(number) {
        if (this.position.x <= this.position.originX) {
            this.position.x += number;
        }
    }
    movetoLeft(number) {
        this.position.x -= number;
    }
}