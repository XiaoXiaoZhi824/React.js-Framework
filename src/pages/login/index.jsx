import React, { Component } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logoURL from '../../assets/images/logo.png';
import './index.css';

export default class Login extends Component {
  render() {
    return (
      <section className="login">
        <header className="login_header">
          <img src={logoURL} alt="logo"></img>
          <h1>后台管理系统</h1>
        </header>
        <div className="login_content">
          <h2>用户登陆</h2>
          <Form
            className="login_form"
            initialValues={{
              username: 'admin',
              password: 'admin'
            }}
            onFinish={this.login}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: '请输入用户名' },
                { min: 5, message: '用户名长度不能少于5位' },
                { max: 10, message: '用户名长度不能多于10位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须由英文、数字或下划线组成' }
              ]}
            >
              <Input
                placeholder="用户名"
                prefix={
                  <Space>
                    <UserOutlined style={{ 'color': 'rgba(0, 0, 0, 0.25)' }} />
                  </Space>
                }
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: '请输入密码' },
                { min: 5, message: '密码长度不能少于5位' },
                { max: 10, message: '密码长度不能多于10位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须由英文、数字或下划线组成' }
              ]}
            >
              <Input
                type="password"
                placeholder="密码"
                prefix={
                  <Space>
                    <LockOutlined style={{ 'color': 'rgba(0, 0, 0, 0.25)' }} />
                  </Space>
                }
              />
            </Form.Item>
            <Form.Item>
              <Button className="login_form_button" type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    );
  }
  login = (event) => {
    console.log(event);
  }
}
