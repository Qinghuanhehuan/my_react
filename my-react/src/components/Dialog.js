import React, { Component } from 'react'
import {createPortal} from 'react-dom'

export default class Dialog extends Component {
  constructor(props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement("div")
    doc.body.appendChild(this.node)
  }
  componentWillUnmount(){
    window.document.body.removeChild(this.node)
  }
  render() {
    const { hideDialog,children,hide} = this.props
    return createPortal(
      <div className="dialog" style={{visibility:hide?'hidden':''}}>
        <h1>Dialog</h1>
        <button onClick={hideDialog}>close</button>
        {children}
      </div>,
      this.node
    )
  }
}
