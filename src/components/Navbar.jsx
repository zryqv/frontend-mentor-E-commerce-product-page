import logo from "../images/logo.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";

import avatar from "../images/image-avatar.png";
const Menu = ["Collections", "Men", "Women", "About", "Contact"];
function Navbar({ quantity, setShowCart, showCart, setShowHamMenu }) {
  return (
    <div className="max-w-screen px-4 sm:px-9 md:px-24 z-50  bg-white  ">
      <div className="flex justify-between md:items-start items-center md:border-b-[1px]  border-[#B6BCC8] w-full md:h-[7.3rem] h-20 pb-1 md:pb-0   ">
        <div className="flex justify-start items-center ">
          <div className="lg:pr-9 md:pr-0 md:-mt-2 flex justify-center items-center ">
            <MenuIcon
              className="mr-3 mt-1 md:hidden cursor-pointer"
              onClick={() => setShowHamMenu(true)}
            />
            <img src={logo} alt="" />
          </div>
          <ul className="hidden md:flex justify-evenly items-center   ">
            {Menu.map((item) => (
              <li key={item} className="lg:px-4 md:px-1">
                <button className="py-11   border-b-4 border-white hover:border-[#FF7D1A]">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-start items-center  md:h-[7.3rem]">
          <div className="md:px-9  md:py-11 pr-2">
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative"
              onMouseEnter={() => {
                setShowCart(true);
              }}
              onMouseLeave={() =>
                setTimeout(() => {
                  setShowCart(false);
                }, 500)
              }
            >
              <Cart fill="#69707D" />
              {quantity > 0 && (
                <div className="absolute rounded-full bg-[#FF7D1A] -top-[0.3rem] -right-[0.49rem]  px-2 text-white font-bold text-[0.5rem]">
                  {quantity}
                </div>
              )}
            </button>
          </div>
          <div className=" md:py-11 sm:w-11 w-7 ">
            <button>
              <img
                src={avatar}
                alt=""
                className="cursor-pointer border-2 rounded-full border-white hover:border-[#FF7D1A] "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
