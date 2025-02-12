import "./HomePage.scss";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  const location = useLocation();

  return (
    <>
      <Header headerClass="header header--landing" />
      <main className="main main--landing">
        <Banner
          bannerClass="banner banner--landing"
          title="Hi There!"
          intro="Life finds a way. Do you have any idea how long it takes those cups to decompose. You really think you can fly that thing?"
        />
        <section className="projects">
          <h2 className="projects__heading">Recent Work</h2>
          <ProjectGallery page={location.pathname} />
        </section>
      </main>
      <Footer footerClass="footer footer--landing" />
    </>
  );
}
