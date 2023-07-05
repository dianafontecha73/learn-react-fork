function Tweet(props){
  const {id, content, created_on, author} = props;
  return (
    <>
    <div className="tweet-item">
      <p className="tweet-field id">{id}</p>
      <p className="tweet-field content">{content}</p>
      <p className="tweet-field author">{created_on} por <a href="#">@{author}</a></p>
    </div>
    </>
  )
}

export default Tweet;