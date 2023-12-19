import "../styles/Sponsors.css";
import CardsSponsors from "./ui/CardsSponsors";

export function Sponsors() {
    return (
        <main>
            <h2 className="sponsorsTitulo">Patrocinadores</h2>
            <div className="CardsSponsors-container">
            <CardsSponsors img='/artech.png' alt='Empresa Artech' />
            <CardsSponsors img='/pescar.webp' alt='Fundación Pescar' />
            <CardsSponsors img='/karuna.png' alt='Empresa Karuna' />
            </div>
        </main>
    );
}