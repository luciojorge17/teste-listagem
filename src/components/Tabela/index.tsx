import { useState } from 'react';
import { Table, FormGroup, Label, Input, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IoEllipsisVertical, IoTrendingUp } from 'react-icons/io5';

import './styles.css';
import { CustomDropdown } from '../CustomDropdown';

export function Tabela() {

    const [showColumns, setShowColumns] = useState({
        numeroCliente: true,
        cliente: true,
        qtdChargeback: true,
        valorChargeback: true,
        qtdVendas: true,
        valorTotal: true,
        percentualChargeback: true,
        percentualTotalChargeback: true,
    });

    const [rows, setRows] = useState([
        {
            numeroCliente: 26174,
            cliente: "ESMEE ALFORD",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 72,
            valorTotal: "32,000",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 2983,
            cliente: "RUDY BARTLETT",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 58,
            valorTotal: "17,025",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 3,
            cliente: "RUDY BARTLETT",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 26,
            valorTotal: "12,258",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 1,
            cliente: "RICHIE MOSLEY",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 15,
            valorTotal: "8,000",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 2,
            cliente: "JAYDAN COBB",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 3,
            cliente: "AMEERA SHORT",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 2,
            cliente: "ALISTAIR STEWART",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 3,
            cliente: "SUMAIYAH HAWES",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 2,
            cliente: "KENAN LARA",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 3,
            cliente: "KENAN LARA",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 2,
            cliente: "JUNAID KENNEDY",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 3,
            cliente: "JANA FLORES",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        },
        {
            numeroCliente: 2,
            cliente: "JUNAID KENNEDY",
            qtdChargeback: 1,
            valorChargeback: "38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: 0.05,
            percentualTotalChargeback: 0.03
        }
    ]);

    return (
        <Table hover responsive striped className="text-uppercase">
            <thead>
                <tr>
                    {showColumns.numeroCliente &&
                        <th>Nº Cliente</th>}
                    {showColumns.cliente &&
                        <th>Cliente</th>}
                    {showColumns.qtdChargeback &&
                        <th className="text-center">Qtd. Chargeback</th>}
                    {showColumns.valorChargeback &&
                        <th>Valor Chargeback</th>}
                    {showColumns.qtdVendas &&
                        <th className="text-center">Qtd. Vendas</th>}
                    {showColumns.valorTotal &&
                        <th>Valor Total</th>}
                    {showColumns.percentualChargeback &&
                        <th>% Chargeback</th>}
                    {showColumns.percentualTotalChargeback &&
                        <th>% Total Chargeback</th>}
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
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.numeroCliente} type="checkbox" onChange={() => setShowColumns({ ...showColumns, numeroCliente: !showColumns.numeroCliente })} /> Nº cliente
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.cliente} type="checkbox" onChange={() => setShowColumns({ ...showColumns, cliente: !showColumns.cliente })} /> Cliente
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.qtdChargeback} type="checkbox" onChange={() => setShowColumns({ ...showColumns, qtdChargeback: !showColumns.qtdChargeback })} /> Qtd. Chargeback
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.valorChargeback} type="checkbox" onChange={() => setShowColumns({ ...showColumns, valorChargeback: !showColumns.valorChargeback })} /> Valor Chargeback
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.qtdVendas} type="checkbox" onChange={() => setShowColumns({ ...showColumns, qtdVendas: !showColumns.qtdVendas })} /> Qtd. Vendas
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.valorTotal} type="checkbox" onChange={() => setShowColumns({ ...showColumns, valorTotal: !showColumns.valorTotal })} /> Valor Total
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.percentualChargeback} type="checkbox" onChange={() => setShowColumns({ ...showColumns, percentualChargeback: !showColumns.percentualChargeback })} /> % Chargeback
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className="dropdown-item text-capitalize">
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input checked={showColumns.percentualTotalChargeback} type="checkbox" onChange={() => setShowColumns({ ...showColumns, percentualTotalChargeback: !showColumns.percentualTotalChargeback })} /> % Total Chargeback
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </DropdownMenu>
                            </>
                        </CustomDropdown>
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {showColumns.numeroCliente &&
                            <td>{row.numeroCliente}</td>}
                        {showColumns.cliente &&
                            <td>{row.cliente}</td>}
                        {showColumns.qtdChargeback &&
                            <td className="text-center">{row.qtdChargeback}</td>}
                        {showColumns.valorChargeback &&
                            <td>R$ {row.valorChargeback}</td>}
                        {showColumns.qtdVendas &&
                            <td className="text-center">{row.qtdVendas}</td>}
                        {showColumns.valorTotal &&
                            <td>R$ {row.valorTotal}</td>}
                        {showColumns.percentualChargeback &&
                            <td className="text-danger"><IoTrendingUp /> {row.percentualChargeback}%</td>}
                        {showColumns.percentualTotalChargeback &&
                            <td className="text-danger"><IoTrendingUp /> {row.percentualTotalChargeback}%</td>}
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}