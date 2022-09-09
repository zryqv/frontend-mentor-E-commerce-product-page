import Button from "./components/Button";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import GalleryModal from "./components/GalleryModal";
import imageProduct1 from "./images/image-product-1.jpg";
import imageProduct2 from "./images/image-product-2.jpg";
import imageProduct3 from "./images/image-product-3.jpg";
import imageProduct4 from "./images/image-product-4.jpg";
import { ReactComponent as Minus } from "./images/icon-minus.svg";
import { ReactComponent as Plus } from "./images/icon-plus.svg";
import { ReactComponent as Cart } from "./images/icon-cart.svg";
import { useState } from "react";
import PhoneGallery from "./components/PhoneGallery";
import HamMenu from "./components/HamMenu";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const product = {
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  images: [
    { id: 1, src: imageProduct1 },
    { id: 2, src: imageProduct2 },
    { id: 3, src: imageProduct3 },
    { id: 4, src: imageProduct4 },
  ],
  price: 250,
  promotion: 0.5,
  category: "Sneaker Company",
};

function App() {
  const [quantity, setQuantity] = useState(0);
  const [checkedQuantity, setCheckedQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [featuredImage, setFeaturedImage] = useState(0);
  const [showHamMenu, setShowHamMenu] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  return (
    <>
      {showGalleryModal && (
        <GalleryModal
          featuredImage={featuredImage}
          setFeaturedImage={setFeaturedImage}
          images={product.images}
          setShowGalleryModal={setShowGalleryModal}
        />
      )}
      {showHamMenu && <HamMenu setShowHamMenu={setShowHamMenu} />}
      <div className="max-w-screen min-h-screen bg-white text-[1rem] relative">
        {(showCartModal || showCart) && (
          <div className="flex justify-center items-center md:block">
            <Modal
              setCheckedQuantity={setCheckedQuantity}
              checkedQuantity={checkedQuantity}
              onMouseEnter={() => {
                setShowCartModal(true);
              }}
              onMouseLeave={() =>
                setTimeout(() => {
                  setShowCartModal(false);
                }, 200)
              }
              className="w-[95%] sm:w-[90%] md:w-[42%] lg:w-[33%] xl:w-[25%] md:right-[6rem] top-[6rem]  "
              cart={cart}
              setCart={setCart}
              formatter={formatter}
            />
          </div>
        )}
        <Navbar
          setShowHamMenu={setShowHamMenu}
          quantity={checkedQuantity}
          setShowCart={setShowCart}
          showCart={showCart}
        />

        <main className="px-24 flex flex-col md:flex-row  justify-center items-center w-full  min-h-[calc(100vh-5rem)] md:h-[calc(100vh-7.3rem)] ">
          <div className="w-[40vw] md:flex justify-center hidden">
            <Gallery
              setFeaturedImage={setFeaturedImage}
              featuredImage={featuredImage}
              images={product.images}
              setShowGalleryModal={setShowGalleryModal}
            />
          </div>
          <div className="md:hidden mb-6">
            <PhoneGallery
              setFeaturedImage={setFeaturedImage}
              featuredImage={featuredImage}
              images={product.images}
              setShowGalleryModal={setShowGalleryModal}
            />
          </div>
          <section className=" md:w-[40vw] sm:w-[80vw] w-screen px-6 md:px-16 ">
            <div className="uppercase  text-[#FF7D1A] text-xs font-bold">
              {product.category}
            </div>
            <div className="text-4xl font-bold text-[#1D2025] pt-4 pb-8">
              {product.title}
            </div>
            <div className="text-[#B6BCC8] text-sm  ">
              {product.description}
            </div>
            {product.promotion ? (
              <div className="py-7 flex justify-between items-center md:block">
                <div className="flex justify-start items-center ">
                  <div className="text-3xl font-bold">
                    {formatter.format(product.price * product.promotion)}
                  </div>
                  <div className="ml-4 rounded-md bg-[#FFEDE0] font-bold text-[#FF7D1A] text-xs px-2 py-1">
                    {product.promotion * 100}%
                  </div>
                </div>
                <div className="line-through text-[#B6BCC8] text-sm">
                  {formatter.format(product.price)}
                </div>
              </div>
            ) : (
              <div className="text-3xl font-bold py-7 pb-11">
                {formatter.format(product.price)}
              </div>
            )}
            <div className="flex justify-start items-center md:flex-row flex-col  ">
              <Button className="flex justify-around items-center md:w-36 w-full font-bold text-sm md:mr-4 my-2">
                <Minus
                  className="cursor-pointer "
                  onClick={() => {
                    if (quantity > 0) setQuantity(quantity - 1);
                  }}
                />
                {quantity}
                <Plus
                  className="cursor-pointer hover:bg-opacity-50 "
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                />
              </Button>
              <Button
                color="#FF7D1A"
                className={
                  "text-white px-4 cursor-pointer hover:bg-opacity-50 text-sm font-bold md:w-56 w-full my-4 flex justify-center items-center"
                }
                letBeShadows={true}
                onClick={() => {
                  let found = false;
                  setCart(
                    cart.map((item) => {
                      if (item.title === product.title) {
                        found = true;
                        setCheckedQuantity(
                          checkedQuantity - item.quantity + quantity
                        );
                        return {
                          ...item,
                          quantity: quantity,
                        };
                      } else return item;
                    })
                  );
                  if (found === false) {
                    setCheckedQuantity(checkedQuantity + quantity);
                    setCart(
                      cart.concat({
                        title: product.title,
                        quantity: quantity,
                        image: product.images[0].src,
                        price: product.promotion
                          ? product.price * product.promotion
                          : product.price,
                      })
                    );
                  }
                }}
              >
                <Cart className="mr-2 " fill="white" /> Add to cart
              </Button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
