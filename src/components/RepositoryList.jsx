import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { UseState } from "react";


// http://api.github.com/orgs/rocketseat/repos

const repository = {
  name:'unform',
  description: 'forms in React',
  link: 'http://github.com/unform/unform'
}

export function RepositoryList() {
 const [repositories, setRepoditories] = useState([]);
 
 useEffect(() => {
   fetch('http://api.github.com/orgs/rocketseat/repos')
   .then(response => response.json())
   .then(data => console.log(data))
 }, []);


 
 return (
  <section className="repository-list">
    <h1>Lista de repositorio</h1>

    <ul>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
    </ul>
  </section>
 );

}