import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HomePage } from "./assets/components/Homepage";
import { TransactionList } from "./assets/components/MainPage/list";
import { Form } from "./assets/components/MainPage/Form";
import { TotalMoney } from "./assets/components/MainPage/TotalMoney";
import { Header } from "./assets/components/MainPage/header";

function App() {
  const [home, sethome] = useState(true);

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Netflix", type: "saída", value: 100 },
    { description: "Dividendo", type: "entrada", value: 1500 },
    { description: "Conta de luz", type: "saída", value: 150 },
  ]);
  console.log(listTransactions);
  return (
    <main className="App">
      {home ? (
        <HomePage sethome={sethome} />
      ) : (
        <div>
          <Header sethome={sethome} />
          <div className="container2">
            <div className="divFormTotalValue">
              <Form
                lista={listTransactions}
                setListTransactions={setListTransactions}
              />

              <TotalMoney listTransactions={listTransactions} />
            </div>

            <TransactionList
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
