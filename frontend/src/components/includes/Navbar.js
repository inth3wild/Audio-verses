import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"> <i className="bi bi-soundwave"></i> Audio Verses </Link>

                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group btn-group-lg me-2" role="group" aria-label="First group">
                            <button type="button" className="btn active" data-bs-toggle="button" id="light"><i className="bi bi-brightness-high"></i></button>
                            <button type="button" className="btn" id="dark"><i className="bi bi-moon-fill"></i></button>
                        </div>
                    </div>  
                </div>
            </nav>
        </div>
        
    );
}
 
export default Navbar;