import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Footer from "../../components/Footer/Footer";
import sample1 from "../../assets/pictures/sample1.avif";
import sample2 from "../../assets/pictures/sample2.avif";
import sample3 from "../../assets/pictures/sample3.avif";

export default function HomePage() {
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
          <div className="projects__gallery">
            <Thumbnail
              name=""
              thumb={sample1}
              altText="image of mug and flowers on a pink background"
              brief=""
            />
            <Thumbnail
              name=""
              thumb={sample2}
              altText="image of pink and orange smiley face balloons"
              brief=""
            />
            <Thumbnail
              name=""
              thumb={sample3}
              altText="collection of vinyl records"
              brief=""
            />
          </div>
        </section>
      </main>
      <Footer footerClass="footer footer--landing" />
    </>
  );
}
