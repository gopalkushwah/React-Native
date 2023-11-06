import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';

{/*
    
*/}
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: props.count,
        };
      }
    incrementCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    };
    dincrementCount = () => {
        this.state.count >=1 ? this.setState({
                                    count : this.state.count - 1
                                }) 
                                : this.state.count
    };
    
    render() {
        return (
            <View style={{
                    margin: 5,
                    height : 810
                 }}>
                <Text style={{color:'red',fontSize:30}}>SectionList</Text>
                <Text style={{color:'red',fontSize:30}}>{this.state.count}</Text>


                {/* use props directaly */}
                <Text style={{color:'black',fontSize:30}}>{this.props.count}</Text>
                <Button 
                title='Increment'
                touchSoundDisabled
                onPress={this.incrementCount}
                ></Button>
                <Text></Text>
                <Button 
                title='Dicrement'
                touchSoundDisabled
                onPress={this.dincrementCount}
                ></Button>
            </View>
        )
    }
}


export default User;