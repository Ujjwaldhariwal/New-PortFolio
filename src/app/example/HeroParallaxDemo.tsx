import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Trek-Tales India 1",
    link: "https://trek-tales-india.vercel.app/",
    thumbnail: {
      src: "https://i.ibb.co/w6CLKSj/trektales.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "JuiceWala",
    link: "https://juicewala.netlify.app/",
    thumbnail: {
      src: "https://i.ibb.co/c6nk6gH/juicewala.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "Trek-Tales India 2",
    link: "https://trek-tales-india.vercel.app/",
    thumbnail: {
      src: "https://i.ibb.co/LtbKZcP/trektales3.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "Tezi-Se-Delivery 1",
    link: "https://tezi-se-dilevery.netlify.app/",
    thumbnail: {
      src: "https://i.ibb.co/J3tbmV7/tezise2.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "Ticket counter",
    link: "https://metroticket-counter.netlify.app/",
    thumbnail: {
      src: "https://i.ibb.co/j5P6LxP/ticket.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "Tezi-Se-Delivery 2",
    link: "https://tezi-se-dilevery.netlify.app/",
    thumbnail: {
      src: "https://i.ibb.co/P6v50pW/tezise3.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "Tezi-Se-Delivery 3",
    link: "https://tezi-se-dilevery.netlify.app/",
    thumbnail: {
      src: "https://i.ibb.co/B3tV8b2/tezise1.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "Trek-Tales India 3",
    link: "https://trek-tales-india.vercel.app/",
    thumbnail: {
      src: "https://i.ibb.co/C0pWJ0m/trektales2.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
  {
    title: "Tic tac toe",
    link: "https://kaanta-jero.netlify.app",
    thumbnail: {
      src: "https://i.ibb.co/NLQ8S1r/tictac.png",
      sizes: "(max-width: 640px) 100vw, (max-width: 768px) 70vw, 100vw",
    },
  },
];
