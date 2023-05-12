import React, { Component } from "react";

// 引入样式
import "./index.css"

export default class Item extends Component {

  //定义鼠标移入移出参数
  state = {mouse:false}

  //鼠标移入移出
  handleMouse = (flag) => {
    return ()=>{
      this.setState({mouse:flag})
    }
  };

  //勾选或取消勾选
  handleCheck = (id) => {
    return (event) => {
      console.log(id,event.target.checked)
      this.props.changeTodo(id, event.target.checked)
    }
  }

  // 删除一个todo
  handleDelete = (id) => {
    console.log('删除一个todo', id)
    if (window.confirm("确认要删除吗?")) {  //confirm是用户界面上的“确定”按钮，prom
      this.props.deleteTodo(id)
    } else {  //cancel是用户界面上的“取消”按钮，no thanks, don't ask again.

    }
    
  }


  render() {
    const {id,name,done} = this.props; // 这里可以将props传递给子例程或组件，从而实现动画效果
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li>
    );
  }
}
