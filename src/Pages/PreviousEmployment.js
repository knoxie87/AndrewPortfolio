import { List, ListItem, ListItemIcon } from "@mui/material";
import GlassboxImage from "../assets/Logo/GlassBox.jfif";
import FingermarkImage from "../assets/Logo/FingerMark.jfif";
import BuildAndLiftImage from "../assets/Logo/BuildLiftLogo.png";
import { AiOutlineCaretRight } from "react-icons/ai";

const PreviousJobs = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-5/6 sm:w-1/2">
        <div className="mt-10 text-center sm:text-left">
          <h3>Experience</h3>
        </div>

        <div className="flex sm:mt-10 sm:gap-0 gap-2 sm:flex-row flex-col ">
          <div className="flex items-center h-full">
            <img className=" sm:w-60 w-40" src={GlassboxImage}></img>
          </div>
          <div className="w-full">
            <h5>Junior Developer at Glassbox</h5>
            <List>
              <ListItem style={{ padding: 0 }}>
                <p>
                  Working with the GlassBox team to help develop software to
                  monitor and interact with fuel sites.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Full stack development working on both Angular&nbsp;frontend
                  and C# &nbsp;ASP .NET &nbsp;backend applications.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Monitoring and developing REST APIs using asp.net core to
                  interact with a backend SQL Server Database.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Creating reports using Telerik report viewer to match customer
                  requirements.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Using Azure DevOps ticket system to handle feature
                  requirements and bugs.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Perform functional testing to match feature requirements and
                  use debugging tools to isolate and fix bugs.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Backend database development using tools such as&nbsp;SQL
                  Server Management Studio to create stored procedures to
                  retrieve and insert data into an MS SQL Server database.
                </p>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="flex mt-10 sm:flex-row sm:gap-0 gap-2 flex-col">
          <div className="flex items-center h-full">
            <img className=" sm:w-60 w-40" src={FingermarkImage}></img>
          </div>
          <div className="w-full">
            <h5>Intern Developer at Fingermark</h5>
            <List>
              <ListItem style={{ padding: 0 }}>
                <p>
                  Working with the Front-End&nbsp;EyeCue&nbsp;team in adding
                  features to help monitor&nbsp;vehicles in a restaurant
                  drive-thru.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Following company coding conventions, and addressing PR
                  feedback while using&nbsp;BitBucket as a CI/CD pipeline.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Working with React.JS, GraphQL APIs, and Amazon Web services
                  such as AWS lambda and Amazon Dynamo DB.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Perform unit tests using Jest and UI testing using Cypress.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Working in an agile environment, being a part of daily
                  stand-up meetings.
                </p>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="flex mt-10 sm:flex-row sm:gap-0 gap-2 flex-col">
          <div className="flex items-center h-full">
            <img className=" sm:w-60 w-40" src={BuildAndLiftImage}></img>
          </div>
          <div className="w-full">
            <h5>Build and Lift Website Project</h5>
            <List>
              <ListItem style={{ padding: 0 }}>
                <p>
                  Helping recreate a company website by developing multiple
                  angular components for my third-year industry project.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Maintaining an Agile Kanban board to manage developer tickets
                  throughout project development.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Adding PRs (pull requests) and addressing feedback from a
                  senior developer.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>
                  Building an API application using Hapi to interact with Docker
                  software containing a backend MySQL database.
                </p>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AiOutlineCaretRight className=" text-2xl" />
                </ListItemIcon>
                <p>Documenting API endpoints using Swagger.</p>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousJobs;
