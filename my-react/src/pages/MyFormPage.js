import React, { Component } from 'react'

function kFormCreate(Cmp){
  return class extends Component{
    constructor(props){
      super(props);
      this.options = {}
      this.state = {}
    }
    handleChange=event=>{
      const {name,value} = event.target
      this.setState({
        [name]:value
      })
    }
    getFieldDecorator=(filed,option)=>{
      this.options[filed] = option
      return InputCmp=>(
        <div className="border">
          {React.cloneElement(InputCmp,{
            name:filed,
            value:this.state[filed] || '',
            onChange:this.handleChange
          })}
        </div>
      )
    }
    getFieldsValue=()=>{
      return {...this.state}
    }
    getFieldValue=(filed)=>{
      return this.state[filed]
    }
    validateFields = callback=>{
      const tem = {...this.state}
      const err = []
      console.log(this.options)
      for(let i in this.options){
        if(tem[i]===undefined){
          err.push({
            [i]: 'error'
          })
        }
      }
      if(err.length>0){
        callback(err,tem)
      }else{
        callback(undefined,tem)
      }
    }
    render(){
      return(
        <div className="border">
          <Cmp
            {...this.props}
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          ></Cmp>
        </div>
      )
    }
  }
}

const nameRule = {
  required: true,
  message: "please input your name",
};

const passwordRule = {
  required: true,
  message: "please input your password",
};
class MyFormPage extends Component {
  submit=()=>{
    const { getFieldsValue, getFieldValue, validateFields } = this.props;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err)
      } else {
        console.log("submit", values)
      }
    })
  }
  render() {
    const { getFieldDecorator} = this.props
    return (
      <div>
        <h1>MyFormPage</h1>
        {getFieldDecorator("name", {
          rules: [nameRule],
        })(<input type="text" />)}
        {getFieldDecorator("password", { rules: [passwordRule] })(
          <input type="password" />,
        )}
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}
export default kFormCreate(MyFormPage)
