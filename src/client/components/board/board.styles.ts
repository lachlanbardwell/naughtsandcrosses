import styled from 'styled-components';

export interface ICellStyle {
  isHover?: boolean;
}

export const CellContainer = styled.div`
  display: flex;
  width: 310px;
  height: 300px;
  flex-wrap: wrap;
`;

CellContainer.displayName = 'CellContainer';

export const CellBase = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border: solid 1px #000000;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

CellBase.displayName = 'CellBase';

export const CellWithNaught = styled(CellBase)<ICellStyle>`
  &::before,
  &::after {
    position: absolute;
    content: '';
    background-color: ${(props) => (props.isHover ? '#aaa' : '#021604')};
    border-radius: 50%;
  }

  &::before {
    width: 70px;
    height: 70px;
  }

  &::after {
    width: 50px;
    height: 50px;
    background-color: white;
  }
`;
CellWithNaught.displayName = 'CellWithNaught';

export const CellWithCross = styled(CellBase)<ICellStyle>`
  &::before,
  &::after {
    background-color: #021604;
    position: absolute;
    content: '';
    width: 10px;
    height: 80px;
    border-radius: 2px;
    ${(props) => (props.isHover ? 'opacity: 50%' : '')}
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

CellWithCross.displayName = 'CellWithCross';
