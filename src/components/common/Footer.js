import React from 'react';



const Footer = () => {

    const currYear = new Date().getFullYear();

    return (
        <footer id="footer">
      

            <div className="separator"></div>

            <div className="sub_footer">
                <div className="container">
                    <div className="sub_footer_wrapper">
                        <div className="foot_copyright">
                            <p>
                                {currYear} | Golden Shoe
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;