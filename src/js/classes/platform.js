/* -------------------------------------------------------------------------------------- */
/* PLATFORM CLASS */
/* PLATFORM CLASS */

export class Platform {
    constructor({x,  y, image}) {
        this.position = {
            originX: x,
            x,
            y
        }
        this.image = image;
        this.width = this.image.width;
        this.height = this.image.height;        
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
    update(context) {
        this.draw(context);
    }

    movetoRight() {
        if (this.position.x <= this.position.originX) {
            this.position.x += 6;
        }
    }
    movetoLeft() {
        this.position.x -= 6;
    }
}