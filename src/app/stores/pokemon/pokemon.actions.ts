import { createAction } from '@ngrx/store';

const actionPrefix = '[POKEMON]';

export const action = createAction(`${actionPrefix} action`);
