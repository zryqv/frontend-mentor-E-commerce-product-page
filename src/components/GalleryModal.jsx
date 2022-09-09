import { useState } from 'react';
import { ReactComponent as Close } from '../images/icon-close.svg';
import { ReactComponent as Next } from '../images/icon-next.svg';
import { ReactComponent as Previous } from '../images/icon-previous.svg';
function GalleryModal({
  images,
  setShowGalleryModal,
  featuredImage,
  setFeaturedImage,
}) {
  return (
    <div
      className='w-screen h-screen bg-black bg-opacity-80  z-40 fixed justify-center items-center flex'
      onClick={() => setShowGalleryModal(false)}
    >
      <div className='' onClick={(e) => e.stopPropagation()}>
        <div
          className='w-[34vw] flex justify-end items-center py-4 cursor-pointer'
          onClick={() => setShowGalleryModal(false)}
        >
          <Close />
        </div>
        <div className='w-[34vw] relative'>
          <div
            onClick={() =>
              setFeaturedImage((((featuredImage + 1) % 4) + 4) % 4)
            }
            className='absolute top-0 bottom-0 my-auto -right-7 rounded-full bg-white cursor-pointer w-14 h-14 flex items-center justify-center px-1'
          >
            <Next className='' />
          </div>
          <div
            onClick={() =>
              setFeaturedImage((((featuredImage - 1) % 4) + 4) % 4)
            }
            className='absolute top-0 bottom-0 my-auto  -left-7 rounded-full bg-white cursor-pointer w-14 h-14 flex items-center justify-center px-1'
          >
            <Previous className='' />
          </div>
          <img
            src={images[featuredImage].src}
            alt=''
            className='w-full rounded-xl'
          />
          {/* <div className='absolute top-1/2 bottom-1/2 -left-7 rounded-full bg-white cursor-pointer w-14 h-14 flex items-center justify-center'>
            <Previous className='' />
          </div> */}
        </div>
        <div className='flex justify-evenly items-center w-[34vw] py-4'>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`bg-white w-[18%] h-[18%] overflow-hidden rounded-lg cursor-pointer ${
                images[featuredImage].src === image.src &&
                'border-[1.5px] border-[#FF7D1A]'
              }`}
            >
              <img
                onClick={() => setFeaturedImage(index)}
                className={`hover:opacity-60 cursor-pointer ${
                  images[featuredImage].src === image.src &&
                  'rounded-lg opacity-50 '
                }`}
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default GalleryModal;
