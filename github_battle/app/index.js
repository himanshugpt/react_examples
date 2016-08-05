var React = require("react")
var ReactDOM = require("react-dom")

var HelloWorls = React.createClass({
  render: function(){
    return (
      <div> Hello World! React-js</div>
    )
  }
});

ReactDOM.render(<HelloWorls />, document.getElementById('app'))
