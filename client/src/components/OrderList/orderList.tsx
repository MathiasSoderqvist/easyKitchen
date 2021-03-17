import './orderList.css';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Order } from '../../interfaces/order';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#8dc1c3",
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 24,
  },
  body: {
    fontSize: 20,

  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface OrderListProps {
  order: Order[]
}


const OrderList: React.FC<OrderListProps> = ({ order })  => {
  const classes = useStyles();

  return (
    <div className="order-list-container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Comments</StyledTableCell>
              <StyledTableCell align="right">Dishes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="table-body">
            {order?.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell component="th" scope="row">
                  {order.id}
                </StyledTableCell>
                <StyledTableCell align="right">{order.clientName}</StyledTableCell>
                <StyledTableCell align="right">{order.clientAddress}</StyledTableCell>
                <StyledTableCell align="right">{order.clientPhone}</StyledTableCell>
                <StyledTableCell align="right">{order.comments}</StyledTableCell>
                <StyledTableCell align="right">{order.Dishes?.map((dish: { title: string; }) => `| ${dish?.title} |`)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



export default OrderList;



