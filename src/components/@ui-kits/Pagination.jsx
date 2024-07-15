import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
    previousPage,
    nextPage,
    canNextPage,
    gotoPage,
    canPreviousPage,
    setPageSize,
    pageIndex,
    pageSize,
    pageOptions,
}) {
    return (
        <div className="flex items-center justify-between py-3 ">
            {/* <div className="flex  justify-between ">
                <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    type="button"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </button>
            </div> */}
            <div className="w-[7%]">
                <select
                    value={pageSize}
                    name=""
                    id=""
                    className="cursor-pointer focus:cursor-pointer flex justify-center items-center"
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[5, 10, 15].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>
            {/* <div>
                <p className="text-base text-gray-700">
                    Showing <span className="font-medium">{pageIndex + 1}</span> to{" "}
                    <span className="font-medium">10</span> of <span className="font-medium">97</span> results
                </p>
            </div> */}
            {/* <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between"> */}
            <div className="">
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            type="button"
                            className={`
                            relative inline-flex  items-center rounded-l-md border border-gray-300 bg-white 
                            px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${
                                !canPreviousPage && "cursor-not-allowed"
                            }`}
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                        >
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            {/* <span className="">Previous</span> */}
                            {/* <span className="sr-only">Previous</span> */}
                        </button>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", 
                        Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        {pageOptions.map((pageNumber) => {
                            return (
                                <button
                                    key={pageNumber}
                                    type="button"
                                    aria-current="page"
                                    className={`
                                    relative z-10 inline-flex items-center 
                                    ${
                                        pageNumber === pageIndex
                                            ? "border-2 bg-indigo-50 border-indigo-500 text-indigo-600"
                                            : "border border-gray-300 bg-white "
                                    }
                                    px-4 py-2 text-sm font-medium focus:z-20`}
                                    onClick={() => gotoPage(pageNumber)}
                                >
                                    {pageNumber + 1}
                                </button>
                            );
                        })}
                        <button
                            type="button"
                            className={`
                             inline-flex items-center rounded-r-md border border-gray-300 bg-white 
                             px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${
                                 !canNextPage && "cursor-not-allowed"
                             }`}
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                        >
                            {/* <span className="">Next</span> */}
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
