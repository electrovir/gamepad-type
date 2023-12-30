import {capitalizeFirstLetter} from '@augment-vir/common';

export function kebabCaseToNameCase(input: string): string {
    return input
        .split('-')
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');
}
