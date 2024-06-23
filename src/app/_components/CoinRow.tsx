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
        sx={{ cursor: "pointer" , fontWeight: 'bold'  }}
        align="center"
        onClick={() => handleRowClick(coin)}
      >
        {coin.symbol}
      </TableCell>
      <TableCell align="center">{coin.buy}&nbsp;$</TableCell>
      <TableCell align="center">{coin.sell}&nbsp;$</TableCell>
      <TableCell align="center">{coin.changeRate}&nbsp;$</TableCell>
      <TableCell align="center">{coin.low}&nbsp;$</TableCell>
      <TableCell align="center">{coin.high}&nbsp;$</TableCell>
    </TableRow>
  );
};
export default CoinRow;
