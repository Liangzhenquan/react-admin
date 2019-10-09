import React, { Component } from 'react'
import '../styles/login.css'
export default class Login extends Component {
    render() {
        return (
            <section className='login'>
                <div className="form-login">
                    <h2 className='title-login'>
                        登录
                    </h2>
                    <input className='common-input' type="text" placeholder='账号'/>
                    <input className='common-input' type="text" placeholder='密码'/>
                    <button className='btn-login'>登录</button>
                </div>
            </section>
        )
    }
}
