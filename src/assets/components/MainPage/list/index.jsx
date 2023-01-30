import { useState } from "react";
import "../list/style.css";
import trash from "../../../../assets/trash.svg";
import trashWhite from "../../../../assets/trashWhite.svg";
import noTTransaction from "../../../../assets/NoCard.svg";

export function TransactionList({ listTransactions, setListTransactions }) {
  const [filteredTransaction, setfilteredTransaction] =
    useState(listTransactions);

  function filterTransaction(filtro) {
    if (filtro == "todos") {
      setfilteredTransaction(listTransactions);
    } else if (filtro == "entradas") {
      let entradas = listTransactions.filter((transaction) => {
        if (transaction.type == "entrada") {
          return transaction;
        }
      });
      setfilteredTransaction(entradas);
    } else if (filtro == "saídas") {
      let saidas = listTransactions.filter((transaction) => {
        if (transaction.type == "saída") {
          return transaction;
        }
      });
      setfilteredTransaction(saidas);
    }
  }

  function removeTrasaction(objectTransaction) {
    let keep = listTransactions.filter((element) => {
      return element !== objectTransaction;
    });
    setListTransactions(keep);
    setfilteredTransaction(keep);
  }

  function renderButtons() {
    if ((Array.isArray(listTransactions), listTransactions.length > 0)) {
      return (
        <div className="filterButtons">
          <button autoFocus onClick={() => filterTransaction("todos")}>
            Todos
          </button>
          <button onClick={() => filterTransaction("entradas")}>
            Entradas
          </button>
          <button onClick={() => filterTransaction("saídas")}>Despesas</button>
        </div>
      );
    }
  }
  function buttonTrashHover(string) {
    if (string == "black") {
      return trash;
    } else {
      return trashWhite;
    }
  }

  function isThereList() {
    if ((Array.isArray(listTransactions), listTransactions.length > 0)) {
      return (
        <ul className="TransactionList">
          {listTransactions.map((transaction, index) => {
            return (
              <li key={index} className="card teste" id={transaction.type}>
                <div className="divLeft">
                  <p>{transaction.description}</p>
                  <span>{transaction.type}</span>
                </div>

                <div className="divRight">
                  <span>R$ {transaction.value},00</span>
                  <button
                    id={transaction.description}
                    onClick={() => removeTrasaction(transaction)}
                  >
                    <img src={buttonTrashHover("black")} alt="trash" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div className="noTransaction">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <ul className="noTransactionList">
            <li>
              <img src={noTTransaction} alt="no card" />
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="resumo">
      <div className="resumoTop">
        <p>Resumo financeiro</p>
        {/* {renderButtons()} */}
      </div>
      {isThereList()}
    </div>
  );
}
