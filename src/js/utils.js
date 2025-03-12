import Swal from 'sweetalert2'

export function createImage(source) {
  const image = new Image();
  image.src = source;
  return image;
}

// también me quedan rico los espaguettis... XD
export function countingCoins(coins, info, classesForPopups, positionPopups) {

  let counter = 0;
  coins.forEach(coin => {
    if (coin.taken) {
      counter++;
    }
  });

  if (counter === 3 && !info.secondInfo.shown) {
    info.secondInfo.shown = true;
    Swal.fire({
        title: info.secondInfo.title,
        html: info.secondInfo.description,
        confirmButtonText: 'Sigamos !',
        position: positionPopups,
        customClass: {
          popup: 'first-message',
          confirmButton: 'confirm-button',
        },
        showClass: classesForPopups.showClass,
        hideClass: classesForPopups.hideClass,
      });
  } else if (counter === 6 && !info.thirdInfo.shown) {
    info.thirdInfo.shown = true;
    Swal.fire({
      title: info.thirdInfo.title,
      html: info.thirdInfo.description,
      confirmButtonText: 'Sigamos !',
      position: positionPopups,
      customClass: {
        popup: 'first-message',
        confirmButton: 'confirm-button',
      },
      showClass: classesForPopups.showClass,
      hideClass: classesForPopups.hideClass,
    });
  } else if (counter === 9 && !info.fourthInfo.shown) {
    info.fourthInfo.shown = true;
    Swal.fire({
      title: info.fourthInfo.title,
      html: info.fourthInfo.description,
      confirmButtonText: 'Sigamos !',
      position: positionPopups,
      customClass: {
        popup: 'first-message',
        confirmButton: 'confirm-button',
      },
      showClass: classesForPopups.showClass,
      hideClass: classesForPopups.hideClass,
    });
  } else if (counter === 13 && !info.fifthInfo.shown) {
    info.fifthInfo.shown = true;
    Swal.fire({
      title: info.fifthInfo.title,
      html: info.fifthInfo.description,
      confirmButtonText: 'Gracias !',
      position: positionPopups,
      customClass: {
        popup: 'first-message',
        confirmButton: 'confirm-button',
      },
      showClass: classesForPopups.showClass,
      hideClass: classesForPopups.hideClass,
    });
  }

  return counter;
}