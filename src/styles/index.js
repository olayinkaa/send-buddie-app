/* eslint-disable import/prefer-default-export */
import tw, { styled } from "twin.macro";

export const FeatureButton = styled.button(({ isPrimary }) => [
    tw`flex items-center justify-center rounded-2xl border border-neutral-100 bg-inactive-brand px-10 py-5`,
    isPrimary && tw`bg-blue-brand text-white`,
])


