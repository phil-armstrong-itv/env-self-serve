import { useState, useEffect } from 'react';
import { Project } from '@env-self-serve/api-interfaces';

export const useProjects = (): [Project[], boolean] => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('/api/projects')
          .then((r) => r.json())
          .then((r) => {
              setProjects(r);
              setLoaded(true);
          });
      }, []);

      return [projects, loaded];
}