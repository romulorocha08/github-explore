import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
 return(
  <section className="repository-list">
    <h1>Lista de repositorio</h1>

    <ul>
      <RepositoryItem repository="unform2" description="forms in react" link="http://github.com/unform/unform"/>
      <RepositoryItem/>
      <RepositoryItem/>
      <RepositoryItem/>
    </ul>
  </section>
 );

}