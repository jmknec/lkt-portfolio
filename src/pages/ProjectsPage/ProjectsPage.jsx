import "./ProjectsPage.scss";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import Footer from "../../components/Footer/Footer";

export default function ProjectsPage() {
  const location = useLocation();

  return (
    <>
      <Header headerClass="header header--projects" />
      <main className="main main--projects">
        <Banner
          bannerClass="banner banner--projects"
          title="My Previous Work"
          intro="Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Just my luck, no ice. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Life finds a way. Must go faster. Jaguar shark! So tell me - does it really exist?"
        />
        <section className="projects">
          <h2 className="projects__heading">Project Gallery</h2>
          <ProjectGallery page={location.pathname} />
        </section>
      </main>
      <Footer footerClass="footer footer--projects" />
    </>
  );
}
