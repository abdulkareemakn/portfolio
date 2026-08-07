import { access, cp, mkdir, readFile, rm } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const blogRoot = resolve(process.env.PORTFOLIO_BLOG_DIR ?? join(projectRoot, "..", "blog"));
const portfolioDist = join(projectRoot, "dist");
const blogDist = join(blogRoot, "dist");
const stagedBlog = join(portfolioDist, "blog");

function run(command, args, cwd) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd, stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", code => {
      if (code === 0) resolvePromise();
      else reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

async function assertBlogSetup() {
  try {
    await access(join(blogRoot, "package.json"), constants.R_OK);
    await access(join(blogRoot, "astro.config.ts"), constants.R_OK);
  } catch {
    throw new Error(
      `Blog repository not found at ${blogRoot}. Set PORTFOLIO_BLOG_DIR to its absolute path.`,
    );
  }

  const astroConfig = await readFile(join(blogRoot, "astro.config.ts"), "utf8");
  if (!/base:\s*["']\/blog["']/.test(astroConfig)) {
    throw new Error("The blog must use base: \"/blog\" before it can be staged at /blog.");
  }
}

async function main() {
  await assertBlogSetup();
  await run("pnpm", ["exec", "astro", "build"], projectRoot);
  await run("pnpm", ["--dir", blogRoot, "run", "build"], blogRoot);

  await rm(stagedBlog, { recursive: true, force: true });
  await mkdir(stagedBlog, { recursive: true });
  await cp(blogDist, stagedBlog, { recursive: true });

  console.log("\nStaged blog build at dist/blog for deployment.");
}

main().catch(error => {
  console.error(`\nCombined build failed: ${error.message}`);
  process.exitCode = 1;
});
