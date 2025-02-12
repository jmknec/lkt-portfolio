import "./AboutPage.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import AboutSection from "../../components/AboutSection/AboutSection";
import music from "../../assets/illustrations/music.svg";
import nurse from "../../assets/illustrations/nurse.svg";
import tech from "../../assets/illustrations/tech.svg";

export default function AboutPage() {
  return (
    <>
      <Header headerClass="header header--about" />
      <main className="main main--about">
        <Banner
          bannerClass="banner banner--about"
          title="A Little About Me..."
          intro="Checkmate... I gave it a cold? I gave it a virus. A computer virus. You know what? It is beets. I've crashed into a beet truck. Remind me to thank John for a lovely weekend. Life finds a way. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!"
        />
        <AboutSection
          sectionClass="about about--text-first"
          heading="About 1 Thing"
          text="Must go faster... go, go, go, go, go! So you two dig up, dig up dinosaurs? Life finds a way. Yes, Yes, without the oops! Must go faster. What do they got in there? King Kong? Remind me to thank John for a lovely weekend. Must go faster... go, go, go, go, go!"
          image={nurse}
          altText="Illustration of double helix molecule and medicines"
        />
        <AboutSection
          sectionClass="about about--image-first"
          heading="About a Second Thing"
          text="Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! You know what? It is beets. I've crashed into a beet truck. Yes, Yes, without the oops! So you two dig up, dig up dinosaurs? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?"
          image={tech}
          altText="Illustration of person working on a laptop computer"
        />
        <AboutSection
          sectionClass="about about--text-first"
          heading="About a Third Thing"
          text="I was part of something special. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? You really think you can fly that thing? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!"
          image={music}
          altText="Illustration of a person playing a stringed musical instrument"
        />
      </main>
    </>
  );
}
