import { createImage } from "../utils";
import {Platform} from '../classes/platform'
import {GenericObject} from '../classes/genericObject'
import {Coin} from '../classes/coins'

import platformSmall from '../../assets/img/platform-small.png'
import platformMedium from '../../assets/img/platform-medium.png'
import platformLarge from '../../assets/img/platform-large.png'
import floor from '../../assets/img/base-floor.png'
import background1 from '../../assets/img/background-1.png'
import clouds from '../../assets/img/clouds.png'
import bush1 from '../../assets/img/bush-1.png'
import bush2 from '../../assets/img/bush-3.png'
import coin from '../../assets/img/coin-64x64.png'

let platfsmall = createImage(platformSmall);
let platfmLarge = createImage(platformLarge);
let platfrmMedium = createImage(platformMedium);
let backgroundHills = createImage(background1);
let cloudss = createImage(clouds);
let bushh1 = createImage(bush1);
let bushh2 = createImage(bush2);
let baseFloor = createImage(floor);
let coinn = createImage(coin);

// INFORMACIÓN EXTRA:
// he tenido que poner manualmente los números de los axis X y Y
// si ponía referencias (ej: plataforma.width * 2 + 200px)
// el primer renderizado quedaba chueco y no se acomodaba bien del todo.
// no puedo depender de que el usuario haga reload de toda la página.

// PLATAFORMAS Y SUELOS
export function desktopPlatforms() {
    let temp = [
        new Platform({x: -5, y: 470, image: baseFloor}),
        new Platform({x: 1851, y: 470, image: baseFloor}),
        new Platform({x: 3902, y: 470, image: baseFloor}),
        new Platform({x: 800, y: 300, image: platfsmall}),
        new Platform({x: 3522, y: 300, image: platfrmMedium}),
        new Platform({x: 4803, y: 270, image: platfmLarge}),
        new Platform({x: 5660, y: 310, image: platfmLarge}),
    ];
    return temp;
}

export function mobilePlatforms() {
    let temp = [
        new Platform({x: -5, y: 380, image: baseFloor}),
        new Platform({x: 1851, y: 380, image: baseFloor}),
        new Platform({x: 3902, y: 380, image: baseFloor}),
        new Platform({x: 800, y: 220, image: platfsmall}),
        new Platform({x: 3522, y: 220, image: platfrmMedium}),
        new Platform({x: 4803, y: 190, image: platfmLarge}),
        new Platform({x: 5660, y: 190, image: platfmLarge}),
    ];
    return temp;
}

// GENERIC OBJECTS, ARBUSTOS, MONTAÑAS, NUBES, ETC.
export function desktopGenericObjects() {
    let temp = [
        new GenericObject({x: 70, y: 100, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 758, y: 100, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 1446, y: 80, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 2134, y: 130, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 2822, y: 80, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 0, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 549, y: 200, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 978, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 1567, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 2106, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 2665, y: 320, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 300, y: 435, image: bushh1, type: 'bush'}),
        new GenericObject({x: 369, y: 435, image: bushh1, type: 'bush'}),
        new GenericObject({x: 1150, y: 437, image: bushh2, type: 'bush'}),
        new GenericObject({x: 1248, y: 437, image: bushh1, type: 'bush'}),
        new GenericObject({x: 1967, y: 437, image: bushh1, type: 'bush'}),
        new GenericObject({x: 2267, y: 437, image: bushh1, type: 'bush'}),
        new GenericObject({x: 2945, y: 437, image: bushh1, type: 'bush'}),
        new GenericObject({x: 2995, y: 437, image: bushh2, type: 'bush'}),
        new GenericObject({x: 3545, y: 270, image: bushh2, type: 'bush'}),
        new GenericObject({x: 4123, y: 437, image: bushh2, type: 'bush'}),
        new GenericObject({x: 4712, y: 437, image: bushh2, type: 'bush'}),
        new GenericObject({x: 4762, y: 437, image: bushh1, type: 'bush'}),
        new GenericObject({x: 5890, y: 290, image: bushh2, type: 'bush'}),
    ];
    return temp;
}

export function mobileGenericObjects() {
    let temp = [
        new GenericObject({x: 70, y: 100, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 758, y: 100, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 1446, y: 80, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 2134, y: 130, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 2822, y: 80, image: cloudss, type: 'clouds'}),
        new GenericObject({x: 0, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 549, y: 200, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 978, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 1567, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 2106, y: 300, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 2665, y: 320, image: backgroundHills, type: 'hills'}),
        new GenericObject({x: 300, y: 350, image: bushh1, type: 'bush'}),
        new GenericObject({x: 369, y: 350, image: bushh1, type: 'bush'}),
        new GenericObject({x: 1150, y: 350, image: bushh2, type: 'bush'}),
        new GenericObject({x: 1248, y: 350, image: bushh1, type: 'bush'}),
        new GenericObject({x: 1967, y: 350, image: bushh1, type: 'bush'}),
        new GenericObject({x: 2267, y: 350, image: bushh1, type: 'bush'}),
        new GenericObject({x: 2945, y: 350, image: bushh1, type: 'bush'}),
        new GenericObject({x: 2995, y: 350, image: bushh2, type: 'bush'}),
        new GenericObject({x: 3545, y: 195, image: bushh2, type: 'bush'}),
        new GenericObject({x: 4123, y: 350, image: bushh2, type: 'bush'}),
        new GenericObject({x: 4712, y: 350, image: bushh2, type: 'bush'}),
        new GenericObject({x: 4762, y: 350, image: bushh1, type: 'bush'}),
        new GenericObject({x: 5890, y: 157, image: bushh2, type: 'bush'}),
    ];
    return temp;
}

export function deskMovCoins(type) {
    let coinLow;
    let coinHigh;
    let coinOverJump;
    if (type === "desktop") {
        coinHigh = 150;
        coinLow = 240;
        coinOverJump = 240;
    } else {
        coinHigh = 100;
        coinLow = 220;
        coinOverJump = 170;
    }


    let temp = [
        new Coin({x: 30, y: 30, image: coinn, type: 'counter'}),
        new Coin({x: 560, y: coinLow, image: coinn, type: 'point'}),
        new Coin({x: 840, y: coinHigh, image: coinn, type: 'point'}),
        new Coin({x: 1120, y: coinLow, image: coinn, type: 'point'}),
        new Coin({x: 1700, y: coinOverJump, image: coinn, type: 'point'}),
        new Coin({x: 2100, y: coinLow, image: coinn, type: 'point'}),
        new Coin({x: 2700, y: coinLow, image: coinn, type: 'point'}),
        new Coin({x: 3530, y: coinHigh, image: coinn, type: 'point'}),
        new Coin({x: 3650, y: coinHigh, image: coinn, type: 'point'}),
        new Coin({x: 4000, y: coinLow, image: coinn, type: 'point'}),
        new Coin({x: 4300, y: coinLow, image: coinn, type: 'point'}),
        new Coin({x: 4800, y: coinHigh, image: coinn, type: 'point'}),
        new Coin({x: 5080, y: coinHigh, image: coinn, type: 'point'}),
        new Coin({x: 5760, y: coinHigh, image: coinn, type: 'point'}),
    ];
    return temp;
}