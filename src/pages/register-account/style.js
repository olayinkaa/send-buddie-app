/* eslint-disable import/prefer-default-export */
import tw, { styled } from "twin.macro";

export const Container = tw.div`primary-light-container flex items-center justify-center p-8 dark:(primary-dark-container bg-dark-brand) md:px-20 lg:(col-span-2 px-10)`;

export const Contain = styled.input`
    ${()=> tw`primary-light-container flex items-center justify-center p-8 dark:(primary-dark-container bg-dark-brand) md:px-20 lg:(col-span-2 px-10)`}

`;
