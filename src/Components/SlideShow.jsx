// SlideShow.jsx

// import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css'; // Import the CSS file

const SlideShow = () => {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
  };

  const slideImages = [
    {
      url: 'https://t4.ftcdn.net/jpg/02/37/22/81/360_F_237228143_EtDBwCK6eTnRWyRUraxXGvCHrhlSQYnV.jpg',
    },
    {
      url: 'https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/Grocery-Hero-1392x464.jpg?rev=e9e1996b83ef4241be6b0d0c095e20db&sc_lang=en-IN&w=1392&hash=FB26914DC7411A3D3A37C82040CDBA02',
    },
    {
      url: 'https://sugermint.com/wp-content/uploads/2022/06/Best-Health-Drink-for-Kids.jpg',
    },
    {
      url: 'https://st.depositphotos.com/1063437/2337/i/600/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpg',
    },
  ];

  return (
    <div className="slide-container">
      <Slide
        images={slideImages.map((slideImage) => ({ url: slideImage.url }))}
        prevArrow={<div className="prev-arrow">&#10094;</div>}
        nextArrow={<div className="next-arrow">&#10095;</div>}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})`, height: 500 }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
