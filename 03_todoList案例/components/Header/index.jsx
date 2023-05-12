import React, { Component } from "react";
import {nanoid} from 'nanoid';
import PropTypes 	from "prop-types";

// 引入样式
import "./index.css"

export default class Header extends Component {

  // 对接收的props进行限制，类型及必填
  static propTypes =  {
    addTodo:PropTypes.func.isRequired, //函数式接口定义，用于检查参数是否为有效的todo名称。
    
  }

  // 键盘抬起触发
  handleKeyUp = (event) => {  // keyCode for IE, or delete if browser doesn't support it
    const {keyCode, target} = event;
    // 如果是回车
    if (keyCode === 13) { // ESC key code. ESC to close window. ESC to close window. ESC to close window.
      // 判断todo的名字不能为空
      if (target.value.trim() === ''){
        alert('输入不能为空')
        return
      }
      // 准备好一个todo对象
      const todoObj = {id:nanoid(), name:target.value, done:false}
      //将todoObj传递给App
      this.props.addTodo(todoObj); 	// call the addTodo function in the parent component.
      //清空输入
      target.value = '';
    }else{
      return
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
