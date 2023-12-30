import {areJsonEqual, filterObject} from '@augment-vir/common';
import {defaultGamepadLayouts} from '../../default-layouts';
import {defaultGamepadModelMap} from '../../default-models';
import {GamepadLayout} from '../../gamepad-layout';
import {GamepadModelMap} from '../../gamepad-model';

export type ChangedEntries = {
    layouts: ReadonlyArray<Readonly<GamepadLayout>>;
    models: Readonly<GamepadModelMap>;
};

export function extractNewChanges(
    {layouts, models}: Readonly<ChangedEntries>,
    lastSubmitted: Readonly<ChangedEntries> | undefined,
): Readonly<ChangedEntries> {
    const changedLayouts = layouts.filter((layout) => {
        const matchesDefault = !!defaultGamepadLayouts.find((defaultLayout) => {
            return areJsonEqual(defaultLayout, layout);
        });
        const matchesSubmitted: boolean = lastSubmitted
            ? !!lastSubmitted.layouts.find((submittedLayout) => {
                  return areJsonEqual(submittedLayout, layout);
              })
            : false;
        return !matchesDefault && !matchesSubmitted;
    });

    const changedModels = filterObject(models, (deviceName, newModel) => {
        const newFromDefault =
            !(deviceName in defaultGamepadModelMap) ||
            defaultGamepadModelMap[deviceName] !== newModel;
        const newFromSubmitted = lastSubmitted
            ? !(deviceName in lastSubmitted.models) || lastSubmitted.models[deviceName] !== newModel
            : true;

        return newFromSubmitted && newFromDefault;
    }) as GamepadModelMap;

    return {
        layouts: changedLayouts,
        models: changedModels,
    };
}
