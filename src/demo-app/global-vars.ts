declare global {
    var VITE_RELEASE_NAME: string;
}

export const globalVars = {
    releaseName: VITE_RELEASE_NAME,
};
