import { useState, useEffect } from 'react';
import { Project } from '@env-self-serve/api-interfaces';

export const useProject = (id: number): [Project | undefined, boolean] => {
    const [projects, setProjects] = useState<Project>();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`/api/projects/${id}`)
          .then((r) => r.json())
          .then((r) => {
              setProjects(r);
              setLoaded(true);
          });
      }, [id]);

      return [projects, loaded];
}