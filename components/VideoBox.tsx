const VideoBox = () => {
  return (
    <video
      controls
      className="mb-16 h-auto w-auto rounded-3xl shadow-2xl duration-300 ease-in-out md:hover:scale-[180%]"
    >
      <source src="tutorial.mp4" type="video/mp4" />
    </video>
  )
}

export default VideoBox
