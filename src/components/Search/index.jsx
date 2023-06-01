import axios from 'axios';
import React, { Component } from 'react'

export default class index extends Component {

  onSearch = () => {  // onSearch函数的入口函数，定义在此处定义的函数中。在此处定义函
    console.log(this.keyWorldElement.value);
    const {keyWorldElement:{value:keyWorldValue}} = this
    console.log(keyWorldValue);
    //发送请求
    axios.get('https://api.github.com/search/users?q=' + keyWorldValue).then(
      res => {
        console.log(res.data);
      },
      err => { console.log(err); }
    );

  }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索用户</h3>
            <div>
            <input ref={c => this.keyWorldElement = c} type="text" placeholder="输入关键词点击搜索" />
            &nbsp;
            <button onClick={this.onSearch}>搜索</button>
            </div>
        </section>
    )
  }
}
