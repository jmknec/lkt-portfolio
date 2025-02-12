import "./ProjectsPage.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Header headerClass="header header--projects" />
      <main className="main main--projects">
        <Banner
          bannerClass="banner banner--projects"
          title="My Previous Work"
          intro=""
        />
      </main>
      <Footer footerClass="footer footer--projects" />
    </>
  );
}
