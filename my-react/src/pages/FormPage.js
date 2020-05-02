import React, { Component } from 'react'
import { Form, Input, Icon, Button } from "antd";

const FormItem = Form.Item;
export default class FormPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      password:''
    }
  }
  change = (filed,e)=>{
    this.setState({
      [filed]:e.target.value
    })
  }
  submit=()=>{
    console.log('submit',this.state)
  }
  render() {
    return (
      <div>
        <h1>FormPage</h1>
        <Form>
          <FormItem label="姓名">
            <Input
              prefix={<Icon type="user"/>}
              onChange={e=>this.change("name",e)}
            />
          </FormItem>
          <FormItem label="密码">
            <Input
              type="password"
              prefix={<Icon type="lock" />}
              onChange={e=>this.change("password",e)}
            />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={this.submit}>提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
