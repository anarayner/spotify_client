import React, {FC} from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";
import styles from '../styles/Create.module.scss'

interface StepWrapperProps{
    activeStep: number;
    children: React.ReactNode;
}
const steps = ['Track information', 'Upload picture', 'Upload track']
const StepWrapper: FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
              <Stepper className={styles.stepper}
                  activeStep={activeStep}>
                  {steps.map((step, index) =>
                      <Step key={index}
                            className={styles.step}
                            completed={activeStep > index}
                      >
                          <StepLabel className={styles.label}>
                              {step}
                          </StepLabel>
                      </Step>
                  )}
              </Stepper>
            <Grid container className={styles.wrapper} justifyContent={'center'}>
                 <Card className={styles.card}>
                     {children}
                 </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;
