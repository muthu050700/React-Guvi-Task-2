const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-15 bg-stone-400  py-4">
        <div className="flex gap-8 py-4 list-none text-stone-600 font-medium">
          <a href="#" className="hover:tracking-wider hover:transition-all">
            <li>Home</li>
          </a>
          <a href="#" className="hover:tracking-wider hover:transition-all">
            <li>About</li>
          </a>
          <a href="#" className="hover:tracking-wider hover:transition-all">
            <li>Contact us</li>
          </a>
          <a href="#" className="hover:tracking-wider hover:transition-all">
            <li>Service</li>
          </a>
        </div>
        <p className="text-stone-600 font-medium">
          © Your Website 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
