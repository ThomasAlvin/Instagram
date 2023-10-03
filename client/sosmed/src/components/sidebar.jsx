import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Img,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/images/instagram-text-logo.png";

import { AiFillHome, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const nav = useNavigate();
  const location = useLocation();
  function Reload() {
    window.location.reload();

    return;
  }
  return (
    <>
      <Flex className="sidebar-box" borderRight={"grey 1px solid"}>
        <Box className="sidebar-container">
          <Box className="sidebar-logo-container">
            <Img src={logo} className="sidebar-logo" onClick={Reload}></Img>
            <Box className="sidebar-logo2" onClick={Reload}>
              <Icon fontSize={"20px"} as={BsInstagram}></Icon>
            </Box>
          </Box>
          <Flex className="sidebar-menu-selections-container">
            <Flex className="sidebar-menu-selections">
              <Icon
                fontSize={"20px"}
                cursor={"pointer"}
                as={
                  location.pathname.split("/")[1] == "homepage"
                    ? AiFillHome
                    : AiOutlineHome
                }
                onClick={() => nav("/homepage")}
              ></Icon>
              <Box
                fontWeight={
                  location.pathname.split("/")[1] == "homepage" ? 700 : 400
                }
                className="sidebar-menus"
              >
                Home
              </Box>
            </Flex>
            <Flex className="sidebar-menu-selections">
              <Icon cursor={"pointer"} fontSize={"20px"} as={BiSearch}></Icon>
              <Box className="sidebar-menus">Search</Box>
            </Flex>
            <Flex className="sidebar-menu-selections">
              <Icon
                cursor={"pointer"}
                fontSize={"20px"}
                as={FaRegCompass}
              ></Icon>
              <Box className="sidebar-menus">Explore</Box>
            </Flex>
            <Flex className="sidebar-menu-selections">
              <Icon
                cursor={"pointer"}
                fontSize={"20px"}
                as={BiMoviePlay}
              ></Icon>
              <Box className="sidebar-menus">Reels</Box>
            </Flex>
            <Flex className="sidebar-menu-selections">
              <Icon
                cursor={"pointer"}
                fontSize={"20px"}
                as={RiMessengerLine}
              ></Icon>
              <Box className="sidebar-menus">Messenger</Box>
            </Flex>
            <Flex className="sidebar-menu-selections">
              <Icon
                cursor={"pointer"}
                fontSize={"20px"}
                as={AiOutlineHeart}
              ></Icon>
              <Box className="sidebar-menus">Notifications</Box>
            </Flex>
            <Flex className="sidebar-menu-selections">
              <Icon
                cursor={"pointer"}
                fontSize={"20px"}
                as={BsPlusSquare}
              ></Icon>
              <Box className="sidebar-menus">Create</Box>
            </Flex>

            <Flex
              className="sidebar-menu-selections"
              onClick={() => nav("/profilepage")}
            >
              <Avatar
                cursor={"pointer"}
                w={"20px"}
                h={"20px"}
                onClick={() => nav("/profilepage")}
              ></Avatar>
              <Box className="sidebar-menus">Home</Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
