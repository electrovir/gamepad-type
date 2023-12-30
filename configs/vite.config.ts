import {join, resolve} from 'path';
import {simpleGit} from 'simple-git';
import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig(
    {
        forGitHubPages: true,
        packageDirPath: resolve(__dirname, '..'),
    },
    async (baseConfig, basePaths) => {
        const gitHash: string = await simpleGit().revparse(['HEAD']);

        return {
            ...baseConfig,
            build: {
                outDir: join(basePaths.cwd, 'dist-pages'),
            },
            define: {
                VITE_RELEASE_NAME: JSON.stringify(gitHash),
            },
        };
    },
);
