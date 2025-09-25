import logo from "/icon.svg";

const Navbar = () => (
  <header className="sticky top-0 flex items-center justify-between py-6 md:py-10 border-b border-gray-200 px-4 bg-white">
    <img src={logo} alt="Lansweeper Logo" className="h-10 w-auto" />
    <button className="hidden md:block bg-[#ff8a00] text-white px-6 py-2 text-sm md:text-base font-bold rounded">
      FREE TRIAL
    </button>
  </header>
);

export default Navbar;
