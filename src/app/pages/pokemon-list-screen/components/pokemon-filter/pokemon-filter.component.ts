import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

import { PokemonFilterOutputValues } from './pokemon-filter.model';
import { PokemonType } from '../../../../shared';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrl: './pokemon-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonFilterComponent {
  @Output() filterChange = new EventEmitter<PokemonFilterOutputValues>();

  public readonly pokemonTypeOptions = Object.values(PokemonType).map((id) => ({
    id: id === PokemonType.All ? '' : id,
    label: id,
  }));

  form = new FormGroup({
    search: new FormControl<string | null>(null),
    pokemonType: new FormControl<PokemonType | string>('', {
      nonNullable: true,
    }),
    isOnlyCaughtShown: new FormControl<boolean>(false, { nonNullable: true }),
  });

  ngOnInit(): void {
    this.watchFormChanges();
  }

  private watchFormChanges(): void {
    this.form.valueChanges
      .pipe(
        untilDestroyed(this),
        distinctUntilChanged(
          <T, K>(a: T, b: K): boolean => JSON.stringify(a) === JSON.stringify(b)
        ),
        debounceTime(200),
        map(() => this.form.getRawValue())
      )
      .subscribe((formValue) => {
        this.filterChange.emit(formValue);
      });
  }
}
