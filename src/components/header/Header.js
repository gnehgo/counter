import "./header.css"
let Header = () => {
    return (
        <header className="header">
            <div className="header_wrapper">
                <h1 className="header_title">
                    <strong>
                        Hi, my name is <em>Kirill</em>
                    </strong>
                    <br />a frontend developer
                </h1>
                <div className="header_text">
                    <p>with passion for learning and creating.</p>
                <a  href="#!" className="cvLink">
                    Download CV
                </a>
                </div>
            </div>
        </header>
    );
}

export default Header;