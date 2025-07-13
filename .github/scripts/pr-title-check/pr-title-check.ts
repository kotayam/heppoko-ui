import * as core from "@actions/core";
import * as fs from "fs";
import { validatePRTitle } from "../tools.ts";

const main = async () => {
  const eventPath = process.env.GITHUB_EVENT_PATH!;
  const event = JSON.parse(fs.readFileSync(eventPath, "utf-8"));
  const title = event.pull_request?.title;

  if (!title) {
    core.setFailed("PR title not found");
    return;
  }

  if (!validatePRTitle(title)) {
    core.setFailed(
      `PR title "${title}" does not match the required format: \n` +
        `"type: description [LINEAR-issue-number]" e.g. "feat: add button [HEP-1234]"`,
    );
  }
};

main();
