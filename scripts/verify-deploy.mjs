#!/usr/bin/env node

/**
 * Post-deploy verification script.
 * Checks that the deployed EPB site responds correctly.
 *
 * Usage:
 *   node scripts/verify-deploy.mjs                    # check production URL
 *   node scripts/verify-deploy.mjs https://custom.url # check a specific URL
 */

const DEFAULT_URL = "https://epb-v1.vercel.app";
const url = process.argv[2] || DEFAULT_URL;

console.log(`\n--- EPB Deploy Verification: ${url} ---`);

let exitCode = 0;

try {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "User-Agent": "epb-deploy-verify/1.0" },
  });
  const body = await res.text();

  const checks = [
    { desc: "returns 200", pass: res.status === 200 },
    { desc: "has HTML content", pass: body.includes("</html>") },
    { desc: "contains EPB branding", pass: body.toLowerCase().includes("epb") },
  ];

  for (const check of checks) {
    const icon = check.pass ? "✓" : "✗";
    console.log(`  ${icon} ${check.desc}`);
    if (!check.pass) exitCode = 1;
  }
} catch (err) {
  console.log(`  ✗ fetch failed: ${err.message}`);
  exitCode = 1;
}

console.log(exitCode === 0 ? "\n✓ All checks passed" : "\n✗ Some checks failed");
process.exit(exitCode);
