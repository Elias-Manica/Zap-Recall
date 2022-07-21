export default function FrontQuestion({ numberQuestion }) {
  return (
    <>
      <div className="frontQuestion ">
        <h2>Pergunta {numberQuestion}</h2>
        <ion-icon
          name="play-circle-outline"
          onClick={() => console.log(`você clicou na carta ${numberQuestion}`)}
        ></ion-icon>
      </div>
    </>
  );
}
