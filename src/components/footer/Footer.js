import "./footer.css";
import vk from './../../img/vk.svg';
import instagram from './../../img/instagram.svg';
import telegram from './../../img/telegram.svg';
import gitHub from './../../img/gitHub.svg';

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer_wrapper">
                    <div className="social">
                        <p className="social_item">
                            <a href='https://vk.com/gnehgo'>
                                <img src={vk} alt="Link" />
                            </a>
                        </p>
                        <p className="social_item">
                            <a href='https://www.instagram.com/gnehgo/'>
                                <img src={instagram} alt="Link" />
                            </a>
                        </p>
                        <p className="social_item">
                            <a href='https://t.me/bet_or_win'>
                                <img src={telegram} alt="Link" />
                            </a>
                        </p>
                        <p className="social_item">
                            <a href='https://github.com/fa'>
                                <img src={gitHub} alt="Link" />
                            </a>
                        </p>
                    </div>
                    <div className="copyright">
                        <p>© 2023 MyCV</p>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;