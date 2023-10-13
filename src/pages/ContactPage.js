import React from 'react';
import "./pagesStyle/contact.css"
let  ContactPage = () => {
    return (
            <div className="page">
                <h1 className="title-1">Contacts</h1>
                    <h2 className="title-2">Location</h2>
                    <p className="contactInfo">Moscow, Russia</p>
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p className="contactInfo">
                            <a className="contactInfo" href="tel:+79202360488">+7 (920) 236-04-88</a>
                        </p>
                        <h2 className="title-2">Email</h2>
                        <p className="contactInfo">
                            <a className="contactInfo" href="mailto:kirilloganyanwork@gmail.com">
                                kirilloganyanwork@gmail.com
                            </a>
                        </p>
            </div>
    );
}

export default ContactPage;

