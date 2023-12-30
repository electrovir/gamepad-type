import {areJsonEqual} from '@augment-vir/common';
import Bowser from 'bowser';

const bowser = Bowser.getParser(navigator.userAgent);

/**
 * Collection of system versions that are used to differentiate gamepad layouts (as they can differ
 * dramatically between different browser and operating system versions).
 */
export type SystemVersions = Readonly<{
    osName: string;
    osVersion: string;
    browserName: string;
    browserVersion: string;
}>;

/**
 * Get the current system's collection of versions. Parses the user agent string using the bowser
 * package.
 */
export function getSystemVersions(): SystemVersions {
    return {
        browserVersion: bowser.getBrowserVersion(),
        browserName: bowser.getBrowserName(),
        osName: bowser.getOSName(),
        osVersion: bowser.getOSVersion(),
    };
}

/** Check if the given systemVersion is in the array of systemVersions. */
export function includesSystemVersion(
    systemVersions: ReadonlyArray<Readonly<SystemVersions>>,
    systemVersion: Readonly<SystemVersions>,
): boolean {
    return !!systemVersions.find((matchThis) => areJsonEqual(matchThis, systemVersion));
}
