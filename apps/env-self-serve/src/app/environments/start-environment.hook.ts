export const useStartEnvironment = (
  projectId: number,
  environmentId: number
): [() => Promise<boolean>] => {

  const startEnvironment = () => {
    return fetch(`/api/projects/${projectId}/environments/${environmentId}/start`)
    .then(r => r.ok);
  }

  return [startEnvironment];
};
