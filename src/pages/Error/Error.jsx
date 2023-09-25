import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
  console.error(error);

  return (
   <div className="h-screen flex justify-center items-center text-center">
     <div className="space-y-5">
      <h1 className="text-5xl font-bold ">Oops!</h1>
      <p className="text-xl font-bold ">Sorry, an unexpected error has occurred.</p>
      <p className="text-5xl font-bold ">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}>
        <button className="px-3 py-2 border border-red-500 text-xl font-bold capitalize my-5">go back</button>
      </Link>
    </div>
   </div>
  )
};

export default Error;