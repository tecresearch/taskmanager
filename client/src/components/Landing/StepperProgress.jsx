import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';
 

export const ProjectProgressStepper= () => (
  <div className="custom-progress-stepper">
    <ProgressStepper aria-label="Project Task Progress Stepper">
      {/* Step 1: Campus Project Connect */}
      <ProgressStep
        variant="success"  // Completed
        id="step1"
        titleId="step1-title"
        aria-label="Completed step, Campus Project Connect"
      >
        <h3>Campus Project Connect</h3>
       
      </ProgressStep>

      {/* Step 2: Task Manager */}
      <ProgressStep
        variant="info"  // Current
        isCurrent
        id="step2"
        titleId="step2-title"
        aria-label="Current step, Task Manager"
      >
        <h3>Task Manager</h3>
     
      </ProgressStep>

      {/* Step 3: Domain Management System */}
      <ProgressStep
        variant="pending"  // Pending
        id="step3"
        titleId="step3-title"
        aria-label="Pending step, Domain Management System"
      >
        <h3>Domain Management System</h3>
       
      </ProgressStep>

      {/* Step 4: News Website */}
      <ProgressStep
        variant="pending"  // Pending
        id="step4"
        titleId="step4-title"
        aria-label="Pending step, News Website"
      >
        <h3>News Website</h3>
       
      </ProgressStep>

      {/* Step 5: TCA Service Portal */}
      <ProgressStep
        variant="pending"  // Pending
        id="step5"
        titleId="step5-title"
        aria-label="Pending step, TCA Service Portal"
      >
        <h3>TCA Service Portal</h3>
        
      </ProgressStep>

      {/* Step 6: IoT Based Smart EVM using Fingerprint Sensor */}
      <ProgressStep
        variant="pending"  // Pending
        id="step6"
        titleId="step6-title"
        aria-label="Pending step, IoT Based Smart EVM using Fingerprint Sensor"
      >
        <h3>IoT Based Smart EVM using Fingerprint Sensor</h3>
         
      </ProgressStep>
    </ProgressStepper>
  </div>
);
