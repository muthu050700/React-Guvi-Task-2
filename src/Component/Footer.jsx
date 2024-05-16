const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-15 bg-slate-400">
        <div className="flex gap-8 py-4 list-none">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact us</li>
          </a>
          <a href="#">
            <li>Service</li>
          </a>
        </div>
        <p>© Your Website 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
