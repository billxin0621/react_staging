import React, { Component } from "react";

// 引入样式
import "./index.css"

export default class Footer extends Component {


  //是否全选点击触发
  handleCheckAll = (event)=>{
    this.props.handleCheckAll(event.target.checked);
  }

  //清除已完成任务触发
  clearHandleAllDone = ()=>{
    this.props.clearHandleAllDone();
  }

  render() {
    //传过来的参数
    const {todos} = this.props
    //已完成的个数（reduce用于统计）
    const doneConut = todos.reduce((pre, todo)=>{return pre + (todo.done ? 1 : 0)}, 0)
    //总数
    const totalConut = todos.reduce((pre, todo)=>{return pre + 1}, 0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneConut === totalConut && totalConut !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneConut}</span> / 全部{totalConut}
        </span>
        <button onClick={this.clearHandleAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
