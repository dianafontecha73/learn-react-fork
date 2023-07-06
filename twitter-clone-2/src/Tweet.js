import { Link } from "react-router-dom";

import TimeAgo from 'javascript-time-ago';
// Español
import es from 'javascript-time-ago/locale/es'
// Colocamos el formato en el que queremos las conversiones
TimeAgo.addDefaultLocale(es)
// Creamos formatter (Español).
const timeAgo = new TimeAgo('es-ES');

function Tweet(props){
  const { id, content, author, created_on } = props
  const url = `/tweets/${id}`;

  return(
  // Link /tweets/1 ... 
  <Link className="tweet-link" to={url}>
  <div className="tweet-container" key={id}>
    {/* <p className="tweet-title">{id}</p>   */}
    <p className="tweet-content">"{content}"</p>
    <p className="tweet-footer">{timeAgo.format(new Date(created_on))} ·&nbsp;<strong>@{author}</strong>
    </p>
  </div>
 </Link>
)}

export default Tweet;