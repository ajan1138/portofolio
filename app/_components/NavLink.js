import Link from "next/link";
import { useNavbarContext } from "../_contexts/navbarContex";

function NavLink({ children, link, mobile }) {
  const { active, setActive } = useNavbarContext();

  return (
    <Link href={link}>
      <li
        className={`${
          mobile
            ? "font-poppins font-medium text-[16px] justify-end p-4"
            : "px-6 text-black-200 text-[18px] font-medium"
        } cursor-pointer hover:text-white ${
          active === children ? "text-white" : ""
        }`}
        onClick={() => setActive(`${children}`)}
      >
        {children}
      </li>
    </Link>
  );
}

export default NavLink;
