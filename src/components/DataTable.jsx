import React, { Component } from 'react';
import '../styles/DataTable.css';

function DataTable(props) {

  let tableArr = props.tableVals;
  const areRowTitles = props.rowTitles.length > 0;
  let prependCellToHeader = false;

  // If props.headerVals didn't include a header row title (a.k.a. a table title,
  // since it's the row title of the header row), set prependCellToHeader to true
  if (props.headerVals.length < tableArr[0].length) {
    prependCellToHeader = true;
  }

  if (areRowTitles) {
    // Add row titles to the two-dimensional array of table body values
    tableArr = addRowTitles(props.rowTitles, tableArr);
  }

  const header = getHeader(props.headerVals, prependCellToHeader);

  const body = getBody(tableArr, areRowTitles);

  return (
    <table className='DataTable'>
      {header}
      {body}
    </table>
  );
}

function getHeader(values, areRowTitles) {
  let headers = [];

  if (areRowTitles) {
    headers.push(<th></th>);
  }

  for (const e of values) {
    headers.push(<th>{e}</th>);
  }

  return (
    <thead className='data-table-header'>
      <tr className='data-table-header-row'>
        {headers}
      </tr>
    </thead>
  );
}

function addRowTitles(rowTitles, tableVals) {
  let newTableVals = tableVals;

  for (let i = 0; i < newTableVals.length; i++) {
    newTableVals[i].unshift(rowTitles[i]);
  }

  return newTableVals;
}

function getBody(values, areRowTitles) {
  let body = [];

  // Create table from values[][], and include row titles if they exist
  for (const e of values) {
    let row = [];
    for (let f = 0; f < e.length; f++) {
      if (areRowTitles && f === 0) {
        row.push(<th scope='row' className='data-table-row-title'>{e[f]}</th>)
      } else {
        row.push(<td>{e[f]}</td>);
      }
    }
    body.push(<tr className='data-table-row'>{row}</tr>);
  }

  return <tbody>{body}</tbody>
}

export default DataTable;
