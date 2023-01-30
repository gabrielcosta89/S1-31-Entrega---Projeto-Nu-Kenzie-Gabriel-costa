import { useState } from "react";
import "../Form/style.css";

export function Form({ setListTransactions, lista }) {
  const [description, setdescription] = useState({
    description: "",
    type: "entrada",
    value: 0,
  });
  // const [value, setvalue] = useState("");
  // const [select, setselect] = useState("entrada");

  function addTransaction(event) {
    console.log(description);
    event.preventDefault();
    setListTransactions([...lista, description]);
  }

  return (
    <form onSubmit={addTransaction}>
      <div className="formDescription">
        <label htmlFor="descriptionInput">Descrição</label>
        <input
          id="descriptionInput"
          onChange={(event) =>
            setdescription({ ...description, description: event.target.value })
          }
          required={true}
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="formValue">
        <div className="formValueLeft">
          <label htmlFor="valorInput">Valor</label>
          <input
            id="valorInput"
            onChange={(event) => {
              setdescription({
                ...description,
                value: parseInt(event.target.value),
              });
            }}
            placeholder="1"
            required={true}
            type="number"
          />
        </div>
        <div className="formValueRight">
          <label htmlFor="tipoSelect">Tipo de valor</label>
          <select
            id="tipoSelect"
            onChange={(event) =>
              setdescription({ ...description, type: event.target.value })
            }
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>

      <button className="buttonDefault1 " type="submit">
        Inserir valor
      </button>
    </form>
  );
}
