import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/What-We-Do"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/What-We-Do' ? 'nav-link active' : 'nav-link'}
        >
          What We Do
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Who-We-Are"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Who-We-Are' ? 'nav-link active' : 'nav-link'}
        >
          Who We Are
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Take-Action"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Take-Action' ? 'nav-link active' : 'nav-link'}
        >
          Take Action
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Apply"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Apply' ? 'nav-link active' : 'nav-link'}
        >
          Apply
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
