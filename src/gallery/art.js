import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class Art extends React.Component {

    render() {
        return (
            <Card className="art-container">
                <CardActionArea>
                    <CardMedia component="img" height="140" image={this.props.data.link}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.props.data.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

}

export default Art;
