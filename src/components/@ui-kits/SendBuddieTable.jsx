/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import _ from "lodash";
import SendBuddieGlobalFilter from "./SendBuddieGlobalFilter";
import Pagination from "./Pagination";

export default function SendBuddieTable({
    data,
    columns,
    className,
    isSearch,
    isFooter,
    isHeader,
    isPagination,
    noDataMessage,
    isLoading,
}) {
    const tableData = useMemo(() => data, [data]);
    const tableColumns = useMemo(() => columns, [columns]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        // rows,
        prepareRow,
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter,
    } = useTable(
        {
            columns: tableColumns,
            data: tableData,
            initialState: { pageSize: isPagination ? 5 : data.length },
        },
        useGlobalFilter,
        usePagination,
    );

    const paginationProps = {
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        pageSize
    };

    // console.log({pageOptions,pageCount})

    return (
        <div>
            {isSearch && <SendBuddieGlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />}
            <table className="w-full" {...getTableProps()}>
                {isHeader && (
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} className="font-bold">
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                )}
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className={className}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="p-3 pl-0 text-base font-normal tracking-wider"
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                {isFooter && (
                    <tfoot>
                        {footerGroups.map((footerGroup) => (
                            <tr {...footerGroups.getFooterGroupProps()}>
                                {footerGroup.headers.map((column) => (
                                    <td {...column.getFooterProps}>{column.render("Footer")}</td>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                )}
            </table>
            {isPagination && !_.isEmpty(data) && (
                <div>
                    <Pagination {...paginationProps} />
                </div>
            )}

            {!isLoading && _.isEmpty(data) && (
                <div>
                    <p className="text-lg font-medium tracking-wide">{noDataMessage}</p>
                </div>
            )}
        </div>
    );
}

SendBuddieTable.defaultProps = {
    isFooter: false,
    isSearch: false,
    isHeader: true,
    isPagination: true,
    data: [],
    className: "",
    noDataMessage: "",
    isLoading: false,
};
