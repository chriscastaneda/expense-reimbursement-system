import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import './navbar.component.css';

interface NavbarProps {
    history: History;
}

const NavbarComponent: React.FC<RouteComponentProps> = (props) => {

    const renderOnCurrentPath = (path: string) => {
        console.log(props.location.pathname);


        return path === props.location.pathname ? 
        <span className="sr-only">(current)</span> : <span></span>
    }

    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Bank of Money</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/employee">Employee {renderOnCurrentPath('/employee') }</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reimburse">Reimburse {renderOnCurrentPath('/reimburse') }</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manager">Manager {renderOnCurrentPath('/manager') }</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/review">Review {renderOnCurrentPath('/review') }</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/template">Template {renderOnCurrentPath('/template') }</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavbarComponent);