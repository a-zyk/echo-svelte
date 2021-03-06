import { writable } from 'svelte/store';

export const bladder = writable({});

export const kidneyL = writable({});
export const kidneyR = writable({});

export const spleen = writable({});

export const liver = writable({});

export const gallB = writable({});

export const stomach = writable({});

export const intestines = writable({});

export const pancreas = writable({});

export const adrenalsL = writable({});

export const adrenalsR = writable({});

export const femaleTractL = writable({});
export const femaleTractR = writable({});
export const uterus = writable({});

export const maleTractL = writable({});
export const maleTractR = writable({});
export const prostate = writable({});

export const lymphnodes = writable({
    hepatic: [{}],
    splenic: [{}],
    stomach: [{}],
    jejunal: [{}],
    stomach: [{}],
    pancrDuo: [{}],
    colic: [{}],
    lumbarRen: [{}],
    iliacInt: [{}],
    iliacMed: [{}],
    sacral: [{}],
});

export const norms = writable({});

