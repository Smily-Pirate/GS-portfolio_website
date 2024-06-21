import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    container:{
        maxWidth: '600px',
        // height: '200px',
        // width: '250px',
        // backgroundColor: 'greenyellow',
        padding: '20px',
        // alignContent: 'center',
        margin: '0 auto',
        fontFamily: 'cursive' // Changes the font of text of the continer

    },

    button:{
        backgroundColor: "red", // Color background of the submit button
        cursor: 'pointer', // hand is shown when hovered
        color: '#fff', // Text color
        borderRadius: '20px', // Changes border with respect to px
        border: 'none', 
        fontSize: '', // Don't know
        padding: '10px 20px', // Changes padding, similar to border

    },

    form:{
        display: 'flex',
        flexDirection: 'column',
    },

    formGroup:{
        marginBottom: '15px',
        

    },

    label:{
        marginBottom: '5px',
        fontWeight: 'bold',
        
    },

    input:{
        padding:'10px',
        fontSize: '16px',
        borderRadius: '20px',
        border: '2px solid #ccc', 
    },

    text:{
        padding: '10px', // changes the padding
        fontSize: '16px', // Changes font
        color: '#ccc', // Changes font color
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',



    },



}
);

const ContactMe: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h2>Contact-Me</h2>
            <form className={classes.form}>
                <div className={classes.formGroup} >
                    <label className={classes.label}>Name</label>
                    <input className={classes.input}></input>
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label}>Email</label>
                    <input className={classes.input}></input>
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label}>Message</label>
                    <textarea className={classes.text}></textarea>
                </div>

                <button type="submit" className={classes.button} >Submit</button>
            </form>
        </div>
    )
};



export default ContactMe;
