import { IoEllipsisVertical, IoTrendingUp } from 'react-icons/io5';
import { useTable } from 'react-table';
import { DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label, Table, TableProps } from 'reactstrap';
import { CustomDropdown } from '../CustomDropdown';

import './styles.css';

export function CustomTable({ columns, data }: TableProps) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
    } = useTable({
        columns,
        data,
    })

    return (
        <Table {...getTableProps()} hover responsive striped className="text-uppercase">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        <th className="text-right">
                            <CustomDropdown>
                                <>
                                    <DropdownToggle>
                                        <IoEllipsisVertical />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Linhas por página</DropdownItem>
                                        <div className="dropdown-item text-capitalize">
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="checkbox" checked /> Padrão
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="dropdown-item text-capitalize">
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="checkbox" /> 50 Linhas
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <DropdownItem divider />
                                        <DropdownItem header>Colunas</DropdownItem>
                                        {allColumns.map(column => (
                                            <div className="dropdown-item text-capitalize">
                                                <FormGroup check inline key={column.id}>
                                                    <Label check>
                                                        <Input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
                                                        {column.Header}
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        ))}
                                    </DropdownMenu>
                                </>
                            </CustomDropdown>
                        </th>
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}
                                    className={cell.column.id == 'percentualChargeback' || cell.column.id == 'percentualTotalChargeback' ? 'text-danger' : ''}
                                >
                                    {cell.column.id == 'percentualChargeback' || cell.column.id == 'percentualTotalChargeback' ? <IoTrendingUp /> : ''}
                                    {' '}{cell.render('Cell')}
                                </td>
                            ))}
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}