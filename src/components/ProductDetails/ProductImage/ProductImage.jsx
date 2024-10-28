import React from 'react';
import Slider from 'react-slick';

const ProductImage = ({ mainImage, settingsThumbs, productImages, setMainImage }) => {
      return (
            <div className="col-xl-6">
                  <div className="product-details__left">
                        <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                              <div className="">
                                    <div className="product-details__thumb flex-center h-100">
                                          <img src={mainImage} alt="Main Product" />
                                    </div>
                              </div>
                        </div>
                        <div className="mt-24">
                              <div className="product-details__images-slider">
                                    <Slider {...settingsThumbs}>
                                          {productImages.map((image, index) => (
                                                <div className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index} onClick={() => setMainImage(image)}>
                                                      <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                </div>
                                          ))}
                                    </Slider>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductImage;