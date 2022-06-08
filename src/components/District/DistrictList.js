import React, { Component } from 'react';
import Table from './Table';
import districtService from '../../services/district/districtService';

export default class ProvinceList extends Component {

    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        districtService.getListAsync()
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
                <h4 align="center">District List</h4>
                <Table dataSource={business} key='tbl' />
            </div>
        );
    }
}  