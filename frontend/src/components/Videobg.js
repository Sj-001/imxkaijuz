import background from "./videos/background.mp4";

function Videobg() {
    return (
      <>
<video playsInline autoPlay muted loop>
  <source src={background} type="video/mp4" />
</video>
</>
  );
}

export default Videobg;