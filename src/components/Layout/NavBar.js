import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';
import user from '../../aset/user.svg';

export default function NavBar() {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.heading}>Bookstore CMS</h1>
      <ul className={classes['nav-list']}>
        <li><Link to="/" className={classes['books-link']}>Books</Link></li>
        <li><Link to="/categories" className={classes.categories}>Categories</Link></li>
        <li className={classes.img}>
          <img src={user} alt="user logo" />
        </li>
      </ul>
    </nav>
  );
}
