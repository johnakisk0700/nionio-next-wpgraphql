import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { styleConsts } from "../../styles/constants";

function ActiveLink({ children, href }) {
  const { asPath } = useRouter();

  const style = {
    ...styles.link,
    color: asPath === href ? "white" : "",
    _before: {
      ...styles.link._before,
      bottom: asPath === href ? 0 : "-100%",
    },
  };

  return (
    <NextLink href={href} legacyBehavior passHref>
      <Link sx={style}>{children}</Link>
    </NextLink>
  );
}

const styles = {
  link: {
    mx: "auto",
    my: 2,
    py: 2,
    px: 2,
    display: "flex",
    boxSizing: "border-box",
    fontWeight: 500,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    borderRadius: styleConsts.br,
    _before: {
      content: "''",
      zIndex: -1,
      position: "absolute",
      left: 0,
      width: "100%",
      height: "100%",
      bg: "logo.800",
      bottom: "-100%",
      transition: styleConsts.fastSpeed,
    },
    _hover: {
      color: "white",
      _before: {
        bottom: 0,
      },
    },
  },
};

export default ActiveLink;
