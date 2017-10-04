import React from 'react';

const Star = props => <div className={`star ${props.active ? 'active' : ''}`} />;

export default Star;
