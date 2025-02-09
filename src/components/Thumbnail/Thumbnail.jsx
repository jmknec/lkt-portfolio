import "./Thumbnail.scss";

export default function Thumbnail({ name, thumb, brief, altText }) {
  return (
    <>
      <div className="projects__card">
        <img className="projects__thumbnail" src={thumb} alt={altText} />
        <h3 className="projects__title">{name}</h3>
        <p className="projects__description">{brief}</p>
      </div>
    </>
  );
}
