import Link from "next/link";
import "./home-style.css";
import PhotosCarousel from "@/components/photos-carousel";

export default async function Home() {
  return (
    <section className="home-wrapper">
      <div className="first-column">
        <h1 className="title">Alyce&Antonio</h1>
        <h2 className="subtitle save-the-date">Save the Date — 20 de julho de 2024</h2>
        <h2 className="subtitle"></h2>
        <p>Mais informações no convite</p>
        <Link className="invitation-button" href='/convite'>Convite</Link>
      </div>
      <div className="second-column">
        <PhotosCarousel />
      </div>
    </section>
  );
}
