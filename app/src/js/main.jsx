import { MainTable } from './MainTable.jsx';

var data = require('../../data/subject-data.json');

var CSS = require('../less/table.scss');

ReactDOM.render(<MainTable data1={data}/>, document.getElementById('test'));
