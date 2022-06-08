import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import '../Province/AddProvince.css';
import provinceService from '../../services/province/provinceService';
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeCountryId = this.onChangeCountryId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Id: '',
            Name: '',
            Code: '',
            CountryId: ''

        }
    }

    componentDidMount() {
        provinceService.postAsync()
            .then(response => {
                this.setState({
                    Id: response.data.Id,
                    Name: response.data.Name,
                    Code: response.data.Code,
                    CountryId: response.data.CountryId
                });

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeId(e) {
        this.setState({
            Code: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            Code: e.target.value
        });
    }
    onChangeCode(e) {
        this.setState({
            Code: e.target.value
        });
    }
    onChangeCountryId(e) {
        this.setState({
            Code: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            Id: this.props.match.params.id,
            Name: this.state.Name,
            Code: this.state.Code,
            CountryId: this.state.CountryId

        };
        axios.post('https://localhost:5001/api/Province/update-country/', obj)
            .then(res => console.log(res.data));
        debugger;
        this.props.history.push('/ProvinceList')
    }
    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Province Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="id" sm={2}>Id</Label>
                            <Col sm={10}>
                                <Input type="text" name="Id" value={this.state.Id} onChange={this.onChangeId}
                                    placeholder="Enter Id" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName}
                                    placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="id" sm={2}>Code</Label>
                            <Col sm={10}>
                                <Input type="text" name="Code" value={this.state.Id} onChange={this.onChangeCode}
                                    placeholder="Enter Code" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>CountryId</Label>
                            <Col sm={10}>
                                <Input type="text" name="Code" value={this.state.CountryId} onChange={this.onChangeCountryId}
                                    placeholder="Enter CountryId" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
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

export default Edit; 