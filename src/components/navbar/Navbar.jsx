import "./style.css";
const Navbar = ({ getUsers, isLoading }) => {
  return (
    <nav className="navbar">
      <h1>Koach</h1>
      <button disabled={isLoading} onClick={getUsers}>
        Get users
      </button>
    </nav>
  );
};
export default Navbar;
