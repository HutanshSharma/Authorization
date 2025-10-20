export default function RightPanel(){
    return (
        <div className="md:flex-1 bg-gradient-to-br flex flex-col justify-center relative overflow-hidden">
          <div className="bg-[#3a47b0] z-10 h-1/2 w-full rotate-10 rounded-4xl absolute -top-48 left-10 "></div>
          <div className="bg-[#5463fe] z-5 h-full w-full rotate-10 rounded-4xl absolute top-0 left-14"></div>
          <div className="bg-[#5599ff] z-10 h-2/3 w-full rotate-30 rounded-4xl absolute top-3/4 -left-10"></div>
        </div>
    )
}