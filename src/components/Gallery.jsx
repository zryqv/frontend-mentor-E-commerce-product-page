function Gallery({
  images,
  setShowGalleryModal,
  featuredImage,
  setFeaturedImage,
}) {
  return (
    <div className="lg:w-[25vw] md:w-[45vw]">
      <div className="w-full ">
        <img
          onClick={() => setShowGalleryModal(true)}
          src={images[featuredImage].src}
          alt=""
          className="w-full rounded-xl cursor-pointer"
        />
      </div>
      <div className="flex justify-between items-start w-full py-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`md:w-[24%]  overflow-hidden rounded-lg cursor-pointer ${
              images[featuredImage].src === image.src &&
              "border-[1.5px] border-[#FF7D1A]"
            }`}
          >
            <img
              onClick={() => setFeaturedImage(index)}
              className={`hover:opacity-60 w-full h-full cursor-pointer ${
                images[featuredImage].src === image.src &&
                "rounded-lg opacity-50 "
              }`}
              src={image.src}
            />
          </div>
          //   <img
          //     onClick={() => setFeaturedImage(image.src)}
          //     key={image.id}
          //     src={image.src}
          //     alt=''
          //   className={`w-20 h-20 rounded-lg cursor-pointer ${
          //     featuredImage === image.src &&
          //     'border-[1.5px] border-[#FF7D1A] bg-opacity-70 '
          //   }`}
          //   />
        ))}
      </div>
    </div>
  );
}
export default Gallery;
