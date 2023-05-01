import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './widgets/Header'
import { ScrollView } from 'react-native'
import Story from './widgets/Story'
import Feed from './widgets/Feed'
import { Users } from './data/Users'

export class Home extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Story users={Users} />
                <Feed users={Users} />
            </ScrollView>
        )
    }
}

export default Home