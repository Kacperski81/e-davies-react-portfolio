
import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
        <nav className="navbar navbar-expand-lg customNav">
            <div className="container-fluid">
                <NavLink 
                    to="/" 
                    className={({isActive}) =>
                        isActive ? 'navbar-brand nav-link active pl-2' : 'navbar-brand nav-link pl-2'
                    }
                >
                    My Portfolio 
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink 
                            to="/" 
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Home 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="project-gallery"  
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="contact"  
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Contact Me
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
  
export default NavTabs;