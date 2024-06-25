import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    container:{
        // maxWidth: '1000px',
        height: '640px',
        width: '1039px',
        backgroundColor: '#f3dcae',
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
        // marginBottom: '5px',
        width: '110px',
        fontWeight: 'bold',
        position: 'relative',
        
    },

    input:{
        padding:'10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '2px solid #ccc', 
        // position: 'fixed',
        flex: '1',
    },

    text:{
        padding: '10px', // changes the padding
        fontSize: '16px', // Changes font
        color: '#ccc', // Changes font color
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',



    },



}
);

const ContactMe: React.FC = () => {
    const classes = useStyles();

    return (
        // This is the continer div with sytle .container
        <div className={classes.container}> 
            <h2  style={{color: 'red', textAlign: 'center'}}>Email me.</h2>
            <h5 style={{textAlign: 'center'}}>Let's work together!
                Please feel free to send me a message.
                I'll get in touch with you as soon as possible.
            </h5>
            <form className={classes.form}>
                <div className={classes.formGroup} >
                    <label className={classes.label}>FirstName</label>
                    <input className={classes.input} type="Text" required></input>
                </div>
                <div>
                    <label className={classes.label}>LastName</label>
                    <input className={classes. input} type="Text" required></input>
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label}>EmailAddress</label>
                    <input className={classes.input} type="Email" required></input>
                </div>

                <div>
                    <label className={classes.label}>PhoneNumber</label>
                    <input className={classes.input} type="Number" required></input>
                </div>
                <div className={classes.formGroup}>
                    <label className={classes.label}>Write here</label>
                    <textarea className={classes.text} rows={8} cols={90} maxLength={250} required>Please write here</textarea>
                </div>

                <button type="submit" className={classes.button} >Submit</button>
            </form>
        </div>
    )
};



export default ContactMe;
