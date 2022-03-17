import fs from 'fs';
import path from 'path';
import { setFailed, setOutput, getInput, info, startGroup, endGroup } from '@actions/core';
import { getOctokit, context } from '@actions/github';
import { render, Options } from 'ejs';


try {
  ;(async () => {
    const token = getInput('token');
    const template = getInput('template');
    const vars = getInput('vars');
    const options = getInput('options');
    const output = path.resolve(process.cwd(), getInput('output'));

    startGroup(`Github Context:`);
    info(`${JSON.stringify(context, undefined, 2)}`);
    endGroup();
    startGroup(`Github process.env:`);
    info(`${JSON.stringify(context, undefined, 2)}`);
    endGroup();

    let ejsData: Record<string, any> = { context, process };
    let ejsOptions: Options = {}

    try {
      ejsData = { ...JSON.parse(vars), context, process };
    } catch (error) {
      setFailed(`Input "vars" Error: ${error.message}`);
    }

    try {
      ejsOptions = JSON.parse(options);
    } catch (error) {
      setFailed(`Input "options" Error: ${error.message}`);
    }

    const html = await render(template, ejsData, ejsOptions);
    setOutput('svg', html);

    await fs.promises.writeFile(output, html);
  })();
} catch (error) {
  setFailed(error.message);
}