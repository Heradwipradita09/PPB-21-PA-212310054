import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class No4RCC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity: {
                npm: 212310035,
                firstName: 'Hera',
                middleName: '-',
                lastName: 'Dwipradita'
            },
            educations: [
                { id: 1, school: 'SDN 1 Kota Bogor' },
                { id: 2, school: 'SMPN 1 Kota Bogor' },
                { id: 3, school: 'SMAN 1 Kota Bogor' }],
            mobile_phone: '089612321938',
            email: '212310054@student.ibik.ac.id',
            gender: 'F',
            tall_body: 162,
            weight_body: 65
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderWidth: 1, padding: 10, width: 300 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>No.4 RCC</Text>
                    <Text style={{ fontWeight: 'bold' }}>Identity</Text>
                    <Text>NPM : {this.state.identity.npm}</Text>
                    <Text>First Name : {this.state.identity.firstName}</Text>
                    <Text>Middle Name : {this.state.identity.middleName}</Text>
                    <Text>Last Name : {this.state.identity.lastName}</Text>
                    <Text style={{ fontWeight: 'bold' }}>Educations</Text>
                    {this.state.educations.map((education) => {
                        return (
                            <Text>{education.id}. {education.school}</Text>
                        )
                    })}
                    <Text>Mobile Phone : {this.state.mobile_phone}</Text>
                    <Text>Email : {this.state.email}</Text>
                    <Text>Gender : {this.state.gender}</Text>
                    <Text>Tall Body : {this.state.tall_body}</Text>
                    <Text>Weight Body : {this.state.weight_body}</Text>
                </View>
            </View>
        )
    }
}

export default No4RCC