export default function ShowQuestion({ question, show, setShow }) {
  return (
    <>
      <div className={show}>
        <p className="">{question}</p>
        <ion-icon name="return-down-back-outline"></ion-icon>
      </div>
    </>
  );
}
