import hisense1 from './images/hisense1.png';
import hisense2 from './images/hisense2.png';
import macbook1 from './images/macbook1.png';
import macbook2 from './images/macbook2.png';
import smash from './images/smash.png';
import switchimg from './images/switch.png';
import reloj from './images/reloj.png';
import headphone from './images/audifonos.png';
import { Product } from './type';

export const dbProducts: Product[] = [
  {
    id: 1,
    img: macbook1,
    title:
      'Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial',
    prices: {
      new: '25,000',
      old: '25,999',
    },
    rating: 5,
    description:
      'La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más...',
    category: 'Laptop',
  },
  {
    id: 2,
    img: hisense1,
    title: 'Hisense 4k Uhd A6gv Tv 65 Pulgadas (65a6gv 2021)',
    prices: {
      new: '13,599',
      old: '18,499',
    },
    rating: 4,
    description:
      'Disfruta tus videojuegos al máximo gracias al HDMI versión 2.1 y a su Game Mode, que te aseguran la mejor experiencia de juego con las versiones más recientes de consolas y las tecnologías más avanza...',
    category: 'Televisor',
  },
  {
    id: 3,
    img: macbook2,
    title:
      'Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial',
    prices: {
      new: '25,000',
      old: '25,999',
    },
    rating: 5,
    description:
      'La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más...',
    category: 'Laptop',
  },
  {
    id: 4,
    img: hisense2,
    title: 'Smart TV Hisense A6G Series 43A6G 4K 43 120V',
    prices: {
      new: '7,299',
      old: '8,299',
    },
    rating: 2,
    description:
      'Hisense es la marca n.%1 de Televisores en China y la 3.ª en electrodomésticos en el mundo. Fue reconocida con diferentes premios por sus altos estándares en innovación, tecnología, diseño.',
    category: 'Televisor',
  },
  {
    id: 5,
    img: smash,
    title: 'Super Smash Bros Ultimate Standard Edition Nintendo Switch Físico',
    prices: {
      new: '1,052',
      old: '1,200',
    },
    rating: 1,
    description:
      'Este videojuego de acción y pelea combina diversos personajes de distintas sagas de Nintendo y otras editoriales, con más de 100 escenarios disponibles, 74 luchadores y más de 800 temas...',
    category: 'VideoGame',
  },
  {
    id: 6,
    img: switchimg,
    title: 'Nintendo Switch 32GB Standard color rojo neón, azul neón y negro',
    prices: {
      new: '7,193',
      old: '8,200',
    },
    rating: 3,
    description:
      'Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodida...',
    category: 'VideoGame',
  },
];

export const relojProduct: Product = {
  id: 7,
  img: reloj,
  title: 'Apple Watch',
  prices: {
    new: '3,000',
    old: '6,000',
  },
  rating: 4,
  description: 'The best Reloj of Apple',
  category: 'Reloj',
};

export const headphoneProduct: Product = {
  id: 8,
  img: headphone,
  title: 'Logitech Headphone',
  prices: {
    new: '1,500',
    old: '3,000',
  },
  rating: 3,
  description: 'The best Headphone of Logitech',
  category: 'Headphone',
};
