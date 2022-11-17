import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

function SearchBar() {
  return (
    <InputGroup>
      <Input type="search" fontSize="sm" placeholder="Αναζήτηση..." />
      <InputRightElement
        pointerEvents="none"
        children={<Search2Icon color="gray.400" />}
      />
    </InputGroup>
  );
}

export default SearchBar;
