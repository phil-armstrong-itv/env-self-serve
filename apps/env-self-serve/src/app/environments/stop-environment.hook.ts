export const useStopEnvironment = (
  projectId: number,
  environmentId: number
): [() => Promise<boolean>] => {

  const stopEnvironment = () => {
    return fetch(`/api/projects/${projectId}/environments/${environmentId}/stop`)
    .then(r => r.ok);
  }

  return [stopEnvironment];
};
