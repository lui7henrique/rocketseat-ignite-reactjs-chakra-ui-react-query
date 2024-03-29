import {  Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link'
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType; 
  children: string;
  href: string;
}

export function NavLink({icon, children, href, ...rest}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink d="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
