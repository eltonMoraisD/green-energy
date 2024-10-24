import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 pb-10">
      <div className="flex flex-col md:flex-row justify-between mt-10">
        <p className="capitalize text-gray-400 text-sm">
          &#169;{new Date().getFullYear()} SUERGY.ALL RIGHTS RESERVED
        </p>
        <h2 className="uppercase font-semibold text-lg">SUERGY</h2>
        <p className="uppercase text-sm">Privacy policy</p>
      </div>
      <div className="flex flex-col xl:flex-row  font-bold justify-between py-10">
        <h1 className="text-6xl xl:text-9xl">@{new Date().getFullYear()}</h1>
        <p className="flex w-full xl:mx-6 py-2 xl:py-0 border-b-[3px] border-b-black xl:border-b-[10px] items-center justify-center -translate-y-[10%] lg:-translate-y-[40%]" />
        <h1 className="uppercase text-6xl xl:text-9xl">Suergy</h1>
      </div>
      <div className="grid md:grid-cols-[2.5fr_1fr_1fr_1fr] gap-4">
        <ul className="flex flex-col lg:flex-row lg:text-base md:text-xs uppercase gap-x-4 gap-y-2 ">
          <li>Home</li>
          <li>green energy</li>
          <li>case study</li>
          <li>resources</li>
        </ul>
        <div className="md:space-y-1 flex flex-col place-items-end md:place-items-start">
          <h2 className="pb-1 md:pb-5 text-gray-400 uppercase">Contacts</h2>
          <p>+1234 567 890</p>
          <p>info@gmail.com</p>
        </div>
        <div className="md:space-y-1 flex flex-col place-items-end sm:place-items-start">
          <h2 className="pb-1 md:pb-5 text-gray-400 uppercase">Follow us</h2>
          <Link className="uppercase block" href={'#'}>
            instagram
          </Link>
          <Link className="uppercase block" href={'#'}>
            facebook
          </Link>
          <Link className="uppercase block" href={'#'}>
            linkedin
          </Link>
        </div>
        <div className="md:space-y-1 flex flex-col place-items-end md:place-items-start">
          <h2 className="pb-1 md:pb-5 text-gray-400 uppercase">adress</h2>
          <p>37 green lane</p>
          <p className="uppercase">eco city, rs 1234</p>
          <p className="capitalize">united states</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
