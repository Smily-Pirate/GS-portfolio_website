import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({

    continer:{
        height: '640',
        width: '1039',
        backgroundColor: '#f3dcae',
        fontFamily: 'cursive',
    },

});

const Blog: React.FC = () => {
    const classes = useStyles();

    return(
        <div className={classes.continer}>
            <h2 style={{color: 'red', textAlign: 'center'}}>Blog</h2>
        </div>
    )

};

export default Blog;