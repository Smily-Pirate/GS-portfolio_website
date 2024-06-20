import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },

    button:{
        // fontSize: '20px',
        // padding: '10px 20px',
    },
}
);

const InConstruction: React.FC = () => {
    const classes = useStyles();

    const handleClick = () => {
        window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=o5RSG82MdUBXNORg';
    }

    return (
        <div className={classes.container}>
            <Button
            variant="contained"
            // color="primary"
            // className={classes.button}
            onClick={handleClick}
            >
                Under Construction
            </Button>

        </div>
    )
};



export default InConstruction;
