import localForage from 'localforage-esm';
import {defaultGamepadLayouts} from '../../default-layouts';
import {defaultGamepadModelMap} from '../../default-models';
import {GamepadLayout} from '../../gamepad-layout';
import {GamepadModelMap} from '../../gamepad-model';
import {ChangedEntries} from './check-changes';

const gamepadTypeStore = localForage.createInstance({
    name: 'gamepad-type',
    storeName: 'gamepad-type',
    description: 'For storing user-entered gamepad information.',
});
const savedLayoutsKey = 'saved-layouts';
const savedTypesKey = 'saved-types';
const submittedChangesKey = 'submitted-changes';

export async function resetAllSavedData() {
    await gamepadTypeStore.clear();
}

export async function loadSavedLayouts(): Promise<ReadonlyArray<Readonly<GamepadLayout>>> {
    return (await gamepadTypeStore.getItem(savedLayoutsKey)) ?? defaultGamepadLayouts;
}

export async function saveLayouts(layouts: ReadonlyArray<Readonly<GamepadLayout>>): Promise<void> {
    await gamepadTypeStore.setItem(savedLayoutsKey, layouts);
}

export async function loadSavedModelMap(): Promise<Readonly<GamepadModelMap>> {
    const loadedModelMap = (await gamepadTypeStore.getItem(savedTypesKey)) ?? {};
    return {
        ...defaultGamepadModelMap,
        ...loadedModelMap,
    };
}

export async function saveModelMap(types: Readonly<GamepadModelMap>): Promise<void> {
    await gamepadTypeStore.setItem(savedTypesKey, types);
}

export async function loadSubmittedChanges(): Promise<Readonly<ChangedEntries> | undefined> {
    return (await gamepadTypeStore.getItem(submittedChangesKey)) || undefined;
}

export async function savedSubmittedChanges(changes: Readonly<ChangedEntries>): Promise<void> {
    await gamepadTypeStore.setItem(submittedChangesKey, changes);
}
