import { TeamType } from 'client/types/enums';
import React from 'react';
import { CellWithNaught, CellWithCross, CellBase } from './board.styles';

interface ICellProps {
  type?: TeamType;
  hoverType?: TeamType;
  onMouseOver?: () => void;
  onCellClick?: () => void;
}

export const Cell: React.FC<ICellProps> = ({
  type,
  hoverType,
  onMouseOver,
  onCellClick,
}) => {
  if (type) {
    if (type === TeamType.NAUGHT) {
      return <CellWithNaught onMouseOver={onMouseOver} />;
    }
    if (type === TeamType.CROSS) {
      return <CellWithCross onMouseOver={onMouseOver} />;
    }
  }

  if (hoverType === TeamType.NAUGHT) {
    return <CellWithNaught isHover onClick={onCellClick} />;
  }
  if (hoverType === TeamType.CROSS) {
    return <CellWithCross isHover onClick={onCellClick} />;
  }

  return <CellBase onMouseOver={onMouseOver} />;
};
