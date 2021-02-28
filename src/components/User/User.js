import React from 'react';

const User = (props) => {
    const userStyle = {width: '10%'}
    const {name, email, Phone, salary} = props.user;
    return (
        <div>
            <img style={userStyle} src={props.user.image} alt=""/>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h3>Phone: {Phone}</h3>
            <h3><small>Salary: {salary}</small></h3>
            <button>add</button>
        </div>
    );
};

export default User;