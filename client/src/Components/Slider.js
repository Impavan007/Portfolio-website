import React, { useRef } from 'react';
import Card from './Card';

const products = [
  {
    id: 1,
    name: 'Bloging-website',
    href: '#',
    imageSrc: '/Assets/bloging2.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'full-stack bloging website using mernstack ',
  },
   {
    id: 2,
    name: 'Dreamloom-Ecom',
    href: '#',
    imageSrc: '/Assets/dreamloom-ecom.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Frontend Ecommerce using react,bootstrap,tailwind',
  },
  {
    id: 3,
    name: 'my dukan-Ecom',
    href: 'https://mern-backend-psi-ten.vercel.app/login',
    imageSrc: '/Assets/ecommerce1.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'full-stack E-commerce website using mernstack.',
  },
  {
    id: 4,
    name: 'News-Website',
    href: '#',
    imageSrc: '/Assets/Newsweb.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'News sharing Website Using html css javascript',
  },
  {
    id: 5,
    name: 'Flower-Seller',
    href: 'https://flowerseller.netlify.app/',
    imageSrc: '/Assets/FlowerSeller.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Landing page Using html css bootstrap',
  },
  {
    id: 6,
    name: 'Quotes machine',
    href: '#',
    imageSrc: '/Assets/random-quote.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'random quote generator using react',
  },
  {
    id: 6,
    name: 'Portfolio website',
    href: 'https://my-oldportfolio.netlify.app/',
    imageSrc: '/Assets/portfolio(html,css).png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Portfolio website using html css javascript',
  },
  {
    id: 7,
    name: 'Swiggy clone',
    href: 'https://food-delivery-swiggy-clone.netlify.app/',
    imageSrc: '/Assets/swiggy.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Online food delivering frontend',
  },
  {
    id: 8,
    name: 'Text To Image',
    href: 'https://ai-image-generator-gamma-ten.vercel.app/',
    imageSrc: '/Assets/Texttoimage.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Text To Image Generative Ai',
  },
  {
    id: 9,
    name: 'Video Streaming',
    href: '#',
    imageSrc: '/Assets/Yt-CLONE.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Video Streaming App ',
  },
 
]

const Slider = () => {
  const boxRef = useRef(null);

  const buttonPrev = () => {
    const box = boxRef.current;
    const width = box.clientWidth ; // Adjusted width for 4 cards
    box.scrollLeft -= width;
  };

  const buttonNext = () => {
    const box = boxRef.current;
    const width = box.clientWidth ; // Adjusted width for 4 cards
    box.scrollLeft += width;
  };

  return (
    <div className='product-carousel' style={{ position: "relative", padding: "26px", overflow: "hidden" }}>
      <button onClick={buttonPrev} style={{ border: "none", width: "60px", height: "100%", backgroundColor: "rgba(0,0,0,0)", zIndex: "1000", position: "absolute", top: "0", display: "flex", justifyContent: "center", alignItems: "center", left: "0" }}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.436)", color: "white", width: "50px", cursor: "pointer", fontSize: "50px", boxShadow: "0px 0px 10px 1px black", borderRadius: "10px" }}>&lt;</p>
      </button>
      <button onClick={buttonNext} style={{ border: "none", width: "60px", height: "100%", backgroundColor: "rgba(0,0,0,0)", zIndex: "1000", right: "0", position: "absolute", top: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.436)", color: "white", fontSize: "50px", width: "50px", cursor: "pointer", boxShadow: "0px 0px 10px 1px black", borderRadius: "10px" }}>&gt;</p>
      </button>
      <div className='product-container' ref={boxRef} style={{ padding: "0 20px", gap: "1vw", display: "flex", overflowX: "hidden", scrollBehavior: "smooth", width: "calc(100% - 10px)" }}>
     {
      products.map((product)=>(
        
        <Card  product={product}/>
      ))
     }
        
        
      </div>
    </div>
  );
};

export default Slider;
