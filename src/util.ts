import sudoPrompt from '@vscode/sudo-prompt';

async function runProcessElevated(command: string)
{
  console.log('runProcessElevated', command);
  return new Promise<string>((resolve, reject) => {
    sudoPrompt.exec(command, { name: 'MM Acer Nitro Fan Control Admin' }, (error, stdout, stderr) => {
      
      if (stdout) {
        console.log('runProcessElevated stdout: ', stdout);
      }

      if (stderr) {
        console.log('runProcessElevated stderr: ', stderr);
      }

      if (error) {
        reject(error);
      } else {
        resolve(stdout.toString());
      }

    });
  });
}

export default {
    runProcessElevated,
}