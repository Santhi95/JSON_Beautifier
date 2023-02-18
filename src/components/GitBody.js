import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/App.css'
const GitBody = (props) => {

    return <div className="center">
        <Box
            sx={{
                marginLeft: 4,
                paddingTop: 2,
                maxWidth: "600px",
                display: {
                    lg: 'grid'
                },
                gridTemplateColumns: '3fr 1fr',
            }}>
            <Card sx={{ marginLeft: '30px' }}>
                <CardContent>
                    <Typography variant="h6" color="text.secondary" component="div">
                        Want to check out this Project code?
                    </Typography>

                    <Paper variant="outlined" square sx={{ marginTop: 1, marginBottom: 1 }} >
                        <Box sx={{ display: "flex" }}>
                            <a href="https://github.com/Santhi95/JSON_Beautifier.git">
                                <GitHubIcon sx={{ fontSize: 70, padding: 1, margin: 2 }} />
                            </a>
                            <div style={{ margin: 12 }}>
                                <Typography variant="h6">
                                    Connect to GitHub
                                </Typography>

                                <Typography variant="subtitle2">
                                    Check out the available source code published publically,
                                    a perfect beginner project or <a href="https://github.com/Santhi95/JSON_Beautifier/archive/refs/heads/main.zip">download ZIP</a>
                                </Typography>
                            </div>
                        </Box>
                    </Paper>

                    <Typography variant="subtitle2" >
                        Implemented in React with
                        <IconButton aria-label="love" size="small" sx={{ verticalAlign: 'middle' }}>
                            <FavoriteIcon fontSize="inherit" />
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </div>
}

export default GitBody