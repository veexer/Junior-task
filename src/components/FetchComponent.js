import React, { Component } from 'react'
const { Octokit } = require("@octokit/core");


export class FetchGit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Veexer',
            img: ''
        }
    }
    getData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            fetch('https://api.github.com/users/veexer')
                .then(response => response.json())
                .then(data => localStorage.setItem('imgurl', data.avatar_url));
            this.setState({
                data: 'fetched'
            })
        }, 1000)
    }
    async componentDidMount() {
        this.getData();
    }
    render() {
        let name = this.state.name;
        let imgaddress = localStorage.getItem('imgurl');
        let fetch = this.state.data;
        let isFetched;
        if (imgaddress != null && imgaddress != undefined && fetch === 'fetched') {
            isFetched = <img src={`${imgaddress}.jpg`} style={{ marginLeft: '5vw', width: '300px', height: '300px' }} alt='GitHub picture' />
        } else {
            isFetched = <img src={`https://www.dictionary.com/e/wp-content/uploads/2018/05/doggo-300x300.jpg`} style={{ marginLeft: '5vw' }} alt='GitHub picture' />
        }
        return (
            <div>
                <h1 style={{ marginLeft: '5vw' }}>Hello {name}!</h1>
                {isFetched}
            </div>
        );
    }
}

