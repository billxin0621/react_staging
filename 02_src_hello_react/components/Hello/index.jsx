//创建“外壳”组件app
import React,{Component} from "react";
//引入css
import hello from "./index.module.css";

// 创建并暴露App组件
export default class Hello extends Component{
    render(){
        return (
            <div>
                <h1 className="hello.title">Hello, world</h1>
            </div>
        )
    }
}
