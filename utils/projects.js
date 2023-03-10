import miTurnoWeb from "../public/img/miturnoweb.png";
import tmdb from "../public/img/tmdb.png";
import librando from "../public/img/librando.png";
import netSecurity from "../public/img/netsecurity.png";

export const actualProject = {
  title: "Mi turno web (on going)",
  description:
    "Web application that allows for scheduling appointments for businesses with physical branches, enabling the management of the number of customers at the location. Each branch can differentiate the number of customers that can be served simultaneously and the time slots, from the administrator/operator user. Each appointment will be for 15 minutes and can be canceled up to 2 hours in advance. These bookings must be visible to the business on a graphical dashboard. Additionally, obtain metrics based on the bookings made",
  stack: "Javascript | MongoDB | Express | Mongoose | NodeJS | NextJS | CSS",
  link: "https://github.com/carmelis/Mi-Turno-Web",
  image: miTurnoWeb,
};

export const projects = [
  {
    title: "Net Security",
    description:
      "Application for security management. Web app for admins to manage CRUD operations. React Native app for employees to clock in/out with geolocation.",
    stack:
      "Javascript | PostgreSQL | Express | Sequelize | NodeJs | React | Redux | Bootstrap | SaSS | CSS | Nominatim | Open Street Map",
    link: "https://github.com/afcarrillo/net-security",
    image: netSecurity,
  },
  {
    title: "E-commerce",
    description:
      "On-line store with functionalities as shopping cart, products search and display, and filters by category. User registration in order to add products to cart and checkout.",
    stack:
      "Javascript | PostgreSQL | Express | Sequelize | NodeJs | React | Redux | Bootstrap | CSS | Handlebars",
    link: "https://github.com/afcarrillo/Librando-FRONT",
    image: librando,
  },
  {
    title: "TMDB",
    description:
      "Web application that displays information and rating for movies and TV shows. It has a search engine and allow users to register so they can add their favorites to their profile. Consumes official The Movie Database API.",
    stack:
      "Javascript | PostgreSQL | Express | Sequelize | NodeJs | React | Redux | Bulma",
    link: "https://github.com/afcarrillo/TMDB",
    image: tmdb,
  },
];
