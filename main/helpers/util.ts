import sudoPrompt from '@vscode/sudo-prompt';
import { exec } from 'child_process';

async function runProcessElevated(command: string)
{
  console.log('runProcessElevated', command);
  return new Promise<string>((resolve, reject) => {
    sudoPrompt.exec(command, { name: 'Acer Nitro Fan Control Admin' }, (error, stdout, stderr) => {
      
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

async function runProcess(command: string)
{
  console.log('runProcess', command);

  return new Promise<string>((resolve, reject) => {
    exec(command, (error: any, stdout:any, stderr:any) => {
      // if (stdout) {
      //   console.log('runProcess', stdout);
      // }
      // if (stderr) {
      //   console.log('runProcess', stderr);
      // }
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
    runProcess,
}