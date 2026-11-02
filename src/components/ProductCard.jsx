
import React from 'react';
import { Plus } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return <article className="product-card reveal">
    <div className="product-image-wrap">
      <img src={product.image} alt={product.name} loading="lazy" onError={(e) => { e.currentTarget.src = "https://static.vecteezy.com/system/resources/thumbnails/071/461/052/small/assorted-indian-sweets-platter-gulab-jamun-barfi-rasgulla-and-more-free-photo.jpg"; }} />
      <span className="product-badge">{product.badge}</span>
      <button className="quick-add" aria-label={`Add ${product.name} to cart`} onClick={() => onAdd(product)}><Plus size={20} /></button>
    </div>
    <div className="product-info">
      <span className="product-category">{product.category}</span>
      <h3>{product.name}</h3>
      <div className="product-bottom"><span className="price">₹{product.price} <del>₹{product.oldPrice}</del></span><span className="unit">{product.unit}</span></div>
      <button className="add-button" onClick={() => onAdd(product)}>Add to bag <span>↗</span></button>
    </div>
  </article>;
}