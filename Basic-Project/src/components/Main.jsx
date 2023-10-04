import Block from "./Block";
import svgIndulge from "../assets/illustration-passions.svg";
import svgJar from "../assets/illustration-financial-freedom.svg";
import svgGlass from "../assets/illustration-lifestyle.svg";
import svgCar from "../assets/illustration-work-anywhere.svg";
const property = [
  {
    header: "Indulge your passions",
    text: `Your passions shouldn't be just for the weekend. Earn a living doing
    what you love.`,
    img: svgIndulge,
    id: 3,
  },
  {
    header: "Gain financial freedom",
    text: " Start making money work for you. There’s nothing quite like earning while you sleep.",
    img: svgJar,
    id: 4,
  },
  {
    header: "Choose your lifestyle",
    text: " Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
    img: svgGlass,
    id: 5,
  },
  {
    header: "Work from anywhere",
    text: "Selling online means not being pinned down. Want to work AND travel? Go for it!",
    img: svgCar,
    id: 6,
  },
];

function Main() {
  return (
    <div>
      {property.map((el) => (
        <Block header={el.header} text={el.text} key={el.id} img={el.img} />
      ))}
    </div>
  );
}

export default Main;
