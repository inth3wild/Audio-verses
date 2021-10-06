import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleClick = (mode) => {
        if (mode === 'dark') {
            document.body.style.backgroundColor = '#121212'
            document.body.classList.add('text-white')
            document.querySelector('.navbar').classList.add('navbar-dark')
            document.querySelector('#light').classList.add('text-light')
            document.querySelector('#dark').classList.add('text-light')
    
            const cardElements = document.querySelectorAll('.card')
            const cardArray = Array.from(cardElements)
            cardArray.forEach(card => {
                card.classList.add('bg-dark')
            }); 
        } else {
            document.body.removeAttribute('style')
            document.body.classList.remove('text-white')
            document.querySelector('.navbar').classList.remove('navbar-dark')
            document.querySelector('#light').classList.remove('text-light')
            document.querySelector('#dark').classList.remove('text-light')
    

            const cardElements = document.querySelectorAll('.card')
            const cardArray = Array.from(cardElements)
            cardArray.forEach(card => {
                card.classList.remove('bg-dark')
            });
        }
    }

    return ( 
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"> <i className="bi bi-soundwave"></i> Audio Verses </Link>

                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group btn-group-lg me-2" role="group" aria-label="First group">
                            <button onClick={ () => handleClick('light') } type="button" className="btn border-1" id="light"><i className="bi bi-brightness-high"></i></button>
                            <button onClick={ () => handleClick('dark') } type="button" className="btn" id="dark"><i className="bi bi-moon-fill"></i></button>
                        </div>
                    </div>  
                </div>
            </nav>
        </div>
        
    );
}
 
export default Navbar;