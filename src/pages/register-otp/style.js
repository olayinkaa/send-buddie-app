import tw from "twin.macro";
import { SendBuddieTextFieldMui } from "@/components/@form";

// eslint-disable-next-line import/prefer-default-export
export const StyledInput = tw(
    SendBuddieTextFieldMui
)`rounded-none border-0 border-gray-400 border-b-2 pr-10 shadow-none focus:(border-blue-500 outline-none ring-0)`;
