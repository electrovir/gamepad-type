import {Values} from '@augment-vir/common';

export function makeObjectKeysLowercase<Generic extends Readonly<Record<PropertyKey, unknown>>>(
    input: Generic,
): Record<PropertyKey, Values<Generic>> {
    return Object.fromEntries(
        Object.entries(input).map(
            ([
                key,
                value,
            ]) => {
                const newKey = typeof key === 'string' ? key.toLowerCase() : key;
                return [
                    newKey,
                    value,
                ];
            },
        ),
    ) as Record<PropertyKey, Values<Generic>>;
}
