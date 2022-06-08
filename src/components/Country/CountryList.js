import React, { Component } from 'react';
import Table from './Table';
import countryService from '../../services/country/countryService';

export default class CountryList extends Component {

    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        countryService.getListAsync()
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
                <h4 align="center">Country List</h4>
                <Table dataSource={business} key='tbl' />
            </div>
        );
    }
}  