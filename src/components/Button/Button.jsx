import "./Button.scss";

export default function Button({ text, onClick, icon }) {
  return (
    <>
      <button className="button" onClick={onClick}>
        <img
          className="button__icon"
          src={icon}
          alt={`icon for ${text} button`}
        />
        {text}
      </button>
    </>
  );
}
