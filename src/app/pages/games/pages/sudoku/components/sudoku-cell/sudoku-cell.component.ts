import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';

@Component({
  selector: 'app-sudoku-cell',
  templateUrl: './sudoku-cell.component.html',
  styleUrls: ['./sudoku-cell.component.scss'],
})
export class SudokuCellComponent {
  @Input() number: number | null = null;
  @Input() row!: number;
  @Input() column!: number;

  @Output() sendIndices = new EventEmitter();

  @ViewChild('cell') cell!: ElementRef;

  constructor(private gameService: SudokuService) {}

  public disableArrowKeyInput = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  };

  public applyFocus = () => this.cell.nativeElement.focus();

  public disableCell = () => (this.cell.nativeElement.disabled = true);

  public handleInput = (value: string) => {
    const lastInputValue = value[value.length - 1];
    this.cell.nativeElement.value =
      this.convertInputValue(lastInputValue) || '';

    this.gameService.updateCell(
      this.row,
      this.column,
      this.cell.nativeElement.value
    );
  };

  private convertInputValue = (input: string) => {
    return input === '0' ? '' : input;
  };
}
