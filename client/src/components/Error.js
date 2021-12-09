import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';

const Error = (props) => {

    return(
        <div>
            <p>We're sorry, but we could not find that author. Would you like to add a new author?</p>
            <Link to={"/new"}>Create Author</Link>
        </div>
    )

}

export default Error;