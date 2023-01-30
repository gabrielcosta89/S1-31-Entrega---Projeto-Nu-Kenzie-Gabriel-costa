import "../TotalMoney/style.css";

export function TotalMoney({ listTransactions }) {
  console.log(listTransactions);
  const data = listTransactions.reduce((previusValue, currentValue) => {
    if (currentValue.type === "saída") {
      return -Math.abs(currentValue.value) + previusValue;
    } else {
      return currentValue.value + previusValue;
    }
  }, 0);

  if ((Array.isArray(listTransactions), listTransactions.length > 0)) {
    return (
      <div className="totalDiv">
        <div className="totalLeft">
          <p>Valor total:</p>
          <span>O valor se refere ao saldo</span>
        </div>
        <div className="totalright">
          <span>$ {data}</span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
