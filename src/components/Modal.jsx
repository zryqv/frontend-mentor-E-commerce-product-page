import Button from './Button';
import { ReactComponent as Trash } from '../images/icon-delete.svg';
function Modal({ className, cart, setCart, formatter, ...props }) {
  return (
    <div
      {...props}
      className={`rounded-xl shadow-2xl z-50 ${className} absolute bg-white`}
    >
      <div className='font-bold border-b-[1.5px] px-5 py-4'>Cart</div>
      {cart.length > 0 ? (
        <div className='py-6 px-5'>
          {cart.map((product) => (
            <div
              key={product.title}
              className='flex justify-between items-center  '
            >
              <img
                src={product.image}
                alt=''
                className='w-[3.3rem] h-[3.3rem] rounded-lg'
              />
              <div className=''>
                <div className='text-[#B6BCC8]'>{product.title}</div>
                <div>
                  <span className='text-[#B6BCC8]'>
                    {' '}
                    {formatter.format(product.price)} x {product.quantity}{' '}
                  </span>
                  <span className='ml-2 font-bold text-[#1D2025]'>
                    {' '}
                    {formatter.format(product.price * product.quantity)}
                  </span>
                </div>
              </div>
              <div className=''>
                <Trash
                  className='cursor-pointer'
                  onClick={() =>
                    setCart(cart.filter((item) => item.title !== product.title))
                  }
                />
              </div>
            </div>
          ))}
          <Button
            color='#FF7D1A'
            className={
              'text-white px-4 py-[1.1rem] mt-8 mb-2 w-full cursor-pointer hover:bg-opacity-50 text-sm font-bold  flex justify-center items-center'
            }
          >
            Checkout
          </Button>
        </div>
      ) : (
        <div className='justify-center items-center flex font-bold text-[#B6BCC8] h-[30vh]'>
          Your cart is empty
        </div>
      )}
    </div>
  );
}
export default Modal;
