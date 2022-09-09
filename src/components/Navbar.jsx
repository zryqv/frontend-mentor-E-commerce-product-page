import logo from '../images/logo.svg';
import { ReactComponent as Cart } from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
const Menu = ['Collections', 'Men', 'Women', 'About', 'Contact'];
function Navbar({ quantity, setShowCart }) {
  return (
    <div className='w-screen px-24'>
      <div className='flex justify-between items-start border-b-[1px]  border-[#B6BCC8] w-full h-[7.3rem]'>
        <div className='flex justify-start items-center'>
          <div className='pr-9'>
            <img src={logo} alt='' />
          </div>
          <ul className='flex justify-evenly items-center '>
            {Menu.map((item) => (
              <li key={item} className='px-4'>
                <button className='py-11   border-b-4 border-white hover:border-[#FF7D1A]'>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-start items-center  h-[7.3rem]'>
          <div className='px-9  py-11 '>
            <button
              className='relative'
              onMouseEnter={() => {
                setShowCart(true);
              }}
              onMouseLeave={() =>
                setTimeout(() => {
                  setShowCart(false);
                }, 500)
              }
            >
              <Cart fill='#69707D' />
              {quantity > 0 && (
                <div className='absolute rounded-full bg-[#FF7D1A] -top-[0.3rem] -right-[0.49rem]  px-2 text-white font-bold text-[0.5rem]'>
                  {quantity}
                </div>
              )}
            </button>
          </div>
          <div className=' py-11 w-11 '>
            <button>
              <img
                src={avatar}
                alt=''
                className='cursor-pointer border-2 rounded-full border-white hover:border-[#FF7D1A] '
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
