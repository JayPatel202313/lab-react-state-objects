import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react'
import data from "./data";

function App() {
  console.log('App.js - data', data)


  const [total, updateTotal] = useState(0); // change name
  const [order, currentOrder] = useState([]);


  function addOrder(item) {
    currentOrder([...order, item]);
    updateTotal(prevtotal => prevtotal + item.price);
  }

  function removeItem(item) {
    currentOrder(order.slice(0, (order.indexOf(item))).concat(order.slice(order.indexOf(item) + 1)));
    updateTotal(prevtotal => prevtotal - item.price);
  }

  function closeOut() {
    currentOrder([]);
    updateTotal(0);
  }


  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            {data.map((item) => (
              <tr key={item.id} onClick={() => addOrder(item)}>
                <td>{item.image}</td>
                <td className="item-name">
                  <span>{item.name}</span><br />
                  <span>{item.image.repeat(item.spiceLevel)}</span>
                </td>
                <td>${item.price}</td>
              </tr>
            ))}
          </table>

        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {order.map(item => {
                return (
                  <li>
                    <span onClick={() => removeItem(item)}>X</span><span>{item.name}</span>${item.price}
                  </li>
                )
              })}

            </ul>
            <h4>Total: ${total}</h4>
            <div>

              <button onClick={closeOut}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
