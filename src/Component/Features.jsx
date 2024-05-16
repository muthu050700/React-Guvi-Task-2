import GettingFeatures from "./GettingFeatures";

const Features = () => {
  const data = [
    {
      alignContent: "left",
      image:
        "https://media.licdn.com/dms/image/C5612AQHQF_6wU9LBxQ/article-cover_image-shrink_720_1280/0/1554067320339?e=1721260800&v=beta&t=khgSK3Sa-m7QXqk201PCgF0azn1upb_uLWJLqGmZSSQ",
      title: "Fully Responsive Design",
      description:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      alignContent: "right",
      image:
        "https://blogs.infosupport.com/wp-content/uploads/2017/03/5ntkpxqt54y-sai-kiran-anagani_1540x800_acf_cropped.jpg",
      title: "Fully Responsive Design",
      description:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
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
        return <GettingFeatures value={value} />;
      })}
    </div>
  );
};
export default Features;
