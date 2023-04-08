import React from "react";
import Product360 from "/src/assets/images/product/product360.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProductCarousel({ product }) {
  const { images } = product;

  const imagesSrc = [
    {
      original: images[0],
      thumbnail: images[0],
    },
    {
      original: images[1],
      thumbnail: images[1],
    },
    {
      original: images[2],
      thumbnail: images[2],
    },
    {
      original: images[3],
      thumbnail: images[3],
    },
    {
      original: images[4],
      thumbnail: images[4],
    },
  ];

  return (
    <div className="product-carousel">
      <img src={Product360} alt="" className="product-carousel__360" />
      <ImageGallery items={imagesSrc} lazyLoad={true} showPlayButton={false} />
    </div>
  );
}

export default ProductCarousel;
