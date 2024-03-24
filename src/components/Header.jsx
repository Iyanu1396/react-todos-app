import CreateTodo from "./CreateTodo";
import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";

function Header({
  input,
  handleChange,
  handleSubmit,
  handleColorMode,
  colorMode,
}) {
  return (
    <header className={`header ${colorMode ? "dark" : "light"}`}>
      <div className="flex container">
        <h1>TODO</h1>
        <img
          src={colorMode ? iconSun : iconMoon}
          alt="color-mode-icon"
          onClick={handleColorMode}
        />
      </div>
      <CreateTodo
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        colorMode={colorMode}
      />
    </header>
  );
}

export default Header;
