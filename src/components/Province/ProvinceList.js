import React, { Component } from 'react';
import Table from './Table';
import provinceService from '../../services/province/provinceService';

export default class ProvinceList extends Component {

    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        provinceService.getListAsync()
            .then(response => {
                this.setState({ business: response.data });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { business}=this.state;
        return (
            <div>
                <h4 align="center">Province List</h4>
                <Table dataSource={business} key='tbl' />
            </div>
        );
    }
}  