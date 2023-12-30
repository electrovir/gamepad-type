import {initSentry} from 'sentry-vir/dist/esm/browser';
import {globalVars} from './global-vars';

const isDev = window.location.hostname === 'localhost';

export function setupSentry() {
    initSentry({
        dsn: 'https://5b5d58b459305bfcd595aabfd356136c@o4506447710060544.ingest.sentry.io/4506479530737664',
        isDev,
        releaseEnv: isDev ? 'dev' : 'prod',
        releaseName: globalVars.releaseName,
    });
}
