import SingleItem from "./SingleItem";

function Items({ items, removeItem, toggleCompleted }) {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          item={item}
          key={item.id}
          removeItem={removeItem}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
export default Items;
