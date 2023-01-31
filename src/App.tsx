import React, { Component } from "react";
import styled from "styled-components";
import './styles/App.css';

const Base = styled.div`
    padding:10px;
    width:400px;
    margin:0 auto;
`;

function App() {
    return (
        <Base>
            <h1>My React App!</h1>
        </Base>
    )


}

export default App;