export default function CardsSponsors({img, alt}) {
    return (
        <>
            <div className="CardsSponsors-container-img">
                <img className="CardsSponsors-img" src={img} alt={alt} />
            </div>
        </>
    );
}