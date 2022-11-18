import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

function SearchBar({ variant }) {
  const router = useRouter();

  const queryRef = useRef();
  let query = queryRef.current;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      if (variant === "page") {
        router.push(`/search?search=${query}`, undefined, { shallow: true });
      }
      if (variant === "nav") {
        router.push(`/search?search=${query}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup gap={2}>
        <Input
          type="search"
          fontSize="sm"
          placeholder="Αναζήτηση..."
          onChange={(e) => (query = e.target.value)}
        />
        <Button type="submit">
          <Search2Icon color="gray.400" />
        </Button>
      </InputGroup>
    </form>
  );
}

export default SearchBar;
