function NavLink({ children, link, active }) {
  return (
    <li className={`cursor-pointer px-6 ${active ? "text-white" : ""}`}>
      {children}
    </li>
  );
}

export default NavLink;
