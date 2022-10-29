import React, { useState } from 'react'
import { StyledCompleted } from '../styles/Completed.styled';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Row (props) {
  const { row } =props;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TableRow>

      </TableRow>
    </div>
  )
}


function Completed() {
  return (
    <StyledCompleted>
      <div className="data__table">

      </div>
    </StyledCompleted>
  )
}

export default Completed