export default function AnswerVisible({
  answer,
  visibleAnswer,
  setVisibleAnswer,
}) {
  return (
    <>
      <div className={visibleAnswer}>
        <p>{answer}</p>
        <div className="answers">
          <div className="dontRemember">
            <p>Não lembrei</p>
          </div>
          <div className="almostRemember">
            <p>Quase não lembrei</p>
          </div>
          <div className="remember">
            <p>Zap</p>
          </div>
        </div>
      </div>
    </>
  );
}
