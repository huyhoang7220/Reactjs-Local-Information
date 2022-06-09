import React from 'react';
import './AddProvince.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import provinceService from '../../services/province/provinceService';

class AddProvince extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Code: '',
            CountryId: ''
        }
        this.AddProvince = this.AddProvince.bind(this)
    }
    AddProvince = () => {
        const model = {
            Name: this.state.Name,
            Code: this.state.Code, CountryId: this.state.CountryId
        }; 
        provinceService.postAsync(model)
        .then(json => {
            if (json.success) {
                alert("Data Save Successfully");
                this.props.history.push('/ProvinceList')
            }
            else {
                alert('Data not Saved');
                this.props.history.push('/ProvinceList')
            }
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Province Informations</h4>
                <Form className="form">
                    <Col>
                        {/* <FormGroup row>
                            <Label for="name" sm={2}>Id</Label>
                            <Col sm={10}>
                                <Input type="text" name="Id" onChange={this.handleChange} value={this.state.Id} placeholder="Enter Id" />
                            </Col>
                        </FormGroup> */}
                        <FormGroup row>
                            <Label for="Name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Code</Label>
                            <Col sm={10}>
                                <Input type="text" name="Code" onChange={this.handleChange} value={this.state.Code} placeholder="Enter Code" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>CountryId</Label>
                            <Col sm={10}>
                                <Input type="text" name="CountryId" onChange={this.handleChange} value={this.state.CountryId} placeholder="Enter CountryId" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddProvince} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }

}

export default AddProvince;