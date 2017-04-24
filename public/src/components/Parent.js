import {render} from "react-dom";
import React from "react";
import {Link} from "react-router";

class Parent extends React.Component {
    add() {
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        if(name&&age){
            this.props.onAdd(name,age)
        }
        else{
            alert("请输入姓名和年龄")
        }
    }

    render() {
        return <div>
            name:<input type="text" ref = "name"/>
            age:<input type="text" ref = "age"/>
            <button onClick={this.add.bind(this)}>添加用户</button>
            <Link to="/child">child</Link>
        </div>;
    }
}

module.exports = Parent;

