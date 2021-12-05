import React from 'react';
import Art from "./art";
import "./gallery.css"
import {Autocomplete, TextField} from "@mui/material";

const types = ["Dog", "Cat", "Awake", "Asleep"]
const gallery = [
        {
            link : "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
            title : "cat awake",
            tags : ["Cat", "Awake"]
        },
        {
            link : "https://images.immediate.co.uk/production/volatile/sites/4/2021/05/sleeping-cat-27126ee.jpg?quality=90&resize=768,574",
            title : "cat asleep",
            tags : ["Cat", "Asleep"]
        },
        {
            link : "https://www.rd.com/wp-content/uploads/2019/07/shutterstock_1181348773-scaled.jpg?fit=700,1024",
            title : "dog asleep",
            tags : ["Dog", "Asleep"]
        },
        {
            link : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            title : "dog awake",
            tags : ["Dog", "Awake"]
        }
    ]

class Gallery extends React.Component {
    state = {
        tags: []
    }

    onTypesChange = (event, values) => {
        this.setState({
            tags: values
        });
    }

    render() {
        return (
            <div>
                <Autocomplete
                    sx={{ width: '75%', margin: 'auto', 'padding-bottom': "25px" }}
                    multiple
                    options={types}
                    onChange={this.onTypesChange}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <TextField {...params} label="filter by type" placeholder="type" />
                    )}
                />
                <div className={"gallery"}>
                    {gallery
                        .filter(data => {
                            return this.state.tags.length === 0 || this.state.tags.some(tag => data.tags.includes(tag))
                        })
                        .map(data => <Art data={data} />)}
                </div>
            </div>
        )
    }
}

export default Gallery;
