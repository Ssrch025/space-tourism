import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Step from "@mui/material/Step"
import { useTheme } from "@mui/material"
import Stepper from "@mui/material/Stepper"
import StepButton from "@mui/material/StepButton"

interface IStyledStepper {
    steps: string[]
    setTechnology: (state: string) => void
    orientation: 'vertical' | 'horizontal'
}

const StyledStepper = (props: IStyledStepper) => {
    const { steps, orientation, setTechnology } = props
    const theme = useTheme()
    const [activeStep, setActiveStep] = useState<number>(0)
    const totalSteps = steps.length
    const desktopSize = theme.breakpoints.up(1024)

    const handleStep = (step: number) => () => {
        setActiveStep(step)
        setTechnology(steps[step])
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % totalSteps)
        }, 10000)

        return () => clearInterval(timer)
    }, [totalSteps])

    useEffect(() => {
        setTechnology(steps[activeStep])
    }, [activeStep])

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                [desktopSize]: {
                    width: '40%',
                    justifyContent: 'start',
                }
            }}
        >
            <Stepper
                nonLinear
                connector={null}
                activeStep={activeStep}
                orientation={orientation}
            // sx={{
            //     '.MuiSvgIcon-root': {
            //         '& .MuiStepIcon-text': {
            //             color: 'black',
            //         },
            //         '&.MuiStepIcon-root': {
            //             width: '40px',
            //             [tabletSize]: {
            //                 width: '60px'
            //             }
            //             color: 'rgba(255, 255, 255, 0)',
            //             '&.Mui-active': {
            //                 color: 'space.white',
            //             }
            //         },

            //     }
            // }}
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton color="inherit" onClick={handleStep(index)} />
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default StyledStepper