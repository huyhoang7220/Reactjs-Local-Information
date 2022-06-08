import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import '../Country/AddCountry.css';
import countryService from '../../services/country/countryService';
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.onChangId = this.onChangId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Id: '',
            Name: '',
            Code: ''

        }
    }

    componentDidMount() {
       countryService.postAsync()
            .then(response => {
                this.setState({
                    Id: response.data.Id,
                    Name: response.data.Name,
                    Code: response.data.Code
                });

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangId(e) {
        this.setState({
            Id: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeCode(e) {
        this.setState({
            Code: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        countryService.postUpdateAsync()
            .then(res => console.log(res.data));
        debugger;
        this.props.history.push('/CountryList')
    }
    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Country Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="id" sm={2}>Id</Label>
                            <Col sm={10}>
                                <Input type="text" name="Id" value={this.state.Id} onChange={this.onChangId}
                                    placeholder="Enter Id" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" value={this.state.Name} onChange={this.onChangeName
                                } placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Code</Label>
                            <Col sm={10}>
                                <Input type="text" name="Code" value={this.state.Code} onChange={this.onChangeCode}
                                    placeholder="Enter Code" />
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