import { Avatar, Box, Button, Flex, Input, Link, Menu, MenuButton, MenuItem, MenuList, Tooltip, useDisclosure } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
	CreatePostLogo,
	ExploreLogo,
	InstagramLogo,
	InstagramMobileLogo,
	Loggin,
	MoreLogo,
	NotificationsLogo,
	SearchLogo,
} from "../../assets/constants";


import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useRef, useState } from "react";

const Sidebar = () => {
	const [state, setState] = useState(true);
	const sidebarItems = [
		{
			icon: <AiFillHome size={25} />,
			text: "Home",
			link: "/",
		},
		{
			icon: <SearchLogo />,
			text: "Search",
		},

		{
			icon: <NotificationsLogo />,
			text: "Notifications",
		},
		{
			icon: <CreatePostLogo />,
			text: "Create",
		},
		{
			icon: <ExploreLogo />,
			text: "Explore"
		}
	];

	return (
		<Box
			height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={"column"} gap={10} w='full' height={"full"}>
				<Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
					<InstagramLogo />

				</Link>
				<Link
					to={"/"}
					as={RouterLink}
					p={2}
					display={{ base: "block", md: "none" }}
					borderRadius={6}
					_hover={{
						bg: "whiteAlpha.200",
					}}
					w={10}
					cursor='pointer'
				>
					<InstagramMobileLogo />

				</Link>

				<Flex direction={"column"} gap={5} cursor={"pointer"}>
					{sidebarItems.map((item, index) => (
						<Tooltip
							key={index}
							hasArrow
							label={item.text}
							placement='right'
							ml={1}
							openDelay={500}
							display={{ base: "block", md: "none" }}
						>
							<Link
								display={"flex"}
								to={item.link || ""}
								as={RouterLink}
								alignItems={"center"}
								gap={4}
								_hover={{ bg: "whiteAlpha.400" }}
								borderRadius={6}
								p={2}
								w={{ base: 10, md: "full" }}
								justifyContent={{ base: "center", md: "flex-start" }}

							>
								{item.icon}
								<Box display={{ base: "none", md: "block" }}>{item.text}</Box>
							</Link>
						</Tooltip>
					))}
				</Flex>
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Link
						display={"flex"}
						to={"/auth"}
						as={RouterLink}
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: "full" }}
						mt={60}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						{state ? <><BiLogOut size={25} />
							<Box display={{ base: "none", md: "block" }}>Logout</Box></> : <><Loggin /><Box display={{ base: "none", md: "block" }}>Login</Box></>}

					</Link>

				</Tooltip>
				<Tooltip
					hasArrow
					label={"More"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>


					<Link
						display={"flex"}
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: "full" }}
						mt={"auto"}

						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<Menu>
							<MenuButton as={Button}
								transition='all 0.2s'
								bg={"white"}
								_hover={{ bg: 'white' }}
								_expanded={{ bg: 'white' }}
							>
								<MoreLogo />
								<Box display={{ base: "none", md: "block" }}>More</Box>
							</MenuButton>
							<MenuList
							
							>
								<MenuItem>Download</MenuItem>
								<MenuItem>Create a Copy</MenuItem>
								<MenuItem>Mark as Draft</MenuItem>
								<MenuItem>Delete</MenuItem>
								<MenuItem>Attend a Workshop</MenuItem>
							</MenuList>
						</Menu>

					</Link>

				</Tooltip>
			</Flex>


		</Box>
	);
};

export default Sidebar;