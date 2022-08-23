import React from "react";


function Footer() {

    const year = new Date().getFullYear()
    return(

        <footer>
            &copy;{year}, Ana Freitas 
        </footer>
    );
};

export default Footer;