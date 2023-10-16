import { useState, useEffect } from "react";

import Menu from "./Menu";
import Title from "./Title";

import data from "./data";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const newMenu =
      activeCategory === "all"
        ? data
        : data.filter((item) => item.category === activeCategory);
    setMenuItems(newMenu);
  }, [activeCategory]);

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          setCategory={setActiveCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
