import { useState, useEffect } from 'react';
import { Environment } from '@env-self-serve/api-interfaces';

export const useEnvironments = (
  projectId: number
): [Environment[], boolean] => {
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/projects/${projectId}/environments`)
      .then((r) => r.json())
      .then((r) => {
        setEnvironments(r);
        setLoaded(true);
      });
  }, [projectId]);

  return [environments, loaded];
};
