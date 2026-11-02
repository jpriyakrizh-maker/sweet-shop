import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles, Leaf, Heart, PackageCheck, Star, MapPin, Clock3, Phone, Flame } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Footer from "./components/Footer.jsx";
import { products, gifts } from "./data/products.js";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(element, { y: 34, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true }
        });
      });
      gsap.fromTo(".hero-copy > *", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .12, ease: "power3.out", delay: .12 });
      
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2300);
    return () => clearTimeout(timer);
  }, [toast]);

  function addToCart(product) {
    setCart(current => {
      const found = current.find(item => item.id === product.id);
      return found ? current.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) : [...current, { ...product, qty: 1 }];
    });
    setToast(`${product.name} added to your bag`);
  }
  function changeQty(id, amount) {
    setCart(current => current.map(item => item.id === id ? { ...item, qty: item.qty + amount } : item).filter(item => item.qty > 0));
  }
  function removeItem(id) { setCart(current => current.filter(item => item.id !== id)); }

  return <div className="site-shell">
    <div className="announcement"><span>✦</span> THE FESTIVE SEASON IS HERE <span className="announcement-divider">/</span> LITTLE TREATS, BIG CELEBRATIONS <span>✦</span></div>
    <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="hero-kicker"><Flame size={15}/> A DIWALI TO REMEMBER</div>
          <h1>Bring home<br/>the <em>sweetness</em><br/>of tradition.</h1>
          <p>Little boxes of joy, timeless recipes, and the kind of sweetness that brings everyone together.</p>
          <div className="hero-actions"><a className="button button-gold" href="#sweets">Explore our sweets <ArrowRight size={17}/></a><a className="text-link light-link" href="#story">Our story <ArrowUpRight size={16}/></a></div>
          <div className="hero-note"><span><strong>Made for sharing</strong><small>Traditional flavours. Festive hearts.</small></span></div>
        </div>
        <div className="hero-art">
          
          <div className="hero-photo-frame"><img src="https://static.vecteezy.com/system/resources/thumbnails/071/461/052/small/assorted-indian-sweets-platter-gulab-jamun-barfi-rasgulla-and-more-free-photo.jpg" alt="A festive selection of traditional Indian sweets" onError={e => { e.currentTarget.src = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1300&q=90"; }}/></div>
          
          
          
        </div>
        
        
      </section>

      <section className="promise-strip" id="promise">
        <div><span className="promise-icon"><Leaf/></span><span><strong>Made with care</strong><small>Thoughtful ingredients</small></span></div>
        <div><span className="promise-icon"><Heart/></span><span><strong>Rooted in tradition</strong><small>Recipes to remember</small></span></div>
        <div><span className="promise-icon"><PackageCheck/></span><span><strong>Ready for gifting</strong><small>Beautiful festive boxes</small></span></div>
        <div><span className="promise-icon"><Sparkles/></span><span><strong>Made for moments</strong><small>Sweeten every gathering</small></span></div>
      </section>

      <section className="section sweets-section" id="sweets">
        <SectionHeading eyebrow="A LITTLE SOMETHING SPECIAL" title={<>Our festive <em>favourites</em></>} description="The classics you know, the flavours you love — made for sharing with your favourite people."/>
        <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product} onAdd={addToCart}/>)}</div>
        <div className="center-action"><a className="button button-outline" href="#gifts">Discover gift boxes <ArrowRight size={16}/></a></div>
      </section>

      <section className="offer-section" id="offers">
        
        
        <div className="offer-content reveal"><span className="eyebrow eyebrow-gold">A LITTLE FESTIVE EXTRA</span><h2>More joy.<br/><em>More mithai.</em></h2><p>Make room for one more sweet memory. Explore our festive selection and find something lovely for every celebration.</p><a className="button button-gold" href="#gifts">Explore festive gifting <ArrowRight size={17}/></a><small>*Offers and availability to be confirmed by the shop.</small></div>
        <div className="offer-art reveal"><img src="https://sangamsweets.in/cdn/shop/files/DivyaSmay.png?v=1759923132" alt="Festive gift hamper" loading="eager"/><div className="offer-seal"><span>✦</span><strong>MADE<br/>TO SHARE</strong><span>✦</span></div></div>
      </section>

      <section className="section story-section" id="story">
        <div className="story-image reveal"><img src="https://cdn.dotpe.in/longtail/themes/9482189/oxvDsCS0.webp" alt="Indian sweets prepared for a celebration" loading="lazy"/><div className="story-image-label"><span>✺</span><span>TRADITION IN EVERY BITE</span></div></div>
        <div className="story-copy reveal"><span className="eyebrow"><i/> A SWEET LITTLE STORY <i/></span><h2>Some things are<br/>too good <em>to change.</em></h2><p>Festivals are made of little things — the first diya glowing at dusk, familiar voices around the table, and a box of sweets opened before anyone can wait.</p><p>At Gowmari, we celebrate those moments with the timeless joy of Indian sweets and the warmth of sharing something special.</p><div className="story-signature"><span className="signature-flower">✺</span><span><strong>Sweetness, with a little soul.</strong><small>For every celebration, big or small.</small></span></div><a className="text-link" href="#visit">Come meet us <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="gifts-section" id="gifts">
        <div className="section gifts-inner"><SectionHeading eyebrow="WRAPPED WITH WARMTH" title={<>Gifts that say <em>so much.</em></>} description="A thoughtful little box can turn a visit into a memory. Pick a festive favourite for the people who make life sweeter."/>
          <div className="gift-grid">{gifts.map(gift => <article className="gift-card reveal" key={gift.number}><div className="gift-image"><img src={gift.image} alt={gift.title} loading="lazy"/><span>{gift.number}</span></div><div className="gift-details"><div><h3>{gift.title}</h3><p>{gift.detail}</p></div><strong>{gift.price}</strong></div><a href="#visit" className="gift-link">Enquire about this box <ArrowUpRight size={15}/></a></article>)}</div>
        </div>
      </section>

      <section className="quote-section">
        <span className="eyebrow eyebrow-gold">A THOUGHT FOR THE FESTIVE TABLE</span><blockquote>“The sweetest moments are the ones <em>we share.</em>”</blockquote><div className="quote-stars"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div><p>Good sweets. Good company. A little more light.</p>
      </section>

      <section className="visit-section section" id="visit">
        <div className="visit-copy reveal"><span className="eyebrow"><i/> COME SAY HELLO <i/></span><h2>Find your way<br/>to <em>something sweet.</em></h2><p>Planning your festive shopping? Visit us in Palani Chettipatti, Theni, and ask the shop about current Diwali sweets and gift boxes.</p><div className="visit-detail"><span><MapPin/></span><div><strong>Our location</strong><p>Palani Chettipatti, Theni,<br/>Tamil Nadu 625531, India</p></div></div><div className="visit-detail"><span><Clock3/></span><div><strong>Shop timings</strong><p>Please confirm opening hours before visiting.</p></div></div><div className="visit-detail"><span><Phone/></span><div><strong>Call the shop</strong><p>Phone number to be confirmed.</p></div></div><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Palani+Chettipatti+Theni+Tamil+Nadu" target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={16}/></a></div>
        <div className="map-card reveal"><div className="map-pin"><MapPin size={30}/></div><div className="map-card-copy"><span>COME FIND US</span><h3>Palani Chettipatti</h3><p>Theni · Tamil Nadu</p><a href="https://www.google.com/maps/search/?api=1&query=Palani+Chettipatti+Theni+Tamil+Nadu" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15}/></a></div></div>
      </section>
    </main>
    <Footer/>
    <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onChangeQty={changeQty} onRemove={removeItem}/>
    {toast && <div className="toast"><span>✓</span>{toast}<button onClick={() => setCartOpen(true)}>View bag</button></div>}
  </div>;
}