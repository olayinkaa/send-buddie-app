import React from "react";
import { BsXCircle } from "react-icons/bs";

function KycSubmission() {
    return (
        <section className="w-2/5 space-y-4 rounded-lg border border-neutral-300 p-5">
            <h4 className="text-xl font-normal text-center">Submit KYC Documents</h4>
            <section className="flex flex-col items-center gap-2 rounded-md border-2 border-dotted bg-neutral-100 p-4">
                <div className="flex items-center justify-between gap-4">
                    <span>Certificate of Business registration.PDF</span>
                    <BsXCircle fontSize={20} />
                </div>
                <span className="text-green-500">Validated</span>
            </section>
            <section className="flex flex-col items-center gap-2 rounded-md border-2 border-dotted bg-neutral-100 p-4">
                <div className="flex items-center justify-between gap-4">
                    <span>Memorandum.JPG</span>
                    <BsXCircle fontSize={20} />
                </div>
                <span className="text-amber-500">Pending review</span>
            </section>
            <section className="flex flex-col items-center gap-2 rounded-md border-2 border-dotted bg-neutral-100 p-4">
                <div className="flex items-center justify-between gap-4">
                    <span>Control Structure.JPG</span>
                    <BsXCircle fontSize={20} />
                </div>
                <span className="text-green-500">Validated</span>
            </section>
            <section className="flex flex-col items-center gap-2 rounded-md border-2 border-dotted bg-neutral-100 p-4">
                <div className="flex items-center justify-between gap-4">
                    <span>Office.PDF</span>
                    <BsXCircle fontSize={20} />
                </div>
                <span className="text-green-500">Validated</span>
            </section>
            <section className="flex flex-col items-center gap-2 rounded-md border-2 border-dotted bg-neutral-100 p-4">
                <div className="flex items-center justify-between gap-4">
                    <span>Certificate.docx</span>
                    <BsXCircle fontSize={20} />
                </div>
                <span className="text-red-500">Review failed</span>
            </section>
            <button type="button" className="btn-primary mt-5 w-full py-4">
                Save
            </button>
        </section>
    );
}

export default KycSubmission;
