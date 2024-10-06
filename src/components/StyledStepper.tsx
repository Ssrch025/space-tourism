import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Step from "@mui/material/Step"
import { StepLabel, styled, useTheme } from "@mui/material"
import Stepper from "@mui/material/Stepper"
import StepButton from "@mui/material/StepButton"
import Stack from "@mui/material/Stack"

interface IStyledStepper {
    steps: string[]
    direction: 'column' | 'row'
    technology: string
    setTechnology: (state: string) => void
}

const StyledDotStepper = styled('div')<{
    ownerState: { active?: boolean }
}>(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: '1px solid white',
    color: 'white',
    width: 40,
    height: 40,
    [theme.breakpoints.up(768)]: {
        width: 60,
        height: 60,
    },
    [theme.breakpoints.up(1024)]: {
        width: 80,
        height: 80,
    },
    fontFamily: theme.typography.fontFamily,
    ...theme.typography.heading4,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                backgroundColor: 'white',
                color: 'black'
            },
        },
    ],
}))

const StyledStepperSize = ({ active, label }: { active: boolean, label: number }) => {
    return <StyledDotStepper ownerState={{ active }} >
        {label.toString()}
    </StyledDotStepper>
}

const StyledStepper = (props: IStyledStepper) => {
    const { steps, direction, technology, setTechnology } = props
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
            >
                <Stack spacing={3} direction={direction} >
                    {steps.map((key, index) => (
                        <Step key={key}>
                            <StepButton
                                color="inherit"
                                onClick={handleStep(index)}
                            >
                                <StepLabel StepIconComponent={() =>
                                    StyledStepperSize({
                                        active: key === technology,
                                        label: index + 1
                                    })}
                                />
                            </StepButton>
                        </Step>
                    ))}
                </Stack>
            </Stepper>
        </Box>
    )
}

export default StyledStepper