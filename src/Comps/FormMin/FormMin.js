import React, { useContext } from 'react';
import FirstStep from '../FirstStep/FirstStep';
import {StepLabel,  Stepper, Step} from '@material-ui/core'
import {multiStepContext} from '../StepContext/StepContext'
import Header from '../Header/Header';
import PolicyInformation from "../PolicyInformation/PolicyInformation"
import EmployeeBenefits from '../EmployeeBenefits/EmployeeBenefits';
import PrimaryLocation from '../PrimaryLocation/PrimaryLocation';
import UndoerlyingInsurance from '../UndoerlyingInsurance/UndoerlyingInsurance';
import UnderlYingInsuCon from '../UnderlYingInsuCon/UnderlYingInsuCon';
import CareCustodyControl from '../CareCustodyControl/CareCustodyControl';
import Vehicles from '../Vehicles/Vehicles';
import AdditionalExposures from '../AdditionalExposures/AdditionalExposures';
import AdditionalExposuresCont from '../AdditionalExposuresCont/AdditionalExposuresCont';
import Remarks from '../Remarks/Remarks'
import FeaudStatements from '../FeaudStatements/FeaudStatements';
import Signature from '../Signature/Signature';


const FormMin = () => {
    const {currentStep,setStep, finalData, setUserData, userData} = useContext(multiStepContext);
    const handleBlur = e =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e =>{

        console.log(userData);
        setUserData('')
        setStep(1)
    }

    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep handleBlur={handleBlur}/>
            case 2:
                return <PolicyInformation handleBlur={handleBlur}/>
            case 3:
                return <EmployeeBenefits handleBlur={handleBlur} />
            case 4:
                return <PrimaryLocation handleBlur={handleBlur} />
            case 5:
                return <UndoerlyingInsurance handleBlur={handleBlur}/>
            case 6:
                return <UnderlYingInsuCon handleBlur={handleBlur}/>
            case 7:
                return <CareCustodyControl handleBlur={handleBlur} />
            case 8:
                return <Vehicles handleBlur={handleBlur}/>
            case 9:
                return <AdditionalExposures  handleBlur={handleBlur} />
            case 10:
                return <AdditionalExposuresCont handleBlur={handleBlur}/>
            case 11:
                return <Remarks handleBlur={handleBlur}/>
            case 12:
                return <FeaudStatements  handleBlur={handleBlur}/>
            case 13:
                return <Signature handleBlur={handleBlur} handleSubmit={handleSubmit}/>
        }
    }

    return (
        <>
            <Header/>
            <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(currentStep)}
        </>
    );
};

export default FormMin;