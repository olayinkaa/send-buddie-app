import tw from "twin.macro";
import { Link } from "react-router-dom";

export const StyledButton = tw.button`flex items-center justify-between transition duration-1000 hover:(translate-x-1 text-blue-brand)`;
export const StyledLink = tw(Link)`flex items-center justify-between transition duration-1000 hover:(translate-x-1 text-blue-brand)`;
