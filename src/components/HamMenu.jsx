const Menu = ["Collections", "Men", "Women", "About", "Contact"];

function HamMenu({ setShowHamMenu, ...props }) {
  return (
    <div
      className="w-screen h-screen bg-black bg-opacity-80  z-40 fixed justify-start items-start flex"
      onClick={() => setShowHamMenu(false)}
    >
      <div
        className="bg-white h-screen w-[60%] px-8 py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cursor-pointer" onClick={() => setShowHamMenu(false)}>
          <svg width="22" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#68707D"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <ul className="flex flex-col justify-evenly items-start py-8">
          {Menu.map((item) => (
            <li key={item} className="lg:px-4 md:px-1">
              <button className="py-2   border-b-4 border-white hover:border-[#FF7D1A] font-bold leading-6 text-[#1D2025]">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default HamMenu;
