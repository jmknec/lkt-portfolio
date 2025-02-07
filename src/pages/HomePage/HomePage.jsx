import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

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
      </main>
    </>
  );
}
