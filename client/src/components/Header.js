import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';

const Header = (props) => {

    const {link, linkText, subText} = props;

    return(
        <div>
            <h2>Favorite Authors</h2>
            <Link to={link}>{linkText}</Link>
            <p>{subText}</p>
        </div>
    )

}

export default Header;