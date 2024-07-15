/* eslint-disable react/no-array-index-key */
import React from "react";
import { SendBuddieSkeletonLoader } from "../../components/@ui-kits";

export default function BeneficiaryCardSkeleton({ card }) {
    return Array(card)
        .fill(0)
        .map((_, i) => {
            return (
                <div key={i}>
                    <SendBuddieSkeletonLoader height={200} width={200} count={1} />
                </div>
            );
        });
}

BeneficiaryCardSkeleton.defaultProps = {
    card: 1,
};
