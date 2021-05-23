import React from 'react';

/* Having the location being searched displayed */
const Location = (props) => {
    return (
        <div>
            <p style={{ fontSize: "2rem" }}>
                {props.city}, {props.country}
            </p>
        </div>
    );
};

export default Location;