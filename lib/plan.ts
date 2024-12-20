// Many of the problems in this repo involve working with 2D grids. This class
// is a simple wrapper around a 2D array that provides some useful methods for
// working with such grids. 

type Fn<T, U> = (value: T, x: number, y: number) => U;

type Position = { x: number, y: number };

type Cell<T> = {
  value: T;
  x: number;
  y: number;
};

type NeighborsOptions = {
  diagonals?: boolean;
};

export class Plan<T> {
  private cells: T[][];
  
  private constructor(values: T[][]) {
    this.cells = values;
  }
  
  static fromFile(filePath: string): Plan<string> {
    return new Plan(
      Deno
        .readTextFileSync(filePath)
        .split('\n')
        .map((line) => line.split(''))
    );
  }

  public get width(): number {
    return this.cells[0].length;
  }

  public get height(): number {
    return this.cells.length;
  }

  public isInside(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  public get(x: number, y: number): T | null {
    const row = this.cells[y];
    if (row === undefined) {
      return null;
    }

    return row[x] ?? null;
  }

  public at(x: number, y: number): T {
    const value = this.get(x, y);
    if (value === null) {
      throw new Error(`Position (${x}, ${y}) is outside the grid`);
    }
    
    return value;
  }

  public set(x: number, y: number, value: T): void {
    this.cells[y][x] = value;
  }

  public map<U>(fn: Fn<T, U>): Plan<U> {
    const newCells = this.cells.map((row, y) => {
      return row.map((cell, x) => fn(cell, x, y));
    });

    return new Plan(newCells);
  }

  public find(predicate: Fn<T, boolean>): Cell<T> | null {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (predicate(this.cells[y][x], x, y)) {
          return { value: this.cells[y][x], x, y };
        }
      }
    }

    return null;
  }

  public findAll(predicate: Fn<T, boolean>): Cell<T>[] {
    const cells: Cell<T>[] = [];

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (predicate(this.cells[y][x], x, y)) {
          cells.push({ value: this.cells[y][x], x, y });
        }
      }
    }

    return cells;
  }

  public count(predicate: Fn<T, boolean>): number {
    let count = 0;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (predicate(this.cells[y][x], x, y)) {
          count++;
        }
      }
    }

    return count;
  }

  public row(y: number): T[] {
    return this.cells[y];
  }

  public rows(): T[][] {
    return this.cells;
  }

  public column(x: number): T[] {
    return this.cells.map((row) => row[x]);
  }

  public columns(): T[][] {
    const result: T[][] = [];
    for (let x = 0; x < this.width; x++) {
      result.push(this.column(x));
    }

    return result;
  }

  public get diagonalsCount(): number {
    return this.width + this.height - 1;
  }

  public diagonal(index: number): T[] {
    if (index < 0 || index >= this.diagonalsCount) {
      return [];
    }

    const diagonal: T[] = [];

    const xStart = Math.min(index, this.width - 1);
    const yStart = Math.max(0, index - this.width + 1);

    for (let x = xStart, y = yStart; x >= 0 && y < this.height; x--, y++) {
      diagonal.push(this.cells[y][x]);
    }

    return diagonal;
  }

  public antiDiagonal(index: number): T[] {
    if (index < 0 || index >= this.diagonalsCount) {
      return [];
    }

    const diagonal: T[] = [];

    const xStart = Math.max(0, this.width - 1 - index);
    const yStart = Math.max(0, index - this.width + 1);

    for (let x = xStart, y = yStart; x < this.width && y < this.height; x++, y++) {
      diagonal.push(this.cells[y][x]);
    }

    return diagonal;
  }

  public diagonals(): T[][] {
    const diagonals: T[][] = [];

    for (let i = 0; i < this.diagonalsCount; i++) {
      diagonals.push(this.diagonal(i));
    }

    return diagonals;
  }

  public antiDiagonals(): T[][] {
    const diagonals: T[][] = [];

    for (let i = 0; i < this.diagonalsCount; i++) {
      diagonals.push(this.antiDiagonal(i));
    }

    return diagonals;
  }

  public neighbors(x: number, y: number, options: NeighborsOptions = {}): Cell<T>[] {
    const { diagonals = false } = options;
    const neighbors: Cell<T>[] = [];

    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) {
          continue;
        }

        if (!diagonals && dx !== 0 && dy !== 0) {
          continue;
        }

        const nx = x + dx;
        const ny = y + dy;

        if (this.isInside(nx, ny)) {
          neighbors.push({ value: this.cells[ny][nx], x: nx, y: ny });
        }
      }
    }

    return neighbors;
  }

  public toString(): string {
    return this.cells.map((row) => row.join('')).join('\n');
  }
};
