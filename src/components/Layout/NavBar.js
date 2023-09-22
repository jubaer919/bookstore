import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.heading}>Bookstore CMS</h1>
      <ul className={classes['nav-list']}>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  );
}
