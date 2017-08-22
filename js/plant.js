class Plant {
  constructor(col, row, canvasGrid) {
    this.seedCol = col;
    this.seedRow = row;
    this.canvasGrid = canvasGrid;
    this.prevColDelta = 0;
    this.stalk = new Stalk(col, row, this.canvasGrid);
  }

  update() {
    this.canvasGrid.update(this.seedCol, this.seedRow, '#FFA300');
  }

  updateNextSquare() {
    // Change current frontier color to dark green.
    if (this.frontierRow >= 0 && this.seedRow != this.frontierRow) {
      this.canvasGrid.update(this.frontierCol, this.frontierRow, DARK_GREEN);
    }

    if (!this.stalk.isGrown) {
      this.stalk.grow(this.canvasGrid);
    }
  }
}
