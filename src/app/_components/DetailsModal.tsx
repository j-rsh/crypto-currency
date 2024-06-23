import { Box, Modal, Typography } from "@mui/material";
import { ICoin } from "../interfaces/interface";

interface Props {
    coin: ICoin|null;
    handleClose:()=> void
  }
const DetailsModal : React.FC<Props> = ({ coin, handleClose })=>{
    if(coin === null){
        return null;
    }
    return ( 
        <Modal open={!!coin} onClose={handleClose}>
        <Box sx={{ ...modalStyle }}>
          {coin && (
            <>
              <Typography variant="h6">{coin.symbol} Details</Typography>
              <Typography>Buy: {coin.buy}</Typography>
              <Typography>Sell: {coin.sell}</Typography>
              <Typography>Change Rate: {coin.changeRate}</Typography>
              <Typography>Low: {coin.low}</Typography>
              <Typography>High: {coin.high}</Typography>
              <Typography>ChangeRate: {coin.changeRate}</Typography>
              <Typography>ChangePrice: {coin.changePrice}</Typography>
              <Typography>MakerFeeRate: {coin.makerFeeRate}</Typography>
              <Typography>TakerFeeRate: {coin.takerFeeRate}</Typography>
              <Typography>TakerCoefficient: {coin.takerCoefficient}</Typography>
              <Typography>MakerCoefficient: {coin.makerCoefficient}</Typography>
              <Typography>AveragePrice: {coin.averagePrice}</Typography>
              <Typography>Vol: {coin.vol}</Typography>
              <Typography>Volvalue: {coin.volvalue}</Typography>
            </>
          )}
        </Box>
      </Modal>
     );
}
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 
export default DetailsModal;
