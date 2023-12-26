/* eslint-disable react/prop-types */
import "../../styles/Contributors.css";

export function Contributors({ contributors }) {
  return (
    <ul className='contribuitors'>
      {contributors.map(({ avatar, login, url }) => (
        <li key={login}>
          <a className='contribuitors-a' href={url} title={`Github de ${login}`}>
            <div>
              <img src={avatar} width={64} height={64} alt={`Avatar de ${login}`} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
