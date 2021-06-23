import { useState, useEffect } from 'react';
import { Environment } from '@env-self-serve/api-interfaces';

export const useEnvironment = (
  projectId: number,
  environmentId: number
): [Environment | undefined, boolean] => {
  const [environment, setEnvironment] = useState<Environment>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/projects/${projectId}/environments/${environmentId}`)
      .then((r) => r.json())
      .then((r) => {
        setEnvironment(r);
        setLoaded(true);
      });
  }, [projectId, environmentId]);

  return [environment, loaded];
};
