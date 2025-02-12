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
              name="Sample 1"
              thumb={sample1}
              altText="image of mug and flowers on a pink background"
              brief="God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows."
            />
            <Thumbnail
              name="Sample 2"
              thumb={sample2}
              altText="image of pink and orange smiley face balloons"
              brief="Checkmate... Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Must go faster. Must go faster. Did he just throw my cat out of the window? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!"
            />
            <Thumbnail
              name="Sample 3"
              thumb={sample3}
              altText="collection of vinyl records"
              brief="Yes, Yes, without the oops! Hey, take a look at the earthlings. Goodbye! Must go faster. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."
            />
          </div>
        </section>
      </main>
      <Footer footerClass="footer footer--landing" />
    </>
  );
}
