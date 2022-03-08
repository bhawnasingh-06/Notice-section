import icon_1 from "../images/icon_1.svg";
import icon_2 from "../images/icon_2.svg";
import icon_3 from "../images/icon_3.svg";
import icon_4 from "../images/icon_4.svg";
import icon_5 from "../images/icon_5.svg";
import img from "../images/img.png";
import ImgCard from "../YIEUI/ImgCard";
import TextWithIcon from "../YIEUI/TextWithIcon";

function Features() {
  const icons = [
    { text: "Active learning approach", icon: icon_1 },
    { text: "Brief video lectures", icon: icon_2 },
    { text: "Quizzes and Leaderboard", icon: icon_3 },
    { text: "Assignment submission and evaluation", icon: icon_4 },
    { text: "Discussion Forums", icon: icon_5 },
  ];
  return (
    <div className="mx-32">
      <h2 className="text-center my-8 text-6xl font-normal">Features</h2>
      <div className="flex justify-between align-center lg:flex-row flex-col-reverse ">
        <div className="my-auto">
          {icons.map((i) => (
            <TextWithIcon
              classes={"mb-10"}
              text={i.text}
              textClasses={"font-semibold "}
              iconClasses={"border rounded-full p-1"}
              icon={<img src={i.icon} />}
              // give icon width in px, vw, or em, rem
              iconWidth={"35px"}
            />
          ))}
        </div>
        <ImgCard src={img} classes={"lg:block hidden"} />
      </div>
    </div>
  );
}

export default Features;
