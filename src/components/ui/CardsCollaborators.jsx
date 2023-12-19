import { CONTRIBUIDORES } from "../../data/contribuidores";
export default function CardsCollaborators() {
  return (
    <>
        {CONTRIBUIDORES.map((Contribuidor) => (
        <div>
          <img className="contribuidorImg" src={Contribuidor.avatar} alt="" />
        </div>
      ))}{" "}
    </>
  );
}
