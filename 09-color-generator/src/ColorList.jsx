import { nanoid } from "nanoid";

import SingleColor from "./SingleColor";

function ColorList({ colors }) {
  const changeIndex = colors.length / 2;

  return (
    <section className="colors">
      {colors.map((color, index) => (
        <SingleColor
          key={nanoid()}
          className={index > changeIndex ? "color-light" : ""}
          color={color}
        />
      ))}
    </section>
  );
}
export default ColorList;
