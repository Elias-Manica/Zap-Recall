export default function BottomStatus({ counter, icons }) {
  return (
    <>
      <div className="bottomStatus">
        <p>{counter}/4 CONCLUÍDOS</p>
        <div className="listChoose">
          {icons.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}
