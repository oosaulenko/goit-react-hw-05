import css from './NotFoundPage.module.css';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
        <h1>Not Found</h1>
        <p className={css.text}>Sorry, the page you are looking for does not exist.</p>
            <Link to={'/'}>Go back to the homepage</Link>
        </>
    )
}

export default NotFoundPage;