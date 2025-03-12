import starImg from '../../assets/img/icon-star-48.png'
import githubLogo from '../../assets/img/icon-github-50.png'
import linkedinLogo from '../../assets/img/icon-linkedin-50.png'
import CVLogo from '../../assets/img/icon-cv-50.png'

export const infoSpanish = {
    firstInfo: {
     shown: false,
     title: "Bienvenido/a!",
     description: `Te invito a mi portafolio virtual. Usa las flechas de tu teclado para moverte. Aún está en fase de prueba pero espero que lo disfrutes!.  
     Si deseas leer mi información debes recoger todas las monedas del escenario.
     Buena suerte. No te caigas por el precipicio!`,
    },
    secondInfo: {
      shown: false,
      title: "Sobre mí",
      description: `<p>Me llamo Ibelitze, soy una fullstack developer con más de 9 años de experiencia, me considero la loca de javascript jajaja (o así me gusta llamarme). Soy una gran apasionada de ese lenguaje, pero la vida me ha llevado por el camino de aprender también PHP y otras tecnologías. </p>
        <p>Como fullstack tengo la capacidad de trabajar tanto el Frontend como el Backend, lo cual me hace un profesional bastante completo y eso me permite tener conocimiento amplio de muchos sistemas y tecnologías. Mi código es limpio y ordenado. Siempre dispuesta a aprender cosas nuevas, adaptarme a cualquier entorno laboral y a dar lo mejor de mí.</p>
        <p>Me considero semi-senior aunque aún estoy en proceso de aprender cosas nuevas. En éste portafolio te enseño una de mis más grandes pasiones: los videojuegos!. Porque si no estoy programando, estoy jugando… o aprendiendo cómo se hacen los videojuegos!.</p>
        <p>Sigue agarrando más monedas para que puedas leer más sobre mí <3 </p>
        `,
    },
    thirdInfo: {
        shown: false,
        title: "Lenguajes que manejo",
        description: `<strong class="strong-title">Uy! Se viene lo bueno! </strong>
            <p>Pues de <strong>Javascript</strong> manejo cosillas como: javascript vanilla, Jquery, Typescript, ReactJS, VueJS, NextJS, Ionic + React, Redux, y NodeJS. </p>
            <p>De <strong>PHP</strong> manejo: PHP vanilla, Codeigniter, Laravel y Symphony </p>
            <p>Para <strong>CSS</strong> te tengo: CSS vanilla, Bootstrap, Talwind, SCSS y un Flexbox bien salvaje <3 </p>
        `,
    },
    fourthInfo: {
        shown: false,
        title: "Otras tecnologías importantes",
        description: `
            <p>He trabajado constantemente con: GIT, Webpack, NPM, AWS, Google cloud services, REST, JSON, ZOD, APIs en general de todo tipo, Wordpress, Perfex CRM, Salesforce CRM, Brevo CRM, Dynamics 365 CRM, CI/CD, entre otros. </p>
            <p>Manejo de <strong>bases de datos:</strong> Firebase, MongoDB, MYSQL, SQL en general. </p>
            <p>Para <strong>testing</strong> casi siempre uso Jest.</p>
            <p>Para <strong>metodología de trabajo</strong> he manejado: Kanban y Scrum.</p>
            <p>Estoy segura que hay más cositas, pero espacio es lo que no hay… si tienes dudas: me preguntas :D </p>
        `,
    },
    fifthInfo: {
        shwon: false,
        title: "Felicidades! Has ganado el juego",
        description: `<div class="box-stars">
            <img class="golden-star" src="${starImg}" alt="estrella dorada de premio" />
            <img class="golden-star" src="${starImg}" alt="estrella dorada de premio" />
            <img class="golden-star" src="${starImg}" alt="estrella dorada de premio" />
        </div>
        <strong>Si llegaste hasta aquí es porque te interesa mi perfil! :D </strong>
        <p>Ahora comparto contigo todos mis canales de comunicación, mi CV y mi Linkedin. Gracias por disfrutar mi portafolio, es un placer para mí compartirlo.</p>
        <p>( en mi github puedes conseguir el código base :O )</p>
        <p>Tlf: (+51) 981 413 994</p>
        <p>Correo: ibelitzeportafolio@gmail.com</p>
        <div class="box-icons">
            <a target="_blank" href="https://github.com/ibelitze"><img class="icon github" alt="icono de Github" src="${githubLogo}" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/ibelitze-zambrano-fullstack/"><img class="icon linkedin" alt="icono de Linkedin" src="${linkedinLogo}" /></a>
            <a target="_blank" href="https://drive.google.com/drive/folders/1ttVzv5Zr0ZdTEijabmXyw12mhA-lW07v?usp=sharing"><img class="icon linkedin" alt="icono de Linkedin" src="${CVLogo}" /></a>
        </div>`,
    },
 };


export const infoEnglish = {
    firstInfo: {
        title: "Bienvenido/a!",
        description: `Te invito a mi portafolio`,
    },
    secondInfo: {},
    thirdInfo: {},
    fourthInfo: {},
};

export const classesForPopups = {
    showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
    hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
    }
};