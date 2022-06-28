import React from "react";
import Form from "../Form/Form";

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>Generate a new Password</h1>
                <div>
                    <Form/>
                </div>
            </div>
        )
    }
}

export default Header;