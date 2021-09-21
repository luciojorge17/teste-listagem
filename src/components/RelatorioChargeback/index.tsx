import React from 'react'
import { CustomTable } from '../CustomTable';

export function RelatorioChargeback() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'N° Cliente',
                accessor: 'numeroCliente',
            },
            {
                Header: 'Cliente',
                accessor: 'cliente',
            },
            {
                Header: 'Qtd. Chargeback',
                accessor: 'qtdChargeback',
            },
            {
                Header: 'Valor Chargeback',
                accessor: 'valorChargeback',
            },
            {
                Header: 'Qtd. Vendas',
                accessor: 'qtdVendas',
            },
            {
                Header: 'Valor Total',
                accessor: 'valorTotal',
            },
            {
                Header: '% Chargeback',
                accessor: 'percentualChargeback',
            },
            {
                Header: '% Total Chargeback',
                accessor: 'percentualTotalChargeback',
            },
        ],
        []
    )

    const data = React.useMemo(() => [
        {
            numeroCliente: 26174,
            cliente: "ESMEE ALFORD",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 72,
            valorTotal: "32,000",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 2983,
            cliente: "RUDY BARTLETT",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 58,
            valorTotal: "17,025",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 3,
            cliente: "RUDY BARTLETT",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 26,
            valorTotal: "12,258",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 1,
            cliente: "RICHIE MOSLEY",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 15,
            valorTotal: "8,000",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 2,
            cliente: "JAYDAN COBB",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 3,
            cliente: "AMEERA SHORT",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 2,
            cliente: "ALISTAIR STEWART",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 3,
            cliente: "SUMAIYAH HAWES",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 2,
            cliente: "KENAN LARA",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 3,
            cliente: "KENAN LARA",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 2,
            cliente: "JUNAID KENNEDY",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 3,
            cliente: "JANA FLORES",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 5,
            valorTotal: "3,478",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        },
        {
            numeroCliente: 2,
            cliente: "JUNAID KENNEDY",
            qtdChargeback: 1,
            valorChargeback: "R$ 38,92",
            qtdVendas: 8,
            valorTotal: "5,689",
            percentualChargeback: "0.05 %",
            percentualTotalChargeback: "0.03 %"
        }
    ], [])

    return (
        <CustomTable columns={columns} data={data} />
    )
}