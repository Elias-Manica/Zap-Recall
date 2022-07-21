export default function ShowQuestion({ question }) {
  return (
    <>
      <div className="frontAnswer hide">
        <p className="">{question}</p>
        <ion-icon name="return-down-back-outline"></ion-icon>
      </div>
    </>
  );
}
