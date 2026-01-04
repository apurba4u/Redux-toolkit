const ResultCard = ({elem}) => {
  return (
    <div className='w-[20vw] relative h-80 bg-white rounded-xl overflow-hidden'>
      <a href={elem.url} target="_blank" className='h-full'>
          {elem.type == 'photo' ? <img className='h-full w-full object-center object-cover' src={elem.src}/> : ""}
          {elem.type == 'video' ? <video autoPlay muted loop className='h-full w-full object-center object-cover' src={elem.src}/> : ""}
          {elem.type == 'gif' ? <img className='h-full w-full object-center object-cover' src={elem.src}/> : ""}
      </a>
      <div id='bottom' className='flex justify-between gap-2 items-center absolute h-[35%] w-full px-4 py-6 placeholder-cyan-100 text-white bottom-0 '>
        <h2 className='text-lg font-semibold capitalize h-15 overflow-hidden'>{elem.title}</h2>
        <button className=" border-2 border-blue-500 cursor-pointer p-3 font-medium text-white active:scale-95 rounded"> save</button>
      </div>
    </div>
  )
}

export default ResultCard