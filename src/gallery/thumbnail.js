import React from 'react';

class Thumbnail extends React.Component {
    state = {
        img: {},
    }

    componentDidMount() {
        const imageID = this.props.match.params.imageID

        fetch(`https://api.imgur.com/3/image/${imageID}`, {
            headers: {
                'Authorization': 'Client-ID 156c744b0bf614d'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        img: result.data
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <h1>{this.state.img.title}</h1>
                <p>{this.state.img.description}</p>
                <img className="art" src={this.state.img.link} alt={this.state.img.title}/>
            </div>
        )
    }

}

export default Thumbnail;