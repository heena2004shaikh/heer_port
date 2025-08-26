
const Blog = ({values, index}) => {
    const {title, date, content, author, image } = values;
    
  return (
    <div key={index} className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:scale-100 hover:translate-y-3 hover:transition-transform hover:ease-in-out hover: cursor-pointer">
      <div>
        <img
          src={image}
          className="w-full object-cover"
          alt=""
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
      <div className="absolute inset-x-0 bottom-0 z-20 p-4">
        <p className="mb-1 text-sm  text-white text-opacity-80">
          {author} • <time>{date}</time>
        </p>
        <h3 className="text-s md:text-xl  font-medium text-white">{title}</h3>
        <p className="text-xs md:text-sm mt-1 text-white text-opacity-80">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Blog;
