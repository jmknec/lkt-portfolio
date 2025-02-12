import "./AboutSection.scss";

export default function AboutSection({
  sectionClass,
  heading,
  text,
  image,
  altText,
}) {
  return (
    <>
      <section className={sectionClass}>
        <div className="about__content">
          <h2 className="about__heading">{heading}</h2>
          <p className="about__text">{text}</p>
        </div>
        <div className="about__image-container">
          <img className="about__image" src={image} alt={altText} />
        </div>
      </section>
    </>
  );
}
