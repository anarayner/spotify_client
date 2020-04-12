import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid} from "@mui/material";
import TrackInfo from "../../components/TrackInfo";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const next = () =>{
        if(activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }

    const back = () =>{
        setActiveStep(prev => prev-1)
    }

    return (
        <MainLayout>
             <StepWrapper activeStep={activeStep}>
                 {activeStep === 0 &&
                     <TrackInfo/>
                 }
                 {activeStep === 1 &&
                     <FileUpload file={''} accept={'image/*'} setFile={()=>({})}>
                         <Button>Upload image</Button>
                     </FileUpload>
                 }
                 {activeStep === 2 &&
                     <FileUpload file={''} accept={'image/*'} setFile={()=>({})}>
                         <Button>Upload track</Button>
                     </FileUpload>
                 }

             </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
