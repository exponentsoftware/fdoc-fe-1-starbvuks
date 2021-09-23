import React from 'react'
import styled from 'styled-components'

const Album = () => {
    return (
        <Main>
            <img src="/ksg.png" alt="ksg" />
            <Title>Kids See Ghosts</Title>
            <Artist>Kanye West & Kid Cudi</Artist>
        </Main>
    )
}

export default Album

const Main = styled.div`
    width: 15vw;
    background-color: #272727;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1rem;
    padding: 20px;
`

const Title = styled.span`
    margin-top: 10px;
    font-weight: 700;
    font-size: 1.2vw;
    color: #FBFBFB;
    `
    
    const Artist = styled.span`
    margin-top: 6px;
    color: #B3B3B3;
    text-decoration: underline;
`