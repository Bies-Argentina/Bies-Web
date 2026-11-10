export const site = {
  name: "Bies",
  tagline: "moda y producto terminado",
  location: "Buenos Aires, Argentina",
  email: "hola.agenciabies@gmail.com",
  instagram: "https://instagram.com/agencia.bies",
  instagramHandle: "@agencia.bies",
  whatsappNumber: "5491178134553",
  phoneDisplay: "+54 9 11 7813-4553",
  whatsappMessage:
    "Hola Bies, me gustaría contarles sobre un proyecto de producto que tengo en mente.",
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappHref = whatsappLink();

export const web3forms = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "9510ba11-4f4b-47d9-be4d-355cbccff9d4",
} as const;

export const navLinks = [
  { label: "La agencia", href: "#agencia" },
  { label: "Servicios", href: "#servicios" },
  { label: "El proceso", href: "#proceso" },
] as const;

export const heroImage = "/images/hero-coleccion.jpg";
export const agencyImage = "/images/fichas-tecnicas.jpg";
export const detailImage = "/images/detalles-materiales.jpg";
