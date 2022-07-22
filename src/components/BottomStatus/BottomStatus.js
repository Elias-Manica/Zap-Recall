import "./style.css";

export default function BottomStatus({ counter, icons, msgFinal, restart }) {
  return (
    <>
      <div className="bottomStatus">
        <div className="msgFinal">
          <h3>{msgFinal[0]}</h3>
          <h4>{msgFinal[1]}</h4>
        </div>
        <p>{counter}/4 CONCLUÍDOS</p>
        <div className="listChoose">
          {icons.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className={restart} onClick={() => window.location.reload()}>
          REINICIAR RECALL
        </div>
      </div>
    </>
  );
}
