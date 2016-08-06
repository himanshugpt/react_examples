var USER_DATA = {
  name: 'Himanshu Gupta',
  username: 'himanshugpt',
  image: 'https://avatars3.githubusercontent.com/u/1542568?v=3&u=77f4f4bfd5cb8cd40324b583bc4c5dc98d4e2cc5&s=140'
}

var React = require('react');
var ReactDOM = require('react-dom');

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

var Link = React.createClass({
  changeURL: function(){
    window.location.replace(this.props.href)
  },
  render:function(){
      return (
        <span
          style={{'color':'blue', 'cursor':'pointer'}}
          onClick={this.changeURL}>
          {this.props.children}
          </span>
      )
  }
});

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
