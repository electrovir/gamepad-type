import {PropertyValueType} from '@augment-vir/common';

export function makeObjectKeysLowercase<Generic extends Readonly<Record<PropertyKey, unknown>>>(
    input: Generic,
): Record<PropertyKey, PropertyValueType<Generic>> {
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
    ) as Record<PropertyKey, PropertyValueType<Generic>>;
}
