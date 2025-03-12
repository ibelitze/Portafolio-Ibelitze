
/* -------------------------------------------------------------------------------------- */
/* PLAYER CLASS */
import { createImage } from "../utils";

export class Player {
    constructor(catRunRight, catRunLeft) {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 55;
        this.height = 50;
        this.isJumping = false;
        this.onPlatform = false;
        this.gravity = 0.5;
        this.framesquare = 0;
        this.winner = false;
        this.frames = {
            stand: {
                right: catRunRight,
                left: catRunLeft,
                width: 32,
            },
        };
        this.currentSprite = this.frames.stand.right;
        this.currentSpriteWidth = 32;

    }


    // se usa para calcular la posición del jugador al saltar
    returnYPositionJump() {
        return this.position.y + this.height;
    }
    returnXPositionJump() {
        return this.position.x + this.width;
    }

    // dibuja al jugador en el canvas
    draw(context) {
        context.drawImage(
            this.currentSprite, 
            this.currentSpriteWidth * Math.floor(this.framesquare),
            0,
            32,
            31,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );
    }

    // actualiza la posición del jugador y vuelve a dibujar en el canvas
    update(context) {
        this.framesquare += 0.50;
        if (this.framesquare == 7) {
            this.framesquare = 0;
        }
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        // código que establece la gravedad en el personaje.
        if (this.returnYPositionJump() + this.velocity.y <= canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            // this.velocity.y = 0;
        }

        // código que establece si el personaje está saltando o no
        if (this.isJumping == true && this.velocity.y === 0) {
            this.isJumping = false;
        }
        
        this.draw(context);
    }

    // función para saltar
    jump() {
        if (this.isJumping === false && !this.winner) {
            this.velocity.y -= 14;
        }
    }

    // mover a la izquierda
    moveLeft() {
        this.velocity.x = -9;
    }

    // mover a la derecha
    moveRight() {
        this.velocity.x = 9;
    }

    // detener todo movimiento horizontal del jugador
    stopMovement() {
        this.velocity.x = 0;
    }
}