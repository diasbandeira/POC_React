import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { getSteps, getStepContent } from '../scripts/steps';

function Buttons(props) {
    const activeStep = props.activeStep
    const setActiveStep = props.setActiveStep;
    const skipped = props.skipped;
    const setSkipped = props.setSkipped;

    const steps = getSteps();
    const handleReset = () => {
        setActiveStep(0);
      };
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const isStepOptional = (step) => {
        return step === 1;
      };

      const isStepSkipped = (step) => {
        return skipped.has(step);
      };

      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };
      const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
  return (
    <div className="App">
        <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={"classes.instructions"}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={"classes.button"}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={"classes.instructions"}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={"classes.button"}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={"classes.button"}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={"classes.button"}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Buttons;