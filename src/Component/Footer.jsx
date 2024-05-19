const Footer = () => {
  return (
    <div className="bg-[#153448]">
      <div className="custom-shape-divider-top-1716053322">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#948979]"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center h-15 bg[#153448] py-4">
        <div className="flex gap-8 py-4 list-none text-[#DFD0B8] font-medium">
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
        <p className="text-[#DFD0B8] font-medium  ">
          © Your Website 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
