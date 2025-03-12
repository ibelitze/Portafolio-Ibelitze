/* -------------------------------------------------------------------------------------- */
/* IMPORTING CLASSES AND FUNCTIONS */

import 'animate.css';
import "../styles/style.css";
import Swal from 'sweetalert2'
import {Player} from './classes/player'
import { infoEnglish, infoSpanish, classesForPopups } from './objects/information';
import {desktopPlatforms, mobilePlatforms, desktopGenericObjects, mobileGenericObjects, deskMovCoins} from './objects/objects'
import {createImage, countingCoins} from './utils'


/* -------------------------------------------------------------------------------------- */
/* IMPORTING AND MANAGING IMAGES FOR PLAYER AND BUTTONS */

import catRunRight from '../assets/img/IdleCat-right.png'
import catRunLeft from '../assets/img/IdleCat-left.png'
import buttonUP from '../assets/img/button-up.png'
import buttonLEFT from '../assets/img/button-left.png'
import buttonRIGHT from '../assets/img/button-right.png'
let catrnRght = createImage(catRunRight);
let catrnLeft = createImage(catRunLeft);

document.getElementById('img-button-left').src = buttonLEFT;
document.getElementById('img-button-up').src = buttonUP;
document.getElementById('img-button-right').src = buttonRIGHT;


/* -------------------------------------------------------------------------------------- */
/* CANVAS */

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const keys = {
    right: {pressed: false},
    left: {pressed: false},
    space: {pressed: false},
};


/* -------------------------------------------------------------------------------------- */
/* PLAYER/OBJECTS INSTANCES AND ANIMATION */

let platforms = [];
let genericObjects = [];
let coins = [];
let player = null;
let positionPopups = 'center';
let maxMovementPlayerRight = 600;
let playerOnPlatformY = 0;

// si el canvas es angosto entonces dejamos el máximo movimiento del player hasta 400px
// eso permite activar el parallax en pantallas más pequeñas
if (canvas.width < 700 && canvas.width > 500) {
    maxMovementPlayerRight = 500;
} else if (canvas.width < 500) {
    positionPopups = 'top';
    maxMovementPlayerRight = 200;
}

let playerMoved = false;
let coinCounter = 0;



// ésta función recibe como parámetros los objetos vacío y los instancia
// ya sea primera vez o porque necesita hacer reset y volver a poner todo como estaba.
function initEverything() {
    // DESKTOP
    if (canvas.height > 500) {
        platforms = desktopPlatforms();
        genericObjects = desktopGenericObjects();
        coins = deskMovCoins('desktop');
    }
    // MOBILE
    else {
        platforms = mobilePlatforms();
        genericObjects = mobileGenericObjects();
        coins = deskMovCoins('mobile');
    }
    // JUGADOR 
    player = new Player(
        catrnRght, 
        catrnLeft, 
    );
}


// función que le da vida a todo el movimiento 
function animate() {
    //  requestAnimationFrame hace que la función animate se ejecute indefinidamente 
    // (un poquito de recursión)
    // requestAnimationFrame(animate);

    // requestAnimationFrame funciona bien, pero preferí usar setTimeout
    // resulta que requestAnimationFrame va demasiado rápido y los sprites se ven demasiado acelerados
    // setTimeout me permite controlar la tasa de retraso de todo el dibujado en el canvas
    // eso se resume a una tasa de dibujado más lenta, pero más controlada 
    // (el sprite de mi gato ya no se mueve a la velocidad de la luz XD)
    setTimeout(animate, 22);

    // poniendo el background del color adecuado
    context.fillStyle = '#FBE29A';

    // limpiamos el canvas. Cada vez que la función de arriba se ejecuta:
    // debemos limpiar el canvas para que los objetos no se arrastren y queden manchados
    context.fillRect(0, 0, canvas.width, canvas.height);

    // hacemos que el player y las plataformas se dibujen 
    // y se actualicen cada vez que se dibuja el canvas
    genericObjects.forEach((obj) => {
        obj.update(context);
    });
    platforms.forEach((platf) => {
        platf.update(context);
    });
    coins.forEach((coin) => {
        coin.update(context);
    });
    player.update(context);

    // poniendo algunos estilos
    context.fillStyle = '#704E22';
    context.font = "bold 30px Fira Sans";

    // instanciando el contador de monedas
    context.fillText(`x ${coinCounter}`, 110, 70);

    // código de colisión de plataforma
    platforms.forEach((platf) => {
        if (player.returnYPositionJump() <= platf.position.y 
        && player.returnYPositionJump() + player.velocity.y >= platf.position.y
        && player.returnXPositionJump() >= platf.position.x
        && player.position.x <= platf.position.x + platf.width
        ) {
            player.onPlatform = true;
            player.velocity.y = 0;
            // aquii
            playerOnPlatformY = player.returnYPositionJump();
        } else {
            player.onPlatform = false;
        }
    });

    // código de colisión con monedas
    coins.forEach((coin) => {
        if (player.returnYPositionJump() >= coin.position.y 
        && player.returnXPositionJump() >= coin.position.x
        && player.returnXPositionJump() <= (coin.position.x + 100) 
        && player.returnYPositionJump() <= (coin.position.y + 64)
        ) {
            coin.taken = true; 
        }
    });

    // donde se registra y se ejecuta el contador de monedas + POPUPS
    coinCounter = countingCoins(coins, infoSpanish, classesForPopups, positionPopups);

    // activando los movimientos del jugador
    // el jugador se mueve en el axis X 
    // cuando pase de los 600px entonces el parallax se activa y el jugador deja de moverse en el axis X
    if (keys.right.pressed && player.position.x <= maxMovementPlayerRight) {
        if (!player.winner) {
            playerMoved = true;
            player.moveRight();
        }
    } else if (keys.left.pressed && player.position.x > 100) {
        if (!player.winner) {
            player.moveLeft();
        }
    } else {
        player.stopMovement();

        // en realidad el PARALLAX funciona de manera tal que..
        // el personaje realmente no se mueve, pero los objetos alrededor sí
        // eso da la sensación de que el personaje se está movimiento pero la cámara lo sigue
        if (keys.right.pressed && !player.winner) {

            // movimientos de las plataformas:
            platforms.forEach((platf) => {
                platf.movetoLeft();
            });
            // movimientos de los objetos generales:
            genericObjects.forEach((gobj) => {
                if (gobj.type !== 'bush') {
                    gobj.movetoLeft(2);
                } else {
                    gobj.movetoLeft(6);
                }
            });
            // movimientos de las monedas
            coins.forEach((coin) => {
                if (coin.type == 'point') {
                    coin.movetoLeft(6);
                }
            });

        } else if (keys.left.pressed && !player.winner) {

            // movimientos de las plataformas:
            platforms.forEach((platf) => {
                platf.movetoRight();
            });
            // movimientos de los objetos generales:
            genericObjects.forEach((gobj) => {
                if (gobj.type !== 'bush') {
                    gobj.movetoRight(2);
                } else {
                    gobj.movetoRight(6);
                }
                
            });
            // movimientos de las monedas
            coins.forEach((coin) => {
                if (coin.type == 'point') {
                    coin.movetoRight(6);
                }
            });
        }

    }

    // escenario donde se gana:
    // si la posición X del jugador llega a la posición x de la última plataforma + 200 píxeles
    if (player.returnXPositionJump() >= (platforms[platforms.length -1].position.x + 200)) {
        player.winner = true;
    }

    // escenario donde se pierde:
    // el personaje cae por debajo del canvas (se cayó por un acantilado)
    if (player.position.y > canvas.height) {
        // se inicia todo nuevamente
        initEverything();

        if (playerMoved) {
            // popup para hacerle saber a la persona que es bien mala jugando XD
            Swal.fire({
                title: "Uy, te caíste..",
                html: "<p>Vas a tener que volver a comenzar. Pero si deseas volver a leer cierta información: recarga toda la página y volverá a aparecer.</p>",
                confirmButtonText: 'Está bien!',
                position: positionPopups,
                customClass: {
                    popup: 'first-message',
                    confirmButton: 'confirm-button',
                },
            });
        }

    }

}


initEverything();
animate();



/* -------------------------------------------------------------------------------------- */
/* EVENT LISTENERS AND SETTIMEOUT */

(function () {
    // le doy un retraso de 1 segundo para que aparezca el primer popup
    setTimeout(() => {
        Swal.fire({
            title: infoSpanish.firstInfo.title,
            text: infoSpanish.firstInfo.description,
            confirmButtonText: 'Genial!',
            position: positionPopups,
            customClass: {
                popup: 'welcome-popup',
                confirmButton: 'confirm-button',
              },
            showClass: classesForPopups.showClass,
            hideClass: classesForPopups.hideClass,
        })
    }, 1000);
})();

addEventListener('resize', () => {
    initEverything();
});


addEventListener('keydown', (event) => {
    switch(event.code) {
        case 'KeyA':
            keys.left.pressed = true;
            player.currentSprite = player.frames.stand.left;
            break;
        case 'ArrowLeft':
            keys.left.pressed = true;
            player.currentSprite = player.frames.stand.left;
            break;
        case 'KeyD':
            keys.right.pressed = true;
            player.currentSprite = player.frames.stand.right;
            break;
        case 'ArrowRight':
            keys.right.pressed = true;
            player.currentSprite = player.frames.stand.right;
            break;
        case 'Space':
            // para no saltar doble o infinito
            if (player.returnYPositionJump() >= playerOnPlatformY) {
                player.jump();
                player.isJumping = true;
            }
            break;
        case 'ArrowUp':
            // para no saltar doble o infinito
            if (player.returnYPositionJump() >= playerOnPlatformY) {
                player.jump();
                player.isJumping = true;
            }
            break;
    }
});

addEventListener('keyup', ({ code }) => {
    player.stopMovement();
    switch(code) {
        case 'KeyA':
            keys.left.pressed = false;
            break;
        case 'KeyD':
            keys.right.pressed = false;
            break;
        case 'ArrowRight':
            keys.right.pressed = false;
            break;
        case 'ArrowLeft':
            keys.left.pressed = false;
            break;
    }
});

/* EVENT LISTENERS DE BOTONES EN PANTALLA (PARA MOBILE) */

// BUTTONS
const buttonJump = document.getElementById("button-up");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");


// JUMP
buttonJump.addEventListener("touchstart", () => {
    if (player.returnYPositionJump() >= playerOnPlatformY) {
        player.jump();
        player.isJumping = true;
    }
});
buttonJump.addEventListener("touchend", () => {
    player.isJumping = false;
});

// LEFT 
buttonLeft.addEventListener("touchstart", () => {
    keys.left.pressed = true;
    player.currentSprite = player.frames.stand.left;
});
buttonLeft.addEventListener("touchend", () => {
    keys.left.pressed = false;
});

// RIGHT 
buttonRight.addEventListener("touchstart", () => {
    keys.right.pressed = true;
    player.currentSprite = player.frames.stand.right;
});
buttonRight.addEventListener("touchend", () => {
    keys.right.pressed = false;
});
