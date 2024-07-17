import './App.css';
import { useState, useRef, useEffect } from 'react';
import Modal from './Modal';
import Cell from './Cell';
import p1 from './images/pattern_1.png';
import p2 from './images/pattern_2.png';
import p3 from './images/pattern_3.png';

const cellWidth = 10;
const cellsPerRow = Math.floor((window.innerWidth - 250) / cellWidth) + 2;
const cellsPerColumn = Math.floor(window.innerHeight / cellWidth) + 2;
type CellType = {
  id: number;
  isOn: boolean;
};

function lastRow() {
  return cellsPerColumn - 2;
}
function lastColumn() {
  return cellsPerRow - 2;
}

export function getIndex(i: number, j: number, cells: number = cellsPerRow): number {
  return i * cells + j;
}
export function getIJ(index: number, cells: number = cellsPerRow): { i: number, j: number } {
  const i = Math.floor(index / cells);
  const j = index % cells;
  return {
    i,
    j,
  };
}
function isCorner(i: number, j: number): boolean {
  return i === 0 || i === cellsPerColumn - 1
    || j === 0 || j === cellsPerRow - 1;
}

function hasTwoOrThreeOn(cells: CellType[]): boolean {
  let liveCount: number = 0;
  cells.forEach(cell => {
    if (!cell) {
      console.log('cell undefined in hasTwoOrThreeOn')
    }
    if (cell.isOn) {
      liveCount++;
    }
  });
  return liveCount === 2 || liveCount === 3;
}
function hasThreeOn(cells: CellType[]): boolean {
  let liveCount: number = 0;
  cells.forEach(cell => {
    console.log('cell undefined in hasThreeOn')
    if (cell.isOn) {
      liveCount++;
    }
  });
  return liveCount === 3;
}

function placeP1(cells: CellType[], i: number, j: number): CellType[] {
  const newCells = [...cells];
  cells[getIndex(i, j + 2)].isOn = true;
  cells[getIndex(i, j + 3)].isOn = true;
  cells[getIndex(i, j + 4)].isOn = true;
  cells[getIndex(i, j + 8)].isOn = true;
  cells[getIndex(i, j + 9)].isOn = true;
  cells[getIndex(i, j + 10)].isOn = true;

  cells[getIndex(i + 2, j)].isOn = true;
  cells[getIndex(i + 2, j + 5)].isOn = true;
  cells[getIndex(i + 2, j + 7)].isOn = true;
  cells[getIndex(i + 2, j + 12)].isOn = true;

  cells[getIndex(i + 3, j)].isOn = true;
  cells[getIndex(i + 3, j + 5)].isOn = true;
  cells[getIndex(i + 3, j + 7)].isOn = true;
  cells[getIndex(i + 3, j + 12)].isOn = true;

  cells[getIndex(i + 4, j)].isOn = true;
  cells[getIndex(i + 4, j + 5)].isOn = true;
  cells[getIndex(i + 4, j + 7)].isOn = true;
  cells[getIndex(i + 4, j + 12)].isOn = true;

  cells[getIndex(i + 5, j + 2)].isOn = true;
  cells[getIndex(i + 5, j + 3)].isOn = true;
  cells[getIndex(i + 5, j + 4)].isOn = true;
  cells[getIndex(i + 5, j + 8)].isOn = true;
  cells[getIndex(i + 5, j + 9)].isOn = true;
  cells[getIndex(i + 5, j + 10)].isOn = true;

  cells[getIndex(i + 7, j + 2)].isOn = true;
  cells[getIndex(i + 7, j + 3)].isOn = true;
  cells[getIndex(i + 7, j + 4)].isOn = true;
  cells[getIndex(i + 7, j + 8)].isOn = true;
  cells[getIndex(i + 7, j + 9)].isOn = true;
  cells[getIndex(i + 7, j + 10)].isOn = true;

  cells[getIndex(i + 8, j)].isOn = true;
  cells[getIndex(i + 8, j + 5)].isOn = true;
  cells[getIndex(i + 8, j + 7)].isOn = true;
  cells[getIndex(i + 8, j + 12)].isOn = true;

  cells[getIndex(i + 9, j)].isOn = true;
  cells[getIndex(i + 9, j + 5)].isOn = true;
  cells[getIndex(i + 9, j + 7)].isOn = true;
  cells[getIndex(i + 9, j + 12)].isOn = true;

  cells[getIndex(i + 10, j)].isOn = true;
  cells[getIndex(i + 10, j + 5)].isOn = true;
  cells[getIndex(i + 10, j + 7)].isOn = true;
  cells[getIndex(i + 10, j + 12)].isOn = true;
  
  cells[getIndex(i + 12, j + 2)].isOn = true;
  cells[getIndex(i + 12, j + 3)].isOn = true;
  cells[getIndex(i + 12, j + 4)].isOn = true;
  cells[getIndex(i + 12, j + 8)].isOn = true;
  cells[getIndex(i + 12, j + 9)].isOn = true;
  cells[getIndex(i + 12, j + 10)].isOn = true;
  return newCells;
}

function placeP2(cells: CellType[], i: number, j: number): CellType[] {
  const newCells = [...cells];
  cells[getIndex(i, j + 1)].isOn = true;
  cells[getIndex(i + 1, j + 1)].isOn = true;
  cells[getIndex(i + 2, j)].isOn = true;
  cells[getIndex(i + 2, j + 2)].isOn = true;
  cells[getIndex(i + 3, j + 1)].isOn = true;
  cells[getIndex(i + 4, j + 1)].isOn = true;
  cells[getIndex(i + 5, j + 1)].isOn = true;
  cells[getIndex(i + 6, j + 1)].isOn = true;
  cells[getIndex(i + 7, j)].isOn = true;
  cells[getIndex(i + 7, j + 2)].isOn = true;
  cells[getIndex(i + 8, j + 1)].isOn = true;
  cells[getIndex(i + 9, j + 1)].isOn = true;
  return newCells;
}

function placeP3(cells: CellType[], i: number, j: number): CellType[] {
  const newCells = [...cells];
  cells[getIndex(i, j + 24)].isOn = true;

  cells[getIndex(i + 1, j + 22)].isOn = true;
  cells[getIndex(i + 1, j + 24)].isOn = true;

  cells[getIndex(i + 2, j + 12)].isOn = true;
  cells[getIndex(i + 2, j + 13)].isOn = true;
  cells[getIndex(i + 2, j + 20)].isOn = true;
  cells[getIndex(i + 2, j + 21)].isOn = true;
  cells[getIndex(i + 2, j + 34)].isOn = true;
  cells[getIndex(i + 2, j + 35)].isOn = true;

  cells[getIndex(i + 3, j + 11)].isOn = true;
  cells[getIndex(i + 3, j + 15)].isOn = true;
  cells[getIndex(i + 3, j + 20)].isOn = true;
  cells[getIndex(i + 3, j + 21)].isOn = true;
  cells[getIndex(i + 3, j + 34)].isOn = true;
  cells[getIndex(i + 3, j + 35)].isOn = true;

  cells[getIndex(i + 4, j)].isOn = true;
  cells[getIndex(i + 4, j + 1)].isOn = true;
  cells[getIndex(i + 4, j + 10)].isOn = true;
  cells[getIndex(i + 4, j + 16)].isOn = true;
  cells[getIndex(i + 4, j + 20)].isOn = true;
  cells[getIndex(i + 4, j + 21)].isOn = true;

  cells[getIndex(i + 5, j)].isOn = true;
  cells[getIndex(i + 5, j + 1)].isOn = true;
  cells[getIndex(i + 5, j + 10)].isOn = true;
  cells[getIndex(i + 5, j + 14)].isOn = true;
  cells[getIndex(i + 5, j + 16)].isOn = true;
  cells[getIndex(i + 5, j + 17)].isOn = true;
  cells[getIndex(i + 5, j + 22)].isOn = true;
  cells[getIndex(i + 5, j + 24)].isOn = true;

  cells[getIndex(i + 6, j + 10)].isOn = true;
  cells[getIndex(i + 6, j + 16)].isOn = true;
  cells[getIndex(i + 6, j + 24)].isOn = true;

  cells[getIndex(i + 7, j + 11)].isOn = true;
  cells[getIndex(i + 7, j + 15)].isOn = true;

  cells[getIndex(i + 8, j + 12)].isOn = true;
  cells[getIndex(i + 8, j + 13)].isOn = true;
  return newCells;
}

function getNeighboors(cells: CellType[], i: number, j: number): CellType[] {
  return getNeighboorIndexes(i, j).map(x => cells[x]);
}
function getNeighboorIndexes(i: number, j: number): number[] {
  return [
    getIndex(i - 1, j - 1),
    getIndex(i - 1, j),
    getIndex(i - 1, j + 1),
    getIndex(i, j - 1),
    getIndex(i, j + 1),
    getIndex(i + 1, j - 1),
    getIndex(i + 1, j),
    getIndex(i + 1, j + 1),
  ];
}

function App() {
  const mutex = useRef<boolean>();
  const elementsOn = useRef<number[]>([]);
  const [presetOption, setPresetOption] = useState('p1');
  const [presetRow, setPresetRow] = useState<number>(1);
  const [presetColumn, setPresetColumn] = useState<number>(1);
  const [generationTime, setGenerationTime] = useState<number>(100);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [cells, setCells] = useState<CellType[]>(new Array(cellsPerRow * cellsPerColumn).fill(null).map(() => ({
    id: Math.random(),
    isOn: false,
  })));
  useEffect(() => {
    window.addEventListener('resize', () => {
      setErrorMessage('Window resizes are not supported, because they change the grid in unexpected ways. Please reload the page after a window resize.');
    });
  }, []);
  const [intervalState, setIntervalState] = useState<number>();
  function checkIfElementIsOn(index: number, isOn: boolean): void {
    if (isOn) {
      if (!elementsOn.current.find(el => el === index)) {
        elementsOn.current.push(index);
      }
    } else {
      const toRemove = elementsOn.current.findIndex(el => el === index)
      if (-1 !== toRemove) {
        elementsOn.current.splice(toRemove, 1);
      }
    }
  }
  function clickCell(cell: CellType): void {
    setCells(prevCells => prevCells.map(prevCell => {
      console.log('cell undefined in clickCell')
      if (prevCell.id !== cell.id) {
        return prevCell;
      }
      const index: number = cells.findIndex(c => c.id === cell.id);
      checkIfElementIsOn(index, !prevCell.isOn);
      return {
        id: cell.id,
        isOn: !prevCell.isOn,
      };
    }));
  }
  function start(): void {
    if (intervalState) {
      return;
    }
    let intervalRef = setInterval(() => {
      oneRound();
    }, generationTime || 100);
    // @ts-ignore
    setIntervalState(intervalRef);
  }
  function pause(): void {
    if (!intervalState) {
      return;
    }
    clearInterval(intervalState);
    setIntervalState(undefined);
  }
  function clearGrid(): void {
    mutex.current = false;
    if (intervalState) {
      clearInterval(intervalState);
      setIntervalState(undefined);
    }
    setCells(prevCells => prevCells.map(cell => ({
      ...cell,
      isOn: false,
    })));
  }
  function oneRound() {
    if (mutex.current) {
      console.log('prevented execution due to previous execution still running...');
      return;
    }

    mutex.current = true;
    setCells(prevCells => {
      const res = [...prevCells.map(x => ({ ...x }))];
      const toCheck = [...elementsOn.current];
      elementsOn.current.forEach(on => {
        const ij = getIJ(on);
        const neighboors = getNeighboorIndexes(ij.i, ij.j);
        neighboors.forEach(n => {
          if (!toCheck.find(x => x === n)) {
            toCheck.push(n);
          }
        })
      });
      toCheck.forEach((cell) => {
        const ij = getIJ(cell);
        const i = ij.i;
        const j = ij.j;
        if (isCorner(i, j)) {
          return;
        }
        let neighboors = getNeighboors(prevCells, i, j);
        let isOn: boolean;
        if (!prevCells[cell].isOn) {
          isOn = hasThreeOn(neighboors);
        } else {
          isOn = hasTwoOrThreeOn(neighboors);
        }
        checkIfElementIsOn(cell, isOn);
        res[cell].isOn = isOn;
      });
      mutex.current = false;
      return res;
    });
  }
  function showDoesNotFit() {
    setErrorMessage('The selected preset does not fit the place that was specified. Please select a smaller preset or specify a different place.');
  }
  function placePreset() {
    if ('p1' === presetOption) {
      const p1Width = 13;
      const p1Height = 13;
      const fits = presetRow + p1Height <= lastRow() + 1
        && presetColumn + p1Width <= lastColumn() + 1;
      if (!fits) {
        return showDoesNotFit();
      }
      setCells(prevCells => placeP1(prevCells, presetRow, presetColumn));
    } else if ('p2' === presetOption) {
      const p2Width = 3;
      const p2Height = 10;
      const fits = presetRow + p2Height <= lastRow() + 1
        && presetColumn + p2Width <= lastColumn() + 1;
      if (!fits) {
        return showDoesNotFit();
      }
      setCells(prevCells => placeP2(prevCells, presetRow, presetColumn));
    } else if ('p3' === presetOption) {
      const p3Width = 36;
      const p3Height = 9;
      const fits = presetRow + p3Height <= lastRow() + 1
        && presetColumn + p3Width <= lastColumn() + 1;
      if (!fits) {
        return showDoesNotFit();
      }
      setCells(prevCells => placeP3(prevCells, presetRow, presetColumn));
    }
    setCells(prevCells => prevCells.map((cell, i) => {
      checkIfElementIsOn(i, cell.isOn);
      return cell;
    }));
  }
  function setRow(row: string) {
    const value = parseInt(row);
    if (value < 1) {
      setPresetRow(1);
      return;
    }
    if (value > cellsPerColumn) {
      setPresetRow(lastRow());
      return;
    }
    setPresetRow(value);
  }
  function setColumn(column: string) {
    const value = parseInt(column);
    if (value < 1) {
      setPresetColumn(1);
      return;
    }
    if (value > cellsPerRow) {
      setPresetColumn(lastColumn());
      return;
    }
    setPresetColumn(value)
  }
  return (
    <div className='app'>
      <Modal
        isOpen={errorMessage !== ''}
        closeModal={() => setErrorMessage('')}
        heading='Warning!'
        description={errorMessage}
        button='Ok'
      />

      <div className='aside'>
        {intervalState && <strong style={{ color: 'lightgreen' }}>Running...</strong>}
        {!intervalState && <strong style={{ color: 'lightgreen' }}>Paused</strong>}
        <div className='controls'>
          {/** Play button */}
          <svg onClick={start} style={{ display: intervalState ? 'none' : 'block' }} fill='lightgreen' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
          </svg>
          {/** Pause button */}
          <svg onClick={pause} style={{ display: intervalState ? 'block' : 'none' }} fill='lightgreen' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
          {/** Delete button */}
          <svg onClick={clearGrid} fill='lightgreen' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
          </svg>
          {/** Forward button */}
          <svg onClick={oneRound} fill='lightgreen' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M12 8V4l8 8-8 8v-4H4V8z"/>
          </svg>
        </div>

        {/** Generation time */}
        <label htmlFor='gen-time' style={{ color: 'lightgreen' }}>Generation time (ms)</label>
        <input id='gen-time' className='input' type='number' placeholder='default = 100 ms' value={generationTime}
          onChange={e => setGenerationTime(parseInt(e.target.value))}></input>

        {/** Presets */}
        <h3 style={{ color: 'lightgreen' }}>Presets</h3>
        <div  className='coordinates-row'>
          <div className='coordinates'>
            <label htmlFor='row' style={{ color: 'lightgreen' }}>Row</label>
            <label htmlFor='column' style={{ color: 'lightgreen' }}>Column</label>
          </div>
          <div className='coordinates'>
            <input id='row' type='number' value={presetRow} onChange={e => setRow(e.target.value)}></input>
            <input id='column' type='number' value={presetColumn} onChange={e => setColumn(e.target.value)}></input>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div className='coordinates-row'>
            <img src={p1}
              className={ presetOption === 'p1' ? 'preset-img chosen-preset' : 'preset-img'}
              onClick={() => setPresetOption('p1')} ></img>
          </div>
          <div className='coordinates-row'>
            <img src={p2}
              className={ presetOption === 'p2' ? 'preset-img chosen-preset' : 'preset-img'}
              onClick={() => setPresetOption('p2')} ></img>
          </div>
          <div className='coordinates-row'>
            <img src={p3}
              className={ presetOption === 'p3' ? 'preset-img chosen-preset' : 'preset-img'}
              onClick={() => setPresetOption('p3')} ></img>
          </div>
          <button id='preset-btn' onClick={placePreset}>Place preset!</button>
        </div>



      </div>
      <div className='grid'>
        {
          cells.map((cell, index) => {
            if (!cell) {
              console.log('cell undefined in jsx')
            }
            const ij= getIJ(index);
            const i = ij.i;
            const j = ij.j;
            if (isCorner(i, j)) {
              return <></>
            }
            return <Cell title={`(${i}, ${j})`} onClick={() => clickCell(cell)} key={cell.id} isOn={cell.isOn}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
