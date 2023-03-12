import { writable, Writable } from "svelte/store";

export type ModalNames = 'NAV_MENU';

export const openModals: Writable<Set<ModalNames>> = writable(new Set());

