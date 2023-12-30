import {PartialAndUndefined} from '@augment-vir/common';
import {SystemVersions} from './system-versions';

/**
 * A mapping of gamepad button and axe numbers to their names. Mappings depend on the current system
 * and gamepad model (so those are included as well).
 */
export type GamepadLayout = {
    gamepadModels: string[];
    systemVersions: SystemVersions[];
    inputMappings: Record<string, string>;
    notes:
        | PartialAndUndefined<{
              /**
               * A simple note with an explanation that does not significantly impact the gamepad's
               * performance.
               */
              info: string;
              /**
               * An important note that explains why the gamepad does not work or why it has has
               * major issues.
               */
              warning: string;
          }>
        | undefined;
};
