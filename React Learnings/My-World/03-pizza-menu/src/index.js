import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false
    }, {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true
    }, {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() { // const style = { color: "red", fontSize: '48px', textTransform: 'uppercase' }
    const style = {};

    return (
        <header className="header">
            <h1 style={style}>Fast React Pizaa Co.</h1>
        </header>
    );
}

function Menu() {
    const pizaas = pizzaData;
    // const pizzas=[];
    let numPizzas = pizaas.length;

    return (<main className="menu">
        <h2>Our Menu</h2>
        {
            numPizzas > 0 ? (
                <>
                    <p>Authentic Italian cuisine.6 creative dishesto choose from , All from over stone oven, All organic all delicious.</p>
                    <ul className="pizzas">
                        {pizaas.map((pizza) => (
                            <Pizza pizzaObj={pizza}
                                key={
                                    pizza.name
                                } />
                        ))}
                    </ul>
                </>
            ) : (<p>We're Still working on our menu. Please come back later)</p>)
        }

        {/* <Pizza
                        name="Pizza Spinachi"
                        ingredients="Tomato , Mozarella , Spinach , and Ricotta cheese"
                        photoName="pizzas/spinaci.jpg"
                        price={10}
                    />
                    <Pizza
                        name="Pizza Funghi"
                        ingredients="Tomato , Mushrooms"
                        photoName="pizzas/funghi.jpg"
                        price={12}
                    /> */} </main>
    );;
}

function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut)
    //     return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
            <img src={
                pizzaObj.photoName
            }
                alt={
                    pizzaObj.name
                } />
            <div>
                <h1>{
                    pizzaObj.name
                }</h1>
                <p>{
                    pizzaObj.ingredients
                }</p>
                {/* {pizzaObj.soldOut ? "SOLD OUT" :
                    <span>{
                        pizzaObj.price
                    }</span>} */}
                <span>{
                    pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price
                }</span>

            </div>
        </li >
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    // console.log(isOpen);
    // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
    // else alert("We're currently close")
    // console.log(hour);
    return <footer className="footer">
        {
            isOpen ? <Order closeHour={closeHour} openHour={openHour} />

                : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 . </p>} </footer >;
    // return React.createElement("footer", null, "We're currentlyopen!")
}

function Order({ closeHour, openHour }) {
    return <div className="order">

        <p>
            We're Open from {openHour}:00 to {closeHour}:00 . Come visit us or order.
        </p>
        <button className="btn">Order</button>
    </div>
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
