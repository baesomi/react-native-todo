import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import {theme} from './theme';
import Input from './components/Input';

/*styled.View*/
const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
font-size: 40px;
font-weight:600;
color: ${({theme}) => theme.main};
align-self: flex-start;
margin: 0px 20px;
`;


export default function App(){
    const [newTask, setNewTask] = useState('');

    const _addTask = () => {
        alert(`Add: ${newTask}`);
        setNewTask('');
    }

    const _handleTextChange = text => {
        setNewTask(text);
    }

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="light-content"
                backgroundColor={theme.background}/>
                <Title>TODO List</Title>
                <Input placeholder="+ Add a Task"
                        value={newTask}
                        onChangeText={_handleTextChange}
                        onSubmitEditing={_addTask} 
                />
            </Container>
        </ThemeProvider>
    );
}