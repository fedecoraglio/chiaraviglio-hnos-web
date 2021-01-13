import { Injectable } from "@angular/core";

@Injectable()
export class ServicesProductsService {

  servicesData = [
    {
      id: 1,
      title: "Acopio de Cereales",
      subTitle: "Logística, compraventa y almacenamiento de granos",
      description: "",
      imageUrl: "/assets/home_19.jpeg",
      imageUrlPortada: "/assets/home_19.jpeg",
    },
    {
      id: 2,
      title: "Asesoramiento Técnico",
      subTitle: "Nos especializamos y sumamos experiencia para poder brindarle una mejor información a la hora de tomar decisiones",
      description: "",
      imageUrl: "/assets/home_20.jpeg",
      imageUrlPortada: "/assets/home_20.jpeg",
    },
    {
      id: 3,
      title: "Venta de Agroquimicos",
      subTitle: "Semillas, fertilizantes líquidos y sólidos, agroquimicos, terapicos de semillas, bolsas para silo",
      description: "",
      imageUrl: "/assets/venta_agroquimicos.jpg",
      imageUrlPortada: "/assets/venta_agroquimicos.jpg",
    },
    {
      id: 4,
      title: "Servicio de pulverizacion terrestre",
      subTitle: "Contamos con una pulverizadora terrestre autopropulsada equipada para realizar dosificación variable de agroquimicos y fertilizantes",
      description: "",
      imageUrl: "/assets/pulverizadora_terrestre_9.jpeg",
      imageUrlPortada: "/assets/pulverizadora_terrestre_9.jpeg",
    },
    {
      id: 5,
      title: "Agricultura de Precisión",
      subTitle: "Experiencia y respaldo para implementar con éxito, más información para la toma de decisiones",
      description: "",
      imageUrl: "/assets/presicion.jpg",
      imageUrlPortada: "/assets/presicion.jpg",
    },
    {
      id: 6,
      title: "Fertilizadora Neumática",
      subTitle: "Contamos con una fertilizadora neumática con kit de dosificación Altina para realizar dosificación variable de todo tipo de fertilizantes sólidos, como así también realizar siembra de cultivos de cobertura y pasturas",
      description: "",
      imageUrl: "/assets/fertilizadora.jpeg",
      imageUrlPortada: "/assets/fertilizadora_1.jpeg",
    }
  ];

  productsData = [
    {
      id: 1,
      title: "Yara Fertilizantes",
      description: `Empresa líder en fertilizantes en Argentina y el mundo. Produciendo Responsablemente 
                    para alimentar al mundo y proteger el planeta.`,
      imageUrl: "https://i.ytimg.com/vi/CFWzsbBSzu0/maxresdefault.jpg",
      url: "https://www.yara.com.ar/"
    },
    {
      id: 2,
      title: "Red Surcos",
      description: `Es una empresa argentina constituida en su totalidad por capitales nacionales y 
                    cuenta con un equipo de más de 250 personas capacitadas para construir día a día los más altos 
                    niveles de innovación, desarrollo, producción y comercialización de insumos para el agro.`,
      imageUrl: "https://www.mercosur.com/media/filer_public_thumbnails/filer_public/89/3a/893a30a4-4073-48d7-bc8d-23d47ee51c40/2013-red-surcos-para-web.jpg__374x305_q85_subsampling-2_upscale.jpg",
      url: "https://redsurcos.com/"
    },
    {
      id: 3,
      title: "GeoAgro by TEK",
      description: `Es una empresa de tecnologías para el agro, que acompaña y facilita la adopción de nuevas 
                    herramientas de gestión de la información y agricultura de precisión.`,                    
      imageUrl: "/assets/geoagro.jpg",
      url: "http://site.geoagro.com/es"
    },
    {
      id: 4,
      title: "Minerales del Recreo S.A",
      description: `La primera vigente hasta hoy en dedicarse a la extracción y producción de minerales de 
                    calidad para su utilización como correctores de suelos y fertilizantes al servicio del agro`,
      imageUrl: "http://mineralesdelrecreo.com/images/banner-2.jpg",
      url: "http://mineralesdelrecreo.com/productos.html"
    },
    {
      id: 5,
      title: "Amauta",
      description: `Es el título que los Quechuas le daban a los maestros, a los sabios, a aquellas personas que 
                    se dedicaban a la educación y formación de los otros.Nosotros buscamos formar e impulsar
                    entre los productores una nueva forma de agricultura que piensa tanto en el futuro como en 
                    los resultados inmediatos. Calidad + tecnología. Es la esencia de nuestros productos. 
                    Ponemos a tu alcance los mejores productos del mercado a nivel mundial, desarrollados 
                    con las últimas tecnologías disponibles.`,
      imageUrl: "https://s3.amazonaws.com/static.agrofy.com/media/catalog/agroshop/amauta-agrofy-01.jpg",
      url: "http://www.amauta.ag/"
    },
    {
      id: 6,
      title: "BASF",
      description: `En BASF, creamos química para un futuro sustentable. Combinamos el éxito económico con la protección 
                    ambiental y la responsabilidad social. Los cerca de 112.000 empleados del Grupo BASF contribuyen 
                    con el éxito de nuestros clientes en la mayoría de las industrias y en casi todos los países del mundo.`,
      //imageUrl: "http://logok.org/wp-content/uploads/2014/09/BASF-Logo_bw-1024x768.png",
      imageUrl: "http://1.bp.blogspot.com/-6uWPmXPbOdw/Vaa2HBeZopI/AAAAAAABaaQ/Hik6y1Rni84/s1600/basf%2B4.jpg",
      url: "https://www.basf.com/ar/es.html"
    }
  ]
}