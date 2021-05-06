import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import BorderBox from "@/components/BorderBox";
import WorkBox from "@/components/Home/WorkBox";

const WorkExperience = () => {
  return (
    <>
      <Box p={6}>
        <BorderBox>
          <Heading fontFamily="head">Work Experience</Heading>
          <Divider />
          <WorkBox
            company="TRIO Achievers"
            position="Student Assistant"
            startDate="January 2021"
            endDate="March 2021"
            description="sjfdljsldf"
            techStack={["HTML", "CSS"]}
          />
          <WorkBox
            company="IATPP"
            position="Student Assistant"
            companyLogo="https://res.cloudinary.com/dtbzgpkps/image/upload/v1620282769/IATPP_262ad391d3.jpg"
            companyURL="https://iatpp.calpoly.edu/"
            startDate="April 2021"
            endDate="Present"
            description="Worked on the AI4Reporters team helping them set up their website to render the articles"
            techStack={["HTML", "CSS", "JavaScript", "React", "Flask"]}
          />
        </BorderBox>
      </Box>
    </>
  );
};

export default WorkExperience;
