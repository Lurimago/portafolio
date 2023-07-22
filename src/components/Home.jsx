import "../styles/home.css";
import imgPhotoCarnet from "../img/Foto carnet sin fondo.png";
const Home = () => {
  return (

     <section className="home">
     <div className="home-sci">
     <a href="#"><i className='bx bxl-linkedin' ></i></a>
      <a href="#"><i className='bx bxl-github' ></i></a>
      <a href="#"><i className='bx bxl-gmail' ></i></a>
      <a href="#"><i className='bx bxl-facebook'></i></a>
      <a href="#"><i className='bx bxl-whatsapp' ></i></a>
      <a href="#"><i className='bx bxl-instagram' ></i></a>
      </div> 
        
     <div className="home-content">
         <h1>Hola, soy Luis Ricardo Marcelo</h1>
        <h3>
        <p>Soy</p></h3>
        <p>Joven apasionado por la tecnología, abriéndome camino en el increíble
mundo de la programación, el testing y la agilidad, aprendiendo cada día algo nuevo...<br/>Soy como el salmón que va
contracorriente, me adapto a los cambios, y afronto los nuevos desafíos.</p>
         <a href="#" className="btn" >Download CV</a>
    </div>
    <div className="home-img">
      <div className="glowing-circle">
        <span></span>
        <span></span>
      <div className="image">
      <img className="imgPhotoCarnet" src={imgPhotoCarnet} />
      </div>
    </div>
    </div>
</section>

  );
};

export default Home;
