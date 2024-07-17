import './App.css';
import { useState, useRef } from 'react';
import Cell from './Cell';
import p1 from './images/pattern_1.png';
import p2 from './images/pattern_2.png';

const cellWidth = 10;
const cellsPerRow = Math.floor((window.innerWidth - 250) / cellWidth) + 2;
const cellsPerColumn = Math.floor(window.innerHeight / cellWidth) + 2;
type CellType = {
  id: number;
  isOn: boolean;
};

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
  const [cells, setCells] = useState<CellType[]>(new Array(cellsPerRow * cellsPerColumn).fill(null).map(() => ({
    id: Math.random(),
    isOn: false,
  })));
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
  function placePreset() {
    if ('p1' === presetOption) {
      setCells(prevCells => placeP1(prevCells, presetRow, presetColumn));
    } else if ('p2' === presetOption) {
      setCells(prevCells => placeP2(prevCells, presetRow, presetColumn));
    }
    setCells(prevCells => prevCells.map((cell, i) => {
      checkIfElementIsOn(i, cell.isOn);
      return cell;
    }));
  }
  return (
    <div className='app'>
      <div className='aside'>
        {intervalState && <strong style={{ color: 'lightgreen' }}>Running...</strong>}
        {!intervalState && <strong style={{ color: 'lightgreen' }}>Paused</strong>}
        <div className='controls'>
          {/** Play button */}
          <svg onClick={start} fill='lightgreen' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
          </svg>
          {/** Pause button */}
          <svg onClick={pause} fill='lightgreen' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
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
            <input id='row' type='number' value={presetRow} onChange={e => setPresetRow(parseInt(e.target.value))}></input>
            <input id='column' type='number' value={presetColumn} onChange={e => setPresetColumn(parseInt(e.target.value))}></input>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div className='coordinates-row'>
            <input type='radio'
              value='p1'
              checked={presetOption === 'p1'}
              onChange={(e) => setPresetOption(e.target.value)}
              ></input>
            <img src={p1} className='preset-img' ></img>
          </div>
          <div className='coordinates-row'>
            <input type='radio'
              value='p2'
              checked={presetOption === 'p2'}
              onChange={(e) => setPresetOption(e.target.value)}
              ></input>
            <img src={p2} className='preset-img' ></img>
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
