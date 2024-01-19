import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaApple,
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms = [] }: Props) => {
  // Here [key: string] is called index signature when defined in square brackets,
  // we dont need to specify each key name like pc, playstation etc.,
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform: Platform) => (
        <Icon as={iconsMap[platform.slug]} color="gray.400" />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
