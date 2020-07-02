import React from 'react';
import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import { getSteps, } from '../scripts/steps';

function Steps(props) {
    const activeStep = props.activeStep
    const skipped = props.skipped;
    const steps = getSteps();
    const isStepOptional = (step) => {
        return step === 1;
      };
    
    const isStepSkipped = (step) => {
    return skipped.has(step);
    };
  return (
    <div className="App">
        <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

export default Steps;
