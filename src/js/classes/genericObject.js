/* -------------------------------------------------------------------------------------- */
/* GENERIC OBJECT CLASS (BACKGROUND, HILLS, CLOUDS, ETC) */
/* GENERIC OBJECT CLASS (BACKGROUND, HILLS, CLOUDS, ETC) */

export class GenericObject {
    constructor({x,  y, image, type}) {
        this.position = {
            originX: x,
            x,
            y
        }
        this.type = type;
        this.image = image;
        this.height = this.image.height;        
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
    update(context) {
        this.draw(context);
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