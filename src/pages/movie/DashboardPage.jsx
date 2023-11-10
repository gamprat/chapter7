import React, { useEffect, useState } from 'react';
import { useGetDataUser } from '../../services/auth/get_user';
import { Link } from 'react-router-dom';
import { Carousel } from '@material-tailwind/react';
import { CorouselItem } from '../../asset/components/corousel/CorouselItem';
import { ListData } from '../../asset/components/RanderList/ListData';
import { useDispatch, useSelector } from 'react-redux';
import { DataMovie } from '../../redux/actions/authMovies';
import { LogOut } from '../../redux/actions/authLogin';
import { SearchDataMovies } from '../../redux/actions/authSearchMovies';
import user from '../../asset/img/agam.JPG'
import { GetUser } from '../../redux/actions/authMe';

export const DashboardPage = () => {
  
// const [movies, setMovies] = useState([]);
const [PageNow, setPageNow] = useState(1);
const [SearchDataMovie, setSearchDataMovie] = useState('');
const dispatch = useDispatch()
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

// const { data: movielist } = useGetDataUser({});

const getDataMovie = async () => {
  const data = await dispatch(DataMovie(PageNow))
} 

const getDataUser = async () => {
  const userData = await dispatch(GetUser())
}

const goToSearch = (e) => {
  e.preventDefault();
  dispatch(SearchDataMovies(SearchDataMovie));
  setSearchDataMovie();
};

const movies = useSelector((store) => store.movie.dataMovie);
const user1 = useSelector((store) => store.me.dataUser)

useEffect(() => {
  getDataMovie();
  getDataUser();
  // console.log(popularMovie, "ini datanya")
}, [PageNow]);


  return (
    <div className="bg-[#1e1e2a]">
      <div className='font-sans'>
        <div className=" min-h-screen bg-transparent h-screen">
          <div className='relative z-40 p-4'>
            <div className='flex justify-between bg-slate-950 items-center'>
              <div>
                <Link className="text-xl font-semibold mb-2" to={`/dashboard`}>
                  <h1 className='text-red-500 font-bold text-4xl'>MovieList</h1>
                </Link> 
              </div>
               <div className="relative">
                <form onSubmit={goToSearch}>
                  <input type="text" className="bg-transparent border-2 text-white border-red-500 w-[30rem] h-[2.5rem] py-2 px-3 rounded-full focus:outline-none" placeholder="Search for movies..."  onChange={(e) => setSearchDataMovie(e.target.value)} value={SearchDataMovie} />
                  <button className="absolute right-0 top-0 text-white rounded-r px-3 py-2"  type="submit" onSubmit={goToSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </form>
              </div>
              <div>
                <div className='relative' onClick={toggleDropdown}>
                  <div>
                    <img src={user} className='h-11 w-11 rounded-full items-center flex' alt='user'></img>
                    <span>{isDropdownOpen }</span>
                  </div>
                  {isDropdownOpen && (          
                  <div className='absolute px-6 py-4 bg-white right-[1px] mt-2 rounded-md opacity-90'>        
                      <p className='text-[13px]'>{user1.name}</p>
                      <p className='text-[13px]'>{user1.email}</p>
                      <button onClick={()=>{dispatch(LogOut())}} className='w-full bg-red-500 text-white text-[15px] mt-2 rounded-lg hover:bg-red-600 active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out'>Logout</button>
                  </div>
                  )}  
                </div>
              </div>
            </div>
          </div>
          
          <Carousel
            className="mt-[-5rem]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {movies && movies.length > 0 ? (
              movies.map(movie => (
              <CorouselItem key={movie.id}id={movie.id} overview={movie.overview} backdrop_path={movie.backdrop_path} runtime={movie.runtime} title={movie.title} releaseDate={movie.release_date}posterPath={movie.poster_path} />
                ))) : (
              <h1 className='flex justify-center items-center min-h-screen text-white'>Loading</h1>
            )}
          </Carousel>
        </div>

        <div
          className="rounded-xl mt-[-4.2rem]"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
        </div>

        <div className="p-4">
          <div className="flex justify-between h-[2.5rem] m-0 p-0">
          </div>

          <div className="mx-auto mt-10 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {movies && movies.length > 0 ? ( 
                movies.map(movie => (
                <ListData id={movie.id} key={movie.id}title={movie.title} releaseDate={movie.release_date}posterPath={movie.poster_path} />
              ))) : (
                <h1 className='flex justify-center items-center h-screen text-white'>Loading</h1>
              )}
            </div>
                
              <div className='flex justify-between mt-8'>
              
              <button className='text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500' onClick={()=>{
                setPageNow(PageNow - 1)
              }}>Back Page</button>
              <h1 className="font-bold text-2xl text-white">{PageNow}</h1>
              <button className="text-white w-[8rem] h-[2.5rem] rounded-full font-semibold bg-red-500" onClick={() => {
                setPageNow(PageNow + 1);
              }}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
