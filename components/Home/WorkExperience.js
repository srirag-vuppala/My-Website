import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import BorderBox from "@/components/BorderBox";
import WorkBox from "@/components/Home/WorkBox";

const WorkExperience = ({ categories }) => {
  return (
    <>
      <Box px={6} py={1}>
        <BorderBox>
          <Heading fontFamily="head">Work Experience</Heading>
          <Divider />

          <WorkBox
            company="Project Jupyter"
            position="Software Engineering Intern"
            companyLogo="https://res.cloudinary.com/dtbzgpkps/image/upload/v1628226587/Jupyter_logo_svg_2ce7281cda.png"
            companyURL="https://jupyter.org/"
            startDate="May 2021"
            endDate="Present"
            description={["Creating a RTC commenting and chat extension for the JupyterLab v3 (Similar to Google Docs)","Presented our work at SciPy 2021 to  400+ attendees to encourage engagement.", "Working primarily with technologies involving React, Lumino and Y.js in Typescript"]}
            techStack={["React", "HTML", "CSS", "Lumino", "Y.js", "Typescript" ]}
            categories={categories}
          />

          <WorkBox
            company="Celebrate!"
            position="Full Stack Software Engineering Intern"
            companyLogo="https://res.cloudinary.com/dtbzgpkps/image/upload/v1620884672/celebrate_c197594205.jpg"
            companyURL="https://careboxgifting.com/"
            startDate="August 2020"
            endDate="December 2020"
            description={["Created a signup flow for the main website containing web authentication.","Implemented with JavaScript, Node.js, React and MongoDB while working in an Agile Scrum methodology."]}
            techStack={["HTML", "CSS", "Node.js", "MongoDB", "React"]}
            categories={categories}
          />

          <WorkBox
            company="IATPP"
            position="Student Research Assistant"
            companyLogo="https://res.cloudinary.com/dtbzgpkps/image/upload/v1620282769/IATPP_262ad391d3.jpg"
            companyURL="https://iatpp.calpoly.edu/"
            startDate="April 2021"
            endDate="Present"ya
            description={["Worked on the AI4Reporters team helping them set up their website to render the articles","Built a tagging system for the article inventory", "Implemented with JavaScript, React, Django, Styled Components"]}
            techStack={["HTML", "CSS", "JavaScript", "React", "Django", "Linux", "CI/CD"]}
            categories={categories}
          />

          {/* <WorkBox
            company=""
            position=""
            companyLogo=""
            companyURL=""
            startDate=""
            endDate=""
            description={["",""]}
            techStack={["HTML", "CSS", "JavaScript", "React", "Django", "Linux", "CI/CD"]}
            categories={categories}
          /> */}

          <WorkBox
            company="Cal Poly BEACoN Research Program | Cal Poly LSAMP Research Program"
            position="Fellowship Student Researcher"
            companyLogo=""
            companyURL=""
            startDate="December 2020"
            endDate="Present"
            description={["Serving as a paid fellowship student researcher on cardiac tissues under Cal Poly professor Dr. Joyce Lin","Building a platform with Python using Numpy, Pandas, MatPlotLib to simulate electrical impulses through cardiac tissue at a cellular level by implementing model mean field equations to study and analyze the parameters causing arrhythmia.", "Selected to receive funding from a highly selective (< 5 grants available) LSAMP Research Program."]}
            techStack={["Python", "Pandas", "Matplotlib", "Numpy", "Linux" ]}
            categories={categories}
          />

          <WorkBox
            company="Cal Poly DSAI"
            position="Fellowship Student Researcher"
            companyLogo=""
            companyURL="https://data.calpoly.edu/"
            startDate="October 2020"
            endDate="Present"
            description={["Serving as a paid fellowship student researcher on Infrastructure/IT Management under Cal Poly professor Dr. Foaad Khosmood.","Eliciting and deciphering input from relevant stakeholders, including Cal Poly faculty, on how to properly update the inventory of computer resources (databases and cloud credits).", "Writing bash scripts to automate user creation enabled with authentication through SSH keys.", "Created and maintained a mySQL database for GATO365 (Faculty Project) to be hosted on a server.", "Administering servers and architecting a LAMP application with Drupal 9."]}
            techStack={["HTML", "CSS", "PHP", "Linux", "MySQL"]}
            categories={categories}
          />

          <WorkBox
            company="TRIO Achievers"
            position="Student Assistant"
            companyLogo="https://res.cloudinary.com/dtbzgpkps/image/upload/v1620330861/T_Ri_O_fe1e2b707b.jpg"
            companyURL="https://trioachievers.calpoly.edu/"
            startDate="January 2021"
            description={["Assisting the TRIO Achievers program coordinators with managing their website using Drupal CMS, adhering to federal guidelines.","Built data pathways between the backend database (Blumen) and Drupal for enhanced user access and data transparency."]}
            endDate="Present"
            techStack={["HTML", "CSS"]}
            categories={categories}
          />
        </BorderBox>
      </Box>
    </>
  );
};




export default WorkExperience;
