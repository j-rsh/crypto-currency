import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { ICoin } from "../interfaces/interface";

interface Props {
  coin: ICoin;
  handleRowClick: (coin: ICoin) => void;
}

const CoinRow: React.FC<Props> = ({ coin, handleRowClick }) => {
  return (
    <TableRow>
      <TableCell
        sx={{ cursor: "pointer" }}
        align="right"
        onClick={() => handleRowClick(coin)}
      >
        {coin.symbol}
      </TableCell>
      <TableCell align="right">{coin.buy}</TableCell>
      <TableCell align="right">{coin.sell}</TableCell>
      <TableCell align="right">{coin.changeRate}</TableCell>
      <TableCell align="right">{coin.low}</TableCell>
      <TableCell align="right">{coin.high}</TableCell>
    </TableRow>
  );
};
export default CoinRow;
