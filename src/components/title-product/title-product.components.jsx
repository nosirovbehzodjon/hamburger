import React from "react";
import "./hamburger-box.styles.scss";
import "./title-product.styles.scss";
import "./product-preview.styles.scss";
// import rasm from '../../assets/back.jpg'
import DATA from "./data";
class TitleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      Meat:0,
      Collard:0,
      Tomato:0,
      Cucumber:0,
      Onion:0,
      sections: DATA,
      totalPrice:0,
    };
  }
  CounterAddFunction(title) {
    this.setState((prevState) => ({
      sections: prevState.sections.map((eachitem) =>
        eachitem.title === `${title}`
          ? { ...eachitem, count: eachitem.count - 1 }
          : eachitem
      ),
    }));
  }
  CounterRemoveFunction(title) {
    this.setState((prevState) => ({
      sections: prevState.sections.map((eachitem) =>
        eachitem.title === `${title}`
          ? { ...eachitem, count: eachitem.count + 1 }
          : eachitem
      ),
    }));
  }

  AddRemove = (action, ingredient) => {
    switch (ingredient) {
      case "p-1": {
        if (action === "add") {
          this.CounterAddFunction("Meat");
          this.setState({Meat:this.state.Meat+1})
        } else if (action === "remove") {
          this.CounterRemoveFunction("Meat");
          this.setState({Meat:this.state.Meat-1})
        }
        break;
      }
      case "p-2": {
        if (action === "add") {
          this.CounterAddFunction("Collard");
          this.setState({Collard:this.state.Collard+1})
        } else if (action === "remove") {
          this.CounterRemoveFunction("Collard");
          this.setState({Collard:this.state.Collard-1})
        }
        break;
      }
      case "p-3": {
        if (action === "add") {
          this.CounterAddFunction("Tomato");
          this.setState({Tomato:this.state.Tomato+1})
        } else if (action === "remove") {
          this.CounterRemoveFunction("Tomato");
          this.setState({Tomato:this.state.Tomato-1})
        }
        break;
      }
      case "p-4": {
        if (action === "add") {
          this.CounterAddFunction("Cucumber");
          this.setState({Cucumber:this.state.Cucumber+1})
        } else if (action === "remove") {
          this.CounterRemoveFunction("Cucumber");
          this.setState({Cucumber:this.state.Cucumber-1})
        }
        break;
      }
      case "p-5": {
        if (action === "add") {
          this.CounterAddFunction("Onion");
          this.setState({Onion:this.state.Onion+1})
        } else if (action === "remove") {
          this.CounterRemoveFunction("Onion");
          this.setState({Onion:this.state.Onion-1})
        }
        break;
      }
      default: break;
    }
  };

  TotalPrice(){
    let sum=0;
    for(let i=0;i<this.state.sections.length;i++){
      sum=sum+this.state.sections[i].count*this.state.sections[i].price;
    }
    return (120.2-sum).toFixed(2);
  }
  HamburgerContent=()=>{
    let {Meat,Collard,Tomato,Cucumber,Onion}=this.state;
    let burger=[];
    for(let i=0;i<Meat;i++){
      burger.push(<div key={burger.length} className="meatBox"></div>)
    }
    for(let i=0;i<Collard;i++){
      burger.push(<div key={burger.length} className="collardBox"></div>)
    }
    for(let i=0;i<Tomato;i++){
      burger.push(<div key={burger.length} className="tomatoBox"></div>)
    }
    for(let i=0;i<Cucumber;i++){
      burger.push(<div key={burger.length} className="cucumberBox"></div>)
    }
    for(let i=0;i<Onion;i++){
      burger.push(<div key={burger.length} className="onionBox"></div>)
    }
    return burger;
  }
  render() {
    return (
      <div 
        className="title-product"
      >
        <div className="total-price">Total Price:{this.TotalPrice()}$</div>
        <section className="hamburger-box">
          <main className="hamburger-item">
            <aside className="hamburger-container">
              <div className="hamburger-top">
                <span className="sx-1 s-1"></span>
                <span className="sx-1 s-2"></span>
                <span className="sx-1 s-3"></span>
                <span className="sx-1 s-4"></span>
                <span className="sx-1 s-5"></span>
                <span className="sx-1 s-6"></span>
                <span className="sx-1 s-7"></span>
                <span className="sx-1 s-8"></span>
                <span className="sx-1 s-9"></span>
              </div>
                {this.HamburgerContent()}
              <div className="hamburger-bottom"></div>
            </aside>
          </main>
          <main className="hamburger-item">
            {this.state.sections.map(({ title, price, count, id,current }) => (
              <section className="product-preview" key={id}>
                <div className="name-product">
                  <span className="count">{count}</span>
                  <span className="price">{price}$</span>
                  <span className="name">{title}</span>
                </div>
                <div className="container-btn">
                  <button onClick={() => this.AddRemove("add", `p-${id}`)} disabled={this.state.sections[id-1].count>0?false:true} className={`plus p-${id}`}>+</button>
                  <button onClick={() => this.AddRemove("remove", `p-${id}`)} disabled={this.state.sections[id-1].count<this.state.sections[id-1].current?false:true} className={`minus m-${id}`}>-</button>
                </div>
              </section>
            ))}
          </main>
        </section>
      </div>
    );
  }
}
export default TitleProduct;
