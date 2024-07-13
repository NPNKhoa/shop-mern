import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    pauseOnHover: true,
    swipe: true,
  };

  return (
    <Slider
      {...settings}
      className='w-full overflow-hidden'>
      <div className='w-full h-auto'>
        <img
          className='w-full h-auto'
          src={'/images/slide1.jpg'}
          alt='slider-img'></img>
      </div>
      <div className='w-full h-auto'>
        <img
          className='w-full h-auto'
          src={'/images/slide2.jpg'}
          alt='slider-img'></img>
      </div>
      <div className='w-full h-auto'>
        <img
          className='w-full h-auto'
          src={'/images/slide3.jpg'}
          alt='slider-img'></img>
      </div>
    </Slider>
  );
};

export default Carousel;
