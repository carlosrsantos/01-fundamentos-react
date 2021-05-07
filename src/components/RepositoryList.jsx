import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/carlosrsantos/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[]);


  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => { //todo primeiro item deve ter um KEY, exigido pelo MAP
          return <RepositoryItem key={repository.name} repository={repository} />
        })}        
       
      </ul>
    </section>
  );
}