export interface Ad {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

const ALL_ADS: Ad[] = [
  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png",
    title: "Curso Profesional de JavaScript",
    body:
      "Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables.",
    url: "https://platzi.com/cursos/javascript-profesional/"
  },
  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png",
    title: "Curso de Frontend Developer",
    body:
      "Domina las bases de HTML y CSS. Define la arquitectura de tu código y construye un sitio web usando componentes estáticos. ",
    url: "https://platzi.com/cursos/frontend-developer/"
  }
];

class Ads {
  private static instance: Ads;
  private ads: Ad[];

  private constructor() {
    this.initAds();
  }

  static getInstance() {
    if (!Ads.instance) {
      Ads.instance = new Ads();
    }

    return Ads.instance;
  }

  private initAds() {
    this.ads = [...ALL_ADS];
  }

  getAd() {
    if (this.ads.length === 0) {
      this.initAds();
    }
    return this.ads.pop();
  }
}

export default Ads;
