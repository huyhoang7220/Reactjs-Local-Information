import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import districtService from '../../services/district/districtService';
class Table extends Component {
  constructor(props) {
    super(props);

    this.renderRowData = this.renderRowData.bind(this)
    this.delete = this.delete.bind(this)
  }

  delete = (id) => {
    districtService.deleteAsync(id)
      .then(json => {
        if (json.success) {
          alert('Record deleted successfully!!');
        }
      })
  }
  renderRowData(rowData) {
    return (<tr key={rowData.id}>
      <td>
        {rowData.id}
      </td>
      <td>
        {rowData.name}
      </td>
      <td>
        {rowData.code}
      </td>
      <td>
        {rowData.provinceId}
      </td>
      <td>
        <Link to={"/edit/" + rowData.id} className="btn btn-success">Edit</Link>
      </td>
      <td>
        <button type="button" onClick={()=>this.delete( rowData.id)} className="btn btn-danger">Delete</button>
      </td>
    </tr>)
  }
  render() {
    const { dataSource } = this.props;
    return (
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Code</th>
            <th>ProvinceId</th>
            <th colSpan="4">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map(item=>this.renderRowData(item))}
        </tbody>
      </table>

    );
  }
}

export default Table;  