import { Button } from './ui/button';

const Nav = () => {
  return (
    <div className="absolute text-3xl text-white w-full z-50 pt-10">
      <nav className="flex items-center justify-between container px-4 sm:px-10 md:px-0 mx-auto">
        <div className="flex items-center gap-4">
          <div className="size-12 bg-white rounded-lg" />
          <p className="uppercase">Suergy</p>
        </div>

        <ul className="md:flex hidden lg:text-base md:text-xs uppercase gap-x-4">
          <li>Home</li>
          <li>green energy</li>
          <li>case study</li>
          <li>resources</li>
        </ul>

        <Button
          variant="outline"
          size="lg"
          className="text-black rounded-full px-4"
        >
          Become a Partner
        </Button>
      </nav>
    </div>
  );
};

export default Nav;
