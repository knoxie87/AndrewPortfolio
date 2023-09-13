import { useEffect, useState } from "react";
import React from 'react'
import ImageCarousel from "./Components/ImageCarousel";
import Zoom from '@mui/material/Zoom';
import MyImage from './assets/1616042411145.jfif';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaAngular, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrNode } from "react-icons/gr"
import { AiOutlineConsoleSql } from "react-icons/ai"
import ASPImage from './assets/ASP.net.jpg'
import { styled } from "@mui/material";
const Home = () => {
	return (
		<div className="App overflow-hidden">
			<div className="w-full flex justify-center items-center">

				<div className="flex flex-col gap-10 w-5/6 2xl:w-2/5 sm:w-1/2">

					<div className="flex flex-col sm:flex-row gap-14">
						<div>
							<img className="rounded-full mt-10 ml-10 w-52 h-52" src={MyImage}></img>
							<h3 className=" font-bold mt-10">About</h3>
							<Zoom in={true} style={{ transitionDelay: '500ms' }}>
								<p>Recent graduate with a Bachelor of ICT specialising in web development and software engineering double major. I have a keen interest in front-end development.
									Throughout my time studying and working as a software developer, I have had the opportunity to pursue my interests in software development and web technologies. Experienced in React and Angular front-end development and backend development using Node.JS and ASP.NET.</p>
							</Zoom>
						</div>
						<div>
							<h4 className="font-bold mt-10 gap overflow-hidden">Skills</h4>
							<List>
								<div className="flex mb-2 gap-2 h-full flex-row sm:flex-col">
								<ListItem style={{ padding: 0 }}>
									<ListItemIcon>
										<FaAngular className=" text-4xl" />
									</ListItemIcon>
									<ListItemText primary="Angular" />
								</ListItem>
								<ListItem style={{ padding: 0 }}>
									<ListItemIcon>
										<FaReact className=" c" />
									</ListItemIcon>
									<ListItemText primary="React" />
								</ListItem>
								<ListItem style={{ padding: 0 }}>
									<ListItemIcon>
										<SiTypescript className=" text-3xl" />
									</ListItemIcon>
									<ListItemText primary="TypeScript" />
								</ListItem>
								</div>
								<div className="flex h-full gap-2 flex-row sm:flex-col">
								<ListItem style={{ padding: 0 }}>
									<ListItemIcon>
										<GrNode className=" text-3xl" />
									</ListItemIcon>
									<ListItemText primary="Node.JS" />
								</ListItem>
								<ListItem style={{ padding: 0 }}>
									<ListItemIcon>
										<AiOutlineConsoleSql className=" text-3xl" />
									</ListItemIcon>
									<ListItemText primary="SQL" />
								</ListItem>
								<ListItem style={{ padding: 0 }}>
									<ListItemIcon>
										<img src={ASPImage} className="w-9" style={{ filter: "contrast(40%) brightness(120%) grayscale(130%)" }} />
									</ListItemIcon>
									<ListItemText primary="ASP.NET(C#)" />
								</ListItem>
								</div>
							</List>
						</div>
					</div>
					<div>
						<ImageCarousel />
					</div>
				</div>
			</div>
		</div>

	);
}

export default Home
