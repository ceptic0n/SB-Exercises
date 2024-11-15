import React from 'react'
import './componentCss/Cell.css'

const Cell = (flipCellsAroundMe, isLit) => {
    const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return (
    <div>
        <td className={classes} onClick={flipCellsAroundMe} />
    </div>
  )
}

export default Cell