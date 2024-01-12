const Video = () => {
  return (
    <div className="wrapper flex justify-center items-center py-8 px-2 lg:p-0">
      <div className="w-[640px] h-[380px]">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lOKASgtr6kU?si=zp9QkatH4vue6eCY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
export default Video;
