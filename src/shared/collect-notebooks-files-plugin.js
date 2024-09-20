// @ts-check

import { existsSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

import { createBuildChecksumFile } from './build-checksum.js';
import { AIDEMOS_METADATA_FILE_NAME } from './constants.js';

/**
 *
 * @returns {import('vite').PluginOption}
 */
export const collectNotebooksFilesPlugin = () => {
  /** @type {import('vite').ResolvedConfig} */
  let config;
  let distPath = '';

  return {
    name: 'generate-notebooks-map-file',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      distPath = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      if (config.command === 'build') {
        await createBuildChecksumFile(distPath);
      }
    },
    async configureServer(devServer) {
      const notebooksMapFileExists = existsSync(join(distPath, AIDEMOS_METADATA_FILE_NAME));
      if (notebooksMapFileExists) {
        console.info(
          `"${AIDEMOS_METADATA_FILE_NAME}" file already exists and is served from "${distPath}" dist directory.`
        );
      }

      devServer.middlewares.use(...getFileMiddleware(AIDEMOS_METADATA_FILE_NAME, config.base, distPath));
    },
  };
};

/**
 * @param {string} fileName
 * @param {string} urlBase
 * @param {string} distPath
 * @returns {[string, import('vite').Connect.NextHandleFunction]}
 */
function getFileMiddleware(fileName, urlBase, distPath) {
  const route = `${urlBase}${fileName}`;
  /** @type {import('vite').Connect.NextHandleFunction} */
  const handler = (_, res) => {
    const fileContent = readFileSync(join(distPath, fileName), {
      encoding: 'utf8',
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(fileContent);
    res.end();
  };
  return [route, handler];
}
