import { Skeleton, TableCell, TableRow } from "@mui/material";

const LoadingSkeleton = () => {
  return Array.from(new Array(10)).map((_, index) => (
    <TableRow key={index}>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
    </TableRow>
  ));
};

export default LoadingSkeleton;
