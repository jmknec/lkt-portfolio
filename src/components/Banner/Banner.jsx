import "./Banner.scss";

export default function Banner({ bannerClass, title, intro }) {
  return (
    <>
      <div className={bannerClass}>
        <div className="banner__content">
          <h1 className="banner__title">{title}</h1>
          <p className="banner__intro">{intro}</p>
        </div>
      </div>
    </>
  );
}
