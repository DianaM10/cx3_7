var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
  render: function() {
    var commentsComponents = this.props.comments.map(function (commentObject) {
      return (
        <Comment 
        author={commentObject.author}
        key={commentObject.id}>
        {commentObject.text}
        </Comment>)
    });

    return(
      <div className="comment-list">
        {commentsComponents}
      </div>
      )
  }
});

module.exports = CommentList;