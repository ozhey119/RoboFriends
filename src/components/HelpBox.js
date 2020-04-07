import React from 'react';

const HelpBox = () => {
        return (
            <span
                data-tip = "To search for a robot, enter it's name.<br> To view all of the friends, type 'friend'.<br> To view all of the family, type 'family'" 
                className ='bg-light-blue dib br3 pa2 ma2 shadow-3'>
                Help 
            </span>
        );
}

export default HelpBox;