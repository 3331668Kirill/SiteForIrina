import React from 'react';
import headerstyle from './header.module.css'


const Header = () => {
                                                                                                 

    return (<div className={headerstyle.main}>
    <div className={headerstyle.header}>
        <nav className={`navbar navbar-expand-lg navbar-light`}>
            <a className="navbar-brand" href="#">Ирина Митько</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className={` ${headerstyle.item} + navbar`}>
                    <a className={`nav-item nav-link active `} href="#">Instagram</a>
                    <a className="nav-item nav-link" href="#">Услуги</a>
                    <a className="nav-item nav-link" href="#">Обо мне</a>
                    <a className="nav-item nav-link" href="#">Отзывы</a>
                </div>
            </div>
        </nav>
    </div>
    </div>
    )
}
    
export default Header;