import "./AboutPage.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

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
      </main>
    </>
  );
}
