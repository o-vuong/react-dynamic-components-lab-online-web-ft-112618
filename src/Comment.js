// add Comment component here

import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return <div className="comments">{this.props.commentText}; </div> 
    }
} 

export default Comment;