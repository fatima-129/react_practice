import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to my App</h1>
      <MyButton />
      <AboutPage />
      <Avatar />
      <Items />
    </div>
  );
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 }
];

function MyButton() {
  return <button>I'm a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there <br /> How do you do?
      </p>
    </>
  );
}

function Avatar() {
  return (
    <img
      src="https://images.unsplash.com/photo-1695516630877-3ded6b1ba0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      style={{ width: "300px", height: "50vh" }}
    />
  );
}

function Items() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "red" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>{listItems}</ul>
    </div>
  );
}
