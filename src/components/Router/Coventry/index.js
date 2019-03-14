import React from "react";
import css from "../../App/App.module.css";
import Menu from "../../Menu";
import Order from "../../Order";
import Inventory from "../../Inventory";

const Coventry = () => {
  return (
    <div className={css.container}>
      <h1 className={css.headline}>COVENTRY!!!!!</h1>
      <h2 className={css.location}> YESS IT'S COVENTRY</h2>
      <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Ffr%2Fthumb%2F9%2F94%2FCoventry_City_FC_logo.svg%2F1200px-Coventry_City_FC_logo.svg.png&f=1" />
      <div className={css.content}>
        <Menu items={"RICOH ARENA"} addToOrder={"BLAH BLAH"} />
        <div className={css.panel}>
          <Order
            order={"RICOH ARENA"}
            stock={"RICOH ARENA"}
            addToOrder={"RICOH ARENA"}
            removeFromOrder={"RICOH ARENA"}
            deleteFromOrder={"RICOH ARENA"}
          />
          <Inventory onLoadClick={"RICOH ARENA"} onSubmit={"RICOH ARENA"} />
        </div>
      </div>
    </div>
  );
};

export default Coventry;
