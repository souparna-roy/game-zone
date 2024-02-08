import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorMOdeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
