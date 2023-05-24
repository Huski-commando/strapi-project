import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <h2>
      <FaBars />
    </h2>
  );
};

export default Navbar;
