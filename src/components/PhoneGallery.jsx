import { ReactComponent as Next } from "../images/icon-next.svg";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
function PhoneGallery({
  images,
  setShowGalleryModal,
  featuredImage,
  setFeaturedImage,
}) {
  return (
    <>
      <div className="w-screen relative ">
        <div
          onClick={() => setFeaturedImage((((featuredImage + 1) % 4) + 4) % 4)}
          className="absolute top-0 bottom-0 my-auto right-3 rounded-full bg-white cursor-pointer w-10 h-10 flex items-center justify-center px-1"
        >
          <Next className="" />
        </div>
        <div
          onClick={() => setFeaturedImage((((featuredImage - 1) % 4) + 4) % 4)}
          className="absolute top-0 bottom-0 my-auto  left-3 rounded-full bg-white cursor-pointer w-10 h-10 flex items-center justify-center px-1"
        >
          <Previous className="" />
        </div>
        <img
          src={images[featuredImage].src}
          alt=""
          className="w-full cursor-pointer"
          onClick={() => setShowGalleryModal(true)}
        />
      </div>
    </>
  );
}
export default PhoneGallery;
