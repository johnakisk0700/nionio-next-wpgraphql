import React from "react";

import { useField } from "formik";
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const TextField = ({ icon, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const iconColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          bg={"transparent"}
          children={icon && <Icon as={icon} color={iconColor} />}
          transform={meta.touched && meta.error && "translateY(2px)"}
        />
        <Input
          {...field}
          {...props}
          isInvalid={meta.touched && meta.error}
          pl={12}
        />
      </InputGroup>

      {meta.touched && meta.error ? (
        <Text color="red.500" fontSize="sm">
          {meta.error}
        </Text>
      ) : null}
    </Box>
  );
};

export default TextField;
