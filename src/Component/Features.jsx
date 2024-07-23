import GettingFeatures from "./GettingFeatures";

const Features = () => {
  const data = [
    {
      id: "1",
      alignContent: "left",
      image:
        "https://media.idownloadblog.com/wp-content/uploads/2021/04/iPhone-7-Plus-dual-lense-rear-camera-led-flash.jpg",
      title: "Fully Responsive Design",
      description:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      id: "2",
      alignContent: "right",
      image:
        "https://blogs.infosupport.com/wp-content/uploads/2017/03/5ntkpxqt54y-sai-kiran-anagani_1540x800_acf_cropped.jpg",
      title: "Fully Responsive Design",
      description:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      id: "3",
      alignContent: "left",
      image:
        "https://severalnines.com/wp-content/uploads/2022/05/9b56be7286eb1a91f94bd8dbd4aa17bd-1-480x360.jpg",
      title: "Fully Responsive Design",
      description:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
  ];

  return (
    <div>
      {data.map((value) => {
        return <GettingFeatures key={value.id} value={value} delayValue="1" />;
      })}
    </div>
  );
};
export default Features;
