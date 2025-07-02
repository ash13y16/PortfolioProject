import React from "react";

function Header({currentPage, handlePageChange}) {

    return (
        <div>
            <header className="header">
                <div>
                    <h2 className = "logo">AW</h2>
                </div>
                <div className="nav">
                    <button
                        className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                        onClick={() => handlePageChange('home')}
                    >Home</button>

                    <button
                        className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                        onClick={() => handlePageChange('about')}
                    >About</button>

                    <button
                        className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
                        onClick={() => handlePageChange('projects')}
                    >Portfolio</button>
                </div>
            </header>
        </div>
    );
}

export default Header;