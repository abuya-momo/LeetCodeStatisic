import MainTableSolveClass from './MainTableSolveClass.jsx';//解决/思路等级小标签
export class MainTable extends React.Component {
	constructor () {
		super();
		this.diffcultyTransform = {//难度字典码转换表
			'0': 'Easy',
			'1': 'Medium',
			'2': 'Hard'
		};
	}
	render () {
		var that = this;
		var trs = this.props.data1.map(function (item, index) {
			var tags = item.tag.map(function (tag) {
				return <span className="tag">{ tag }</span>;
			});
			return (
				<tr>
					<td className="td-left">{ item.num }</td>
					<td>{ item.name }</td>
					<td>{ item.nameInChinese }</td>
					<td>{ that.diffcultyTransform[String(item.diffculty)] }</td>
					<td><MainTableSolveClass solveClass={ item.solveClass } /></td>
					<td><MainTableSolveClass solveClass={ item.thinkClass } /></td>
					<td className="td-left">{ tags }</td>
				</tr>
			);
		});
		return (
			<div>
				<table className="mainTable">
					<thead>
						<tr>
							<th>序号</th>
							<th>名称</th>
							<th>中文</th>
							<th>难度</th>
							<th>解出</th>
							<th>想出</th>
							<th>标签</th>
						</tr>
					</thead>
					<tbody>{ trs }</tbody>
				</table>
			</div>
		);
	}
};

