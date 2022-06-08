import React, { Component } from 'react';
import Table from './Table';
import wardService from '../../services/ward/wardService';

export default class WardList extends Component {

    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        wardService.getListAsync()
            .then(response => {
                this.setState({ business: response.data });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { business } = this.state;
        return (
            <div>
                <h4 align="center">Ward List</h4>
                <Table dataSource={business} key='tbl' />
            </div>
        );
    }
}  