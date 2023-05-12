//创建“外壳”组件app
import React, { Component } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

//引入样式
import "./App.css";

//总结：
/**
 * 1、拆分组件、实现静态组件，注意className、style的写法
 * 2、动态初始化列表，如何确定将数据放到那个组件的state中
 *    --某个组件使用：放在其自身的state中
 *    --某些组件使用：放在他们共同的父组件的state中（官方称此为：状态提升）
 * 3、父子之间的通信
 *    --父组件给子组件传递数据，通过props
 *    --子组件给父组件传递数据，通过props，要求父组件提前给子组件传递一个函数
 * 4、注意deafultChecked和checked的区别，还有defaultValue和value
 * 5、状态在哪里，操作状态的方法就在哪里
 */

// 创建并暴露App组件
export default class App extends Component {

  state = {
    todos:[
      {id:'001', name:'吃饭1', done:true},
      {id:'002', name:'吃饭2', done:true},
      {id:'003', name:'吃饭3', done:false},
    ]
  }

  // 添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    console.log('App', todoObj);
    const {todos} = this.state
    const newTodos = [todoObj, ...todos] // clone the array 或 use Array.from() to create a copy of the
    this.setState({todos:newTodos})
  }

  // 用于更新一个todo对象
  changeTodo = (id, done) => { 
    //获取状态中的state
    const {todos} = this.state
    //匹配并处理数据
    const newTodos = todos.map( (todoObj, i) => {
      if(todoObj.id === id) {
        return {...todoObj, done}
      }else{
        return {...todoObj}
      }
    })
    this.setState({todos: newTodos})

  }
  
  // 用于删除一个todo对象中的一个项
  deleteTodo = (id) => { 	
    const {todos} = this.state; 
    const newTodos = todos.filter( (todoObj, i) => {
      return todoObj.id!== id;
    })
    this.setState({todos: newTodos})

  }

  //是否全选
  handleCheckAll = (done)=>{
    //获取当前的state
    const {todos} = this.state;
    const newTodos = todos.map(todo=>{
      return {...todo, done}
    })
    this.setState({todos:newTodos})
  }

  //清除已完成任务
  clearHandleAllDone = ()=>{
    const {todos} = this.state;
    //过滤数据
    const newTodos = todos.filter((todo)=>{
      return !todo.done
    });
    this.setState({todos:newTodos});

  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} handleCheckAll={this.handleCheckAll} clearHandleAllDone={this.clearHandleAllDone}/>
        </div>
      </div>
    );
  }
}
