import { Link } from "react-router-dom";

const EmptyBag = () => {
  return (
    <center className="Empty-bag-container">
      <img className="Empty-bag-image" src="images/empty-bag.webp" alt="image not load" />
      <div className="Empty-bag1">Hey, it feels so light!</div>
      <div className="Empty-bag2">
        There is nothing in your bag. Let's add some items.
      </div>
      <Link to="/" className="Empty-bag3"> ADD ITEMS FROM STORE</Link>
      
    </center>
  );
};

export default EmptyBag;
