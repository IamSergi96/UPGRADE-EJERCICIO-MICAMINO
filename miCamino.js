const miCamino = {
  inicio: "dar el primer paso.",
  objetivo:
    "recorrer los 14 ochomiles y llegar hasta la cima del mundo: el Everest.",
  material: [
    {
      nombre: "Piolets",
      descripcion:
        "un instrumento usado en alpinismo para asegurarse en el hielo o la nieve; consiste en una especie de pico de metal con el extremo del mango afilado.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del piolet",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del piolet",
          },
        },
      ],
    },
    {
      nombre: "Crampones",
      descripcion:
        "una pieza de metal con púas que se sujeta a la suela de la bota para escalar o caminar sobre el hielo o la nieve.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de los crampones",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de los crampones",
          },
        },
      ],
    },
    {
      nombre: "Cuerdas",
      descripcion:
        "un objeto delgado, muy alargado y flexible, hecho de hilos o fibras torcidos o entrelazados, que se usa generalmente para atar o sujetar cosas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la cuerda",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la cuerda",
          },
        },
      ],
    },
    {
      nombre: "Mochila",
      descripcion:
        "una bolsa para transportar provisiones en excursiones, viajes u otro tipo de desplazamientos, que está confeccionada con tela resistente y a menudo impermeable y se lleva colgada a la espalda por medio de correas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la mochila",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la mochila",
          },
        },
      ],
    },
  ],
  cimas: [
    {
      nombre: "K2",
      altitud: 8.611,
      localizacion: "China/Pakistan",
    },
    {
      nombre: "Kangchenjunga",
      altitud: 8.586,
      localizacion: "India/Nepal",
    },
    {
      nombre: "Lhotse",
      altitud: 8.516,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Makalu",
      altitud: 8.463,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Cho Oyu",
      altitud: 8.201,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Dhaulagiri",
      altitud: 8.167,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Manaslu",
      altitud: 8.163,
      localizacion: "Nepal",
    },
    {
      nombre: "Nanga Parbat",
      altitud: 8.125,
      localizacion: "Pakistan",
    },
    {
      nombre: "Annapurna",
      altitud: 8.091,
      localizacion: "Nepal",
    },
    {
      nombre: "Gasherbrum I",
      altitud: 8.068,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Broad Peak",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Gasherbrum II",
      altitud: 8.035,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Shisha Pangma",
      altitud: 8.027,
      localizacion: "Tibet",
    },
    {
      nombre: "Everest",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
  ],
  subiendoAlEverest: [
    [
      {
        campoBase: [
          {
            campoI: {
              campoII: {
                campoIII: {
                  campoIV: [
                    "Tranquilo",
                    "lo",
                    "peor",
                    "ha",
                    "pasado",
                    8.846,
                    "ya.",
                    "¡Animo!",
                    {
                      cima: "¡Enhorabuena!, probablemente no seas el primero en llegar hasta aquí, pero estas con la programación, no con el alpinismo.",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// Ejercicio

//Habiendo visto como acceder a las propiedades de los distintos objetos,como podemos recorrer arrays y ir buceando en ellos, es el momento de ponernos a prueba.

//Pasos a seguir para llegar a la cima

//vamos a imaginarnos que vamos a narrar la historia de como subi los 14 ochomiles y esta historia solo puede ser contada a traves de console.log, es decir,

// primer paso: vamos a empezar nuestro camino de la mejor manera y esa no puede ser de otra manera que dando el primer paso, por tanto vamos a decir: Lo mas importante es {inicio}

console.log(`Lo mas importante es ${miCamino.inicio}`);

//2º: vamos a decir : El objetivo de mi camino es : {objetivo}
console.log(`El objetivo de mi camino es: ${miCamino.objetivo}`);
//3º: en este paso ya empezaremos a toquetear con bucles y le vamos a decir: lo primero que debo llevar es {nombre del primer material} y es { su descripcion}
// lo segundo que debo  llevar es {nombre del segundo material} y es { su descripcion}
// lo tercero que debo  llevar es {nombre del tercer material} y es { su descripcion}
// y por ultimo debo llevar la {mochila} que es {su descripcion}
const materiales = miCamino.material;
for(let i=0; i<materiales.length;i++){
  let material = materiales[i];
  let nombreMaterial = material.nombre;
  let descripcionMaterial = material.descripcion;
  console.log(`${i===0 ? "Lo primero que" : i===1 ? "Lo segundo que" : i===2 ? "Lo tercero que" : "Y por último"} debo llevar es ${nombreMaterial} y es ${descripcionMaterial}`);
}

//4º: vamos a decir: para subir al {nombre de la cima}  debo subir {altura } metros y debo viajar a {ubicacion}
const cimas = miCamino.cimas;
for(let i=0; i<cimas.length; i++){
  let cima = cimas[i];
  let nombreCima = cima.nombre;
  let alturaCima = cima.altitud;
  let ubiCima = cima.localizacion;
  console.log(`Para subir al ${nombreCima} debo subir ${alturaCima} metros y debo viajar a ${ubiCima}`);
}
//5º: para llegar a la cima tendremos que darnos aliento y decirnos la frase que esta divida y que tiene que quedar así: "Tranquilo,lo peor ha pasado ya.¡Animo!
const llegarALaCima = miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV;
//subiendoAlEverest y campoBase son arrays, mientras que el resto de campos son objetos aninados
const preFrase= []; //voy a crear una frase vacia que sera el conjunto de cadenas
for(let item of llegarALaCima.slice(0,-1)){ //excluyo el ultimo elemento "cima" ya que no debe salir en el mensaje
  if(typeof item === "string"){ //pusheo todo los elementos (items) de llegarALaCima.slice(0,-1) que sean tipo string, para excluir el numero 8846.
    preFrase.push(item);
  }
}
const fraseCompleta=preFrase.join(" ");//unir las cadenas con espacios, podria haver puesto directamente por console.log la prefrase con join pero me parecia mejor guardarlo en una nueva variable
console.log(fraseCompleta);

//6º: mostraremos el mensaje final guardado en la cima
//utilizo la constante antes creada llegarALaCima
const textoCima =[]; //creo un textoCima para incorporar los string de cima
for(const item of llegarALaCima){//itero llegarALaCima
if(typeof item === "object" && "cima" in item){ //la condicion es que sea un objeto y tenga la propiedad "cima"
  textoCima.push(item.cima); //los pusheo en el array textoCima
}
}
console.log(textoCima.join(" ")); 
//los junto directamente en el console.log, podria haver creado una variable antes como:
//var textoCimaFinal = textoCima.join(" "); como hice en el punto 4.
//por ultimo como bonus,en un console.log mostraremos por pantalla las urls de todas las imagenes de los materiales y en otro haremos la media de la altitud de todas la cimas que hemos subido.
miCamino.material.forEach((material)=>{
  material.imagenes.forEach((imagen)=>{
    const imagenObjeto = imagen[Object.keys(imagen)]; //nos da un array con los nombres claves (propiedades) delo objeto (imagen), los cuales son imagen1 e imagen2
    const imagenUrl = imagenObjeto.url;
    console.log(imagenUrl);
  });
});
//altitud cimas
const altitudesCimas =[]; 
miCamino.cimas.forEach((cima)=>{
  altitudesCimas.push(cima.altitud);
});
//ahora usare la funcion .reduce para sumar las cimas y luego las divido por el numero de cimas que hay con el lenght de altitudesCimas
const sumaAltitudes = altitudesCimas.reduce((acc, altitud)=> acc + altitud, 0);
const mediaAltitudes = sumaAltitudes/altitudesCimas.length;
console.log(mediaAltitudes);
//me imprime: 8.338928571428571, creo que es posible que detete el punto como una coma para decimales?
