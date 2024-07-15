/* eslint-disable import/prefer-default-export */
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const StyledLink = tw(
    Link,
)`flex items-center gap-2 rounded-sm px-3 py-4 font-light text-base transition duration-700 hover:(translate-x-1 bg-light-blue-brand no-underline) active:bg-neutral-300`;
