import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/employees">Employees</Link>
        </li>
        <li>
          <Link href="/positions">Positions</Link>
        </li>
        <li>
          <Link href="/shifts">Shifts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
