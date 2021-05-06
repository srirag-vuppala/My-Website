import React from 'react'
import { Box, Text, Heading, Divider } from '@chakra-ui/react'
import BorderBox from '@/components/BorderBox'
import WorkBox from '@/components/Home/WorkBox'

const WorkExperience = () => {
    return (
        <>
        <Box p={6}>
            <BorderBox>
               <Heading fontFamily="head">Work Experience</Heading>
               <Divider/>
               <WorkBox company="TRIO Achievers" position="Student Assistant" startDate="January 2021" endDate="March 2021" description="sjfdljsldf" />
            </BorderBox>
        </Box>
        </>
    )
}

export default WorkExperience
