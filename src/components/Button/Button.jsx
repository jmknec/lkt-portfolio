import "./Button.scss";

export default function Button({ text, onClick, icon, active }) {
  return (
    <>
      <button className={`button ${active ? "active" : ""}`} onClick={onClick}>
        <img
          className="icon icon--button"
          src={icon}
          alt={`icon for ${text} button`}
        />
        {text}
      </button>
    </>
  );
}
