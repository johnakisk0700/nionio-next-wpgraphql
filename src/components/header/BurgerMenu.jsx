import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMinus, BiPlus } from "react-icons/bi";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Stack,
  Flex,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} variant="ghost" onClick={onOpen} p={2} mr={2}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo />
            <DrawerCloseButton position="unset" />
          </DrawerHeader>

          <DrawerBody>
            <BurgerCategories onClose={onClose} />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const BurgerCategories = ({ onClose }) => {
  const invertPercentage = useColorModeValue("0%", "100%");
  return (
    <Accordion>
      <Input type="search"></Input>
      <Button>Kati</Button>
      <Button>Kati Allo</Button>
    </Accordion>
  );
};

export default BurgerMenu;
