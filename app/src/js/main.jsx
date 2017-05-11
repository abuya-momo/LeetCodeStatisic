var React = require('react');
// var ReactDOM = require('react-dom');
var CSS = require('../less/table.scss');

var testES6 = (x, y) => {
	return x + y
}

var val = testES6(6, 10);
console.log(val);

var Hhh = React.createClass({
	render: function () {
		return (<div>2333</div>);
	}
});

ReactDOM.render(<Hhh />, document.getElementById('test'));
