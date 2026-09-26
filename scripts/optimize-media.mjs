import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";

const execFileAsync = promisify(execFile);

const INPUT_DIR = path.resolve("./public");
const OUTPUT_DIR = path.resolve("./public-optimized");

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
]);

const VIDEO_EXTENSIONS = new Set([
  ".mp4",
  ".mov",
  ".mkv",
  ".avi",
  ".webm",
]);

const IMAGE_CONFIG = {
  maxWidth: 1400,
  quality: 78,
};

const VIDEO_CONFIG = {
  maxWidth: 1920,
  crf: 24,
  preset: "medium",
  audioBitrate: "128k",
};


/* ==========================================================================
   HELPERS
   ========================================================================== */

async function ensureDir(directory) {
  await fs.mkdir(directory, {
    recursive: true,
  });
}


async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}


function getOutputData(filePath) {
  const relativePath = path.relative(
    INPUT_DIR,
    filePath
  );

  const parsed = path.parse(relativePath);

  const outputFolder = path.join(
    OUTPUT_DIR,
    parsed.dir
  );

  return {
    relativePath,
    parsed,
    outputFolder,
  };
}


/* ==========================================================================
   IMAGE OPTIMIZATION
   ========================================================================== */

async function optimizeImage(filePath) {
  const {
    relativePath,
    parsed,
    outputFolder,
  } = getOutputData(filePath);

  await ensureDir(outputFolder);

  const outputPath = path.join(
    outputFolder,
    `${parsed.name}.webp`
  );

  try {
    await sharp(filePath)
      .rotate()
      .resize({
        width: IMAGE_CONFIG.maxWidth,

        withoutEnlargement: true,
      })
      .webp({
        quality: IMAGE_CONFIG.quality,
        effort: 4,
      })
      .toFile(outputPath);

    console.log(
      `✓ Imagen optimizada: ${relativePath}`
    );
  } catch (error) {
    console.error(
      `✗ Error optimizando imagen: ${relativePath}`
    );

    throw error;
  }
}


/* ==========================================================================
   VIDEO OPTIMIZATION
   ========================================================================== */

async function optimizeVideo(filePath) {
  if (!ffmpegPath) {
    throw new Error(
      "FFmpeg executable was not found."
    );
  }

  const {
    relativePath,
    parsed,
    outputFolder,
  } = getOutputData(filePath);

  await ensureDir(outputFolder);

  const outputPath = path.join(
    outputFolder,
    `${parsed.name}.mp4`
  );

  /*
   * scale:
   *
   * - limita el video a VIDEO_CONFIG.maxWidth
   * - mantiene el aspect ratio
   * - no aumenta videos pequeños
   * - garantiza dimensiones pares para H.264
   */

  const scaleFilter =
    `scale='min(${VIDEO_CONFIG.maxWidth},iw)':-2`;

  const args = [
    "-y",

    "-i",
    filePath,

    "-map_metadata",
    "-1",

    "-vf",
    scaleFilter,

    "-c:v",
    "libx264",

    "-preset",
    VIDEO_CONFIG.preset,

    "-crf",
    String(VIDEO_CONFIG.crf),

    "-pix_fmt",
    "yuv420p",

    "-c:a",
    "aac",

    "-b:a",
    VIDEO_CONFIG.audioBitrate,

    "-movflags",
    "+faststart",

    outputPath,
  ];

  try {
    await execFileAsync(
      ffmpegPath,
      args,
      {
        windowsHide: true,
        maxBuffer: 10 * 1024 * 1024,
      }
    );

    console.log(
      `✓ Video optimizado: ${relativePath}`
    );
  } catch (error) {
    console.error(
      `✗ Error optimizando video: ${relativePath}`
    );

    if (error.stderr) {
      console.error(error.stderr);
    }

    throw error;
  }
}


/* ==========================================================================
   FILE PROCESSOR
   ========================================================================== */

async function processFile(filePath) {
  const extension = path
    .extname(filePath)
    .toLowerCase();

  if (IMAGE_EXTENSIONS.has(extension)) {
    await optimizeImage(filePath);
    return;
  }

  if (VIDEO_EXTENSIONS.has(extension)) {
    await optimizeVideo(filePath);
  }
}


/* ==========================================================================
   DIRECTORY WALKER
   ========================================================================== */

async function walk(directory) {
  const entries = await fs.readdir(
    directory,
    {
      withFileTypes: true,
    }
  );

  for (const entry of entries) {
    const filePath = path.join(
      directory,
      entry.name
    );

    if (entry.isDirectory()) {
      await walk(filePath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    await processFile(filePath);
  }
}


/* ==========================================================================
   MAIN
   ========================================================================== */

async function main() {
  console.log(
    "\nSound Fusion - Media Optimizer\n"
  );

  if (!(await fileExists(INPUT_DIR))) {
    throw new Error(
      `Input directory does not exist: ${INPUT_DIR}`
    );
  }

  await ensureDir(OUTPUT_DIR);

  await walk(INPUT_DIR);

  console.log(
    "\n✓ Multimedia optimizada correctamente."
  );

  console.log(
    `✓ Salida: ${OUTPUT_DIR}\n`
  );
}


main().catch((error) => {
  console.error(
    "\n✗ Error durante la optimización:"
  );

  console.error(error);

  process.exitCode = 1;
});