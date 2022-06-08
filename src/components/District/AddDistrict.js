import React from 'react';
import axios from 'axios';
import './AddDistrict.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import districtService from '../../services/district/districtService';

class AddDistrict extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Id: '',
            Name: '',
            Code: '',
            ProvinceId: ''
        }
    }
    AddDistrict = () => {
        const model = {
            Id: this.state.Id, Name: this.state.Name,
            Code: this.state.Code, ProvinceId: this.state.ProvinceId
        };
        districtService.getListAsync(model).then(res => {
            const { data, success, message } = res;
            if (success) {
                // notify success
            } else {
                // notify failed
            }
        })
        axios.post('https://localhost:5001/api/District/post-district/', {
            Id: this.state.Id, Name: this.state.Name,
            Code: this.state.Code, ProvinceId: this.state.ProvinceId
        })
            .then(json => {
                if (json.data.Status === 'Success') {
                    console.log(json.data.Status);
                    alert("Data not Saved");
                    this.props.history.push('/DistrictList')
                }
                else {
                    alert('Data Save Successfully');
                    debugger;
                    this.props.history.push('/DistrictList')
                }
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">District Informations</h4>
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
                            <Label for="Password" sm={2}>ProvinceId</Label>
                            <Col sm={10}>
                                <Input type="text" name="ProvinceId" onChange={this.handleChange} value={this.state.ProvinceId} placeholder="Enter ProvinceId" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddDistrict} className="btn btn-success">Submit</button>
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

export default AddDistrict;