import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import './AddWard.css';
import wardService from '../../services/ward/wardService';
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeDistrictId = this.onChangeDistrictId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Id: '',
            Name: '',
            Code: '',
            DistrictId: ''

        }
    }

    componentDidMount() {
        wardService.postAsync()
            .then(response => {
                this.setState({
                    Id: response.data.Id,
                    Name: response.data.Name,
                    Code: response.data.Code,
                    DistrictId: response.data.DistrictId
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
    onChangeDistrictId(e) {
        this.setState({
            Code: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const model = {
            Id: this.props.match.params.id,
            Name: this.state.Name,
            Code: this.state.Code,
            DistrictId: this.state.DistrictId

        };
        wardService.postUpdateAsync(model)
            .then(res => console.log(res.data));
        debugger;
        this.props.history.push('/WardList')
    }
    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Ward Informations</h4>
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
                            <Label for="Password" sm={2}>DistrictId</Label>
                            <Col sm={10}>
                                <Input type="text" name="Code" value={this.state.DistrictId} onChange={this.onChangeDistrictId}
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