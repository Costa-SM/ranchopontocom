import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="row">
                        <div className="column">
                            <div className="title"> Desenvolvedores </div>
                            <a className="link" target="_blank" href="https://github.com/Costa-SM"> Arthur Costa </a>
                            <a className="link" target="_blank" href="https://github.com/edmsimp"> Eduardo Simplício </a>
                            <a className="link" target="_blank" href="https://github.com/matheus-creator"> Matheus Ramos </a>
                        </div>
                        <div className="column">
                            <div className="title"> Localização </div>
                            <div className="text"> CEP 12228-300 </div>
                            <div className="text"> Rua H8B, Campus CTA </div>
                            <div className="text"> Apartamento 217 </div>
                        </div>
                        <div className="column">
                            <div className="title"> Contato </div>
                            <div className="text"> (30) 33030-3030 </div>
                            <div className="text"> 3030 </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;