import "./Thumbnail.scss";

export default function Thumbnail({ name, thumb, brief, altText }) {
  return (
    <>
      <div className="project">
        <img className="project__thumbnail" src={thumb} alt={altText} />
        <div className="project__details">
          <h3 className="project__title">{name}</h3>
          <p className="project__description">{brief}</p>
        </div>
      </div>
    </>
  );
}
