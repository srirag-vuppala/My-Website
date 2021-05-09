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
            companyLogo="https://res.cloudinary.com/dtbzgpkps/image/upload/v1620330861/T_Ri_O_fe1e2b707b.jpg"
            companyURL="https://trioachievers.calpoly.edu/"
            startDate="January 2021"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            endDate="March 2021"
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
