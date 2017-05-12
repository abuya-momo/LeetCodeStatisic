//子组件SolveClass
export default class MainTableSolveClass extends React.Component {
	constructor () {
		super();
		this.jsxClassArr = [
			<span className="unsolve"></span>,          //0
			<span className="solve-notbetter"></span>,  //1
			<span className="solve-better"></span>      //2
			//想要加一个未定义
		];
	}
	render () {
		return (this.jsxClassArr[this.props.solveClass]);
	}
}
