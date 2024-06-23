"use client";
import { useQuery } from "@tanstack/react-query";
import CoinRow from "./_components/CoinRow";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { ICoin } from "./interfaces/interface";
import { useState } from "react";
import DetailsModal from "./_components/DetailsModal";
import LoadingSkeleton from "./_components/LoadingSkeleton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const symbols = [
  "BTC",
  "ETH",
  "ADA",
  "DOGE",
  "XRP",
  "LTC",
  "BCH",
  "LINK",
  "DOT",
  "XLM",
];

const fetchCryptoData = async (): Promise<ICoin[]> => {
  const promises = symbols.map((symbol) =>
    axios.get(
      `https://api.kucoin.com/api/v1/market/stats?symbol=${symbol}-USDT`
    )
  );
  const responses = await Promise.all(promises);

  return responses.map((response) => response.data.data);
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
    refetchInterval: 5000,
  });

  const [selectedCoin, setSelectedCoin] = useState<ICoin | null>(null);

  const handleRowClick = (coin: ICoin) => {
    setSelectedCoin(coin);
  };

  const handleClose = () => {
    setSelectedCoin(null);
  };

  if (error) return <div>Error fetching data</div>;

  return (
    <TableContainer component={Paper} sx={{marginTop: '20px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Symbol</StyledTableCell>
            <StyledTableCell align="right">Buy</StyledTableCell>
            <StyledTableCell align="right">Sell</StyledTableCell>
            <StyledTableCell align="right">ChangeRate</StyledTableCell>
            <StyledTableCell align="right">low</StyledTableCell>
            <StyledTableCell align="right">high</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {data!.map((coin: ICoin) => {
                return (
                  <CoinRow
                    key={coin.symbol}
                    coin={coin}
                    handleRowClick={handleRowClick}
                  />
                );
              })}
            </>
          )}
        </TableBody>
      </Table>
      <DetailsModal handleClose={handleClose} coin={selectedCoin} />
    </TableContainer>
  );
}
