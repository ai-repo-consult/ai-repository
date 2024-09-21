import { promises as fs } from 'fs';
import { join } from 'path';

/**
 * Copia el archivo aidemos-metadata-map.json en la carpeta dist.
 * @param {string} destinationPath - La ruta donde se copiará el archivo.
 */
export async function generateJsonFile(destinationPath) {
  print('Generating JSON file...');
  try {
    // Ruta al archivo que quieres copiar (cambia la ruta si es necesario)
    const sourcePath = join(process.cwd(), 'src', 'shared', 'aidemos-metadata-map.json');

    // Asegúrate de que el archivo exista en la ubicación de origen
    try {
      await fs.access(sourcePath);
    } catch (err) {
      console.error(`The file ${sourcePath} does not exist.`);
      return;
    }

    // Copiar el archivo al destino especificado
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`File copied correctly to: ${destinationPath}`);
  } catch (err) {
    console.error(`Error when copying the file: ${err.message}`);
  }
}
