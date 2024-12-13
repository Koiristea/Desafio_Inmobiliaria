const propiedades_venta_array = [
    {
        name: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        location: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: 4,
        bathrooms: 4,
        cost: 5000,
        smoke: false,
        pets: false
    },
    {
        name: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        location: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: 2,
        bathrooms: 1,
        cost: 1200,
        smoke: true,
        pets: true
    },
    {
        name: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        location: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: 3,
        bathrooms: 3,
        cost: 4500,
        smoke: false,
        pets: true
    },
    {
        name: 'Alto Polkura',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_667670-MLC74172455151_012024-F.webp',
        description: 'Alto Polkura es un proyecto pensado para disfrutar la vida al aire libre tanto dentro como fuera del proyecto.',
        location: 'Av. Jose Rabat 12610, Colina',
        rooms: 3,
        bathrooms: 3,
        cost: 4800,
        smoke: false,
        pets: false
    }
]

const propiedades_alquiler_array = [
    {
        name: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        description: 'Este apartamento de 2 rooms está ubicado en el corazón de la ciudad, cerca de todo.',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        bathrooms: 2,
        cost: 2000,
        smoke: false,
        pets: true
    },
    {
        name: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        location: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: 3,
        bathrooms: 3,
        cost: 2500,
        smoke: true,
        pets: true
    },
    {
        name: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        bathrooms: 2,
        cost: 2200,
        smoke: false,
        pets: false
    },
    {
        name: 'Departamento En Esmeralda',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_889783-MLC80656750123_112024-F.webp',
        description: 'El departamento cuenta con porcelanato en todo el departamento y ventanas termopanel sobre marcos pvc color blanco.',
        location: 'Esmeralda 7001, La Cisterna',
        rooms: 1,
        bathrooms: 1,
        cost: 3000,
        smoke: false,
        pets: true
    }
]

const propiedadesAlquiler = document.getElementById("propiedades_alquiler");
const propiedadesVenta = document.getElementById("propiedades_venta");
const propiedadesVentaMax = document.getElementById("propiedades_venta_max");
const propiedadesAlquilerMax = document.getElementById("propiedades_alquiler_max");

const fumar = (permitidoFumar) => {
  let htmlGenerado = ""
  if (permitidoFumar == true){
    htmlGenerado = `
    <p class="text-success">
      <i class="fas fa-smoking"></i> Permitido fumar
    </p>
    `
  } else {
    htmlGenerado = `
    <p class="text-danger">
      <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>
    `
  }
  return htmlGenerado
}
const perroFriendly = (permitidoPerro) => {
  let htmlGenerado = ""
  if (permitidoPerro == true){
    htmlGenerado = `
    <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
    `
  } else {
    htmlGenerado = `
    <p class="text-danger">
      <i class="fas fa-ban"></i> No se permiten mascotas
    </p>
    `
  }
  return htmlGenerado
}
const generarPropiedades = (propiedades) => {
    let htmlGenerado = "";
    propiedades.forEach(propiedad => {
        htmlGenerado += `
         <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.name}
                </h5>
                <p class="card-text">
                  ${propiedad.description}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedad.location}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.cost.toLocaleString('es-CL')} </p>
                ${fumar(propiedad.smoke)}
                ${perroFriendly(propiedad.pets)}
              </div>
            </div>
          </div>
        `
    });
    return htmlGenerado;
};
if (propiedadesAlquiler) {
    propiedadesAlquiler.innerHTML = generarPropiedades(propiedades_alquiler_array);
};
if (propiedadesVenta){
    propiedadesVenta.innerHTML = generarPropiedades(propiedades_venta_array);
};

const primerosTres = (array) => {
  return array.slice(0,3);
}

if (propiedadesAlquilerMax) {
  propiedadesAlquilerMax.innerHTML = generarPropiedades(primerosTres(propiedades_alquiler_array));
};
if (propiedadesVentaMax){
  propiedadesVentaMax.innerHTML = generarPropiedades(primerosTres(propiedades_venta_array));
};