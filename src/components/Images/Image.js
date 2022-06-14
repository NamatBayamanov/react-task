function Image({thumbnailUrl, title}) {
  return ( 
    <div>
    {/* <h2>
      {title}
    </h2> */}
      <img src={thumbnailUrl} alt={title}/>
    </div>
  );
}

export default Image;