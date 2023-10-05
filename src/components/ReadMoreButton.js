const ReadMoreButton = ({ linkText, linkURL }) => {
  return (
    <a href={linkURL} className="btn">
      {linkText}
    </a>
  )
}
export default ReadMoreButton
