import AboutFeatures from "./AboutFeatures";

const About = () => {
  const aboutObj = [
    {
      id: 1,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQWx4ob9Z8BTXMe07OpEQMYJeUusLEyfSCe_R2078-cihXqpmkH",
      title: "Fully Responsive",
      description:
        "This theme will look great on any device, no matter the size!",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qOyAOVXDTMo5P_GGWyXGYytRs2zPEKgpZ-9yf2_y6SHrdgIX",
      title: "Bootstrap 5 Ready",
      description:
        "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5_NHH1CoDDMbbvJnetb8ziGI5e6QgfkOMcioFrKTvn0kSq6hy",
      title: "Easy to Use",
      description:
        "Ready to use with your own content, or customize the source files!",
    },
  ];
  return (
    <div className="flex flex-col justify-evenly bg-[#DFD0B8] py-10 lg:flex-row">
      {aboutObj.map((value, index) => {
        return <AboutFeatures value={value} key={value.id} delayVariable="1" />;
      })}
    </div>
  );
};

export default About;
