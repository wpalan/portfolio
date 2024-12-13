import Image from "next/image"
import { FaHtml5, FaCss3Alt, FaNodeJs, FaVuejs, FaBootstrap, FaLinkedin } from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { BiLogoMongodb, BiLogoGmail } from "react-icons/bi";

import Carrousel from "../components/Swiper"


export default function Home() {
  return (
  <main class="bg-black bg-gradient-to-b from-black via-purple-900 to-black text-teal-200">
  
    <nav class="flex mb-20">
        <div class="flex flex-col items-center justify-center w-48 h-[700px]">
            <img src="./images/logo.png" alt="Perfil" class="w-40 h-56 rounded-full"/>
            <ul class="flex flex-col items-center justify-around text-center mt-6 space-y-6 font-sans">
                <li class="text-aqua">W. P. Alan</li>
                <li><a href="#py" class="hover:underline">Proyectos</a></li>
                <li><a href="#cf" class="hover:underline">Certificados</a></li>
                <li><a href="#sks" class="hover:underline">Skills</a></li>
                <li><a href="#ctc" class="hover:underline">Contacto</a></li>
            </ul>
        </div>
        <div class="flex flex-col justify-center mx-auto mt-40 text-center">
            <h1 class="text-4xl font-bold">ALAN EMMANUEL WOZNIEZKA PIZARRO</h1>
            <h2 class="text-2xl mt-4">Full Stack Developer</h2>
            <p class="mt-12 text-3xl">Sobre mí</p>
            <p class="max-w-lg mx-auto mt-6 text-lg">
                Desarrollador web full-stack, estudiante de la Tecnicatura de Programación en la UTN y recibido en la Fundación Pescar & J. P. Morgan del programa Full Stack. Me especializo en el detalle y brindar una excelente experiencia al usuario y cliente.
            </p>
          
        </div>
    </nav>

    <section id="py" class=" conteiner mt-20">
        <div class="text-center">
            <h2 class="text-3xl">Proyectos</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div class="card bg-gray-800 text-white p-4 rounded-lg shadow-md">
                <video class="w-full mt-2 rounded-lg" controls preload="true">
                <source src="./images/video.mp4" type="video/mp4"/>
                </video>
                <h5 class="text-lg font-bold">Plataforma Educambio</h5>
                <p class="mt-2 text-sm">Proyecto colaborativo, orientado a la creación de una aplicación web para ser utilizado por profesores y estudiantes. Se utiliza una base de datos con registro, login, perfiles propios, calendario, landing-page y actualziaciones sobre contenidos updateados a la plataforma</p>
                <small class="block mt-4 text-gray-400">Tecnologías utilizadas: TailwindCSS, ReactJS, NextJS y MongoDB</small>
            </div>
           
           
           
            <div class="card bg-gray-800 text-white p-4 rounded-lg shadow-md">
                
                
                <Carrousel
    image1="/images/Proyecto Mendoza.jpg"
    image2="/images/Proyecto Mendoza 2.jpg"
  />
                <h5 class="text-lg font-bold">Turismo Mendoza</h5>
                <p class="mt-1 text-sm">Proyecto orientado a ser una guía turística con el fin de simular una One-Page con videos, imágenes, estructuración SEO y diseño responsive para una correcta adaptación a todas las pantallas.</p>
                <small class="block mt-[2.41rem] text-gray-400">Tecnologías utilizadas: HTML, jQuery, Bootstrap5</small>
            </div>
           
           
           
            <div class="card bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <Carrousel
    image1="/images/Proyecto UTN.jpg"
    image2="/images/Proyecto UTN2.jpg"
    image3="/images/Proyecto UTN3.jpg"
  />
                <h5 class="text-lg font-bold">Proyecto UTN</h5>
                <p class="mt-1 text-sm">Proyecto final integrador donde se realizó la evaluación del curso Profesional Web Developer de la UTN donde se implementaron tecnologías combinadas como jQuery, Bootstrap, CSS3, creación de SVG personalizados, drag & drop, estructuramiento SEO y web responsive.</p>
                <small class="block mt-4 text-gray-400">Tecnologías utilizadas: Bootstrap5, jQuery, CSS3 y HTML5</small>
            </div>
        </div>
    </section>
 

    <section id="cf" class="mt-20">
        <div class="text-center ">
            <h2 class="text-3xl">Certificados</h2>
            <p class="text-lg mt-4 max-w-lg mx-auto">
                Certificados obtenidos en la Universidad Tecnológica Nacional del curso Profesional FrontEnd Web Developer en los meses de Marzo hasta Noviembre de 2023.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
       
        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Desarrollo Web en HTML5 y CSS3</h5>
            <img src="./images/utn1.jpg" alt="Certificado" class="w-full mt-4 rounded-lg" />
            <p class="mt-2">CER-Y6YKQ95R-862885</p>
            <a href="https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado" class="block bg-black text-white mt-4 py-2 rounded hover:opacity-80 transition">
                Link validador de Certificado
            </a>
        </div>

        
        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Desarrollo Web en Bootstrap</h5>
            <img src="./images/utn2.jpg" alt="Certificado" class="w-full mt-4 rounded-lg" />
            <p class="mt-2">CER-1M6W4FTT-862888</p>
            <a href="https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado" class="block bg-black text-white mt-4 py-2 rounded hover:opacity-80 transition">
                Link validador de Certificado
            </a>
        </div>

        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Cetificado Desarrollador Front-End Developer</h5>
            <img src="./images/titulo_final.jpg" alt="Certificado" class="w-full mt-4 rounded-lg" />
            <p class="mt-2">CER-4AT15SJ6-862884</p>
            <a href="https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado" class="block bg-black text-white mt-4 py-2 rounded hover:opacity-80 transition">
                Link validador de Certificado
            </a>
        </div>

        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Cetificado Maquetado Avanzado</h5>
            <img src="./images/certificado_maquetado.jpeg" alt="Certificado" class="w-full mt-4 rounded-lg" />
        </div>

        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Cetificado Paradigma de Objetos</h5>
            <img src="./images/certificado_objetos.jpeg" alt="Certificado" class="w-full mt-4 rounded-lg" />
        </div>

        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Cetificado JavaScript Avanzado</h5>
            <img src="./images/certificado_js.jpeg" alt="Certificado" class="w-full mt-4 rounded-lg" />
        </div>

        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Cetificado MongoDB</h5>
            <img src="./images/certificado_mongo.jpeg" alt="Certificado" class="w-full mt-4 rounded-lg" />
        </div>

        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Cetificado ReactJS</h5>
            <img src="./images/certificado_react.jpeg" alt="Certificado" class="w-full mt-4 rounded-lg" />
        </div>

        <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
            <h5 class="font-bold">Cetificado NodeJS</h5>
            <img src="./images/certificado_nodejs.jpeg" alt="Certificado" class="w-full mt-4 rounded-lg" />
        </div>


    </div>

    

    </section>


    <section id="sks" class="mt-20">
        <div class="text-center">
            <h2 class="text-3xl">Tecnologías que utilizo</h2>
            <h3 class="text-xl mt-4 mb-6">Todas poseen su respectivo certificado de capacitación y prácticas</h3>
        </div>

        <div class="grid place-items-center grid-cols-1 gap-y-8 gap-x-0 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
       
            <div class="flex place-content-center place-items-center text-center w-40 h-20  bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p class="ml-2">HTML5</p>
                <FaHtml5 class="w-20 h-12 text-yellow-500 ml-6" />     
            </div>

            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p class="ml-2">CSS3</p>
                <FaCss3Alt class="w-20 h-12 text-blue-500 ml-8" />
            </div>
            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p class="pl-2">JavaScript</p>
                <FaNodeJs class="w-20 h-12 text-orange-500" />
            </div>
            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p class="ml-0">Bootstrap5</p>
                <FaBootstrap class="w-12 h-12 ml-[0.6rem] text-violet-600" />
            </div>
            
            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p class="pl-2">TailwindCSS</p>
                <RiTailwindCssFill class="w-20 h-12 text-blue-500" />
            </div>
            
            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p>ReactJS</p>
                <RiReactjsFill class="w-20 h-12 text-blue-500" />
            </div>
            
            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p>VueJS</p>
                <FaVuejs class="w-20 h-12 text-green-600 pl-8" />
            </div>
            
            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p>NextJS</p>
                <RiNextjsFill class="w-20 h-12 text-white" />
            </div>
            
            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p>NodeJS</p>
                <DiNodejs class="w-20 h-12 text-green-800" />
            </div>

            <div class="flex place-content-center place-items-center text-center w-40 h-20 bg-black rounded-2xl border-blue-700 border-solid border-4 hover:transition-transform ease-in-out delay-[30ms] hover:-translate-y-1 hover:scale-125 hover:border-white">
                <p class="ml-2">MongoDB</p>
                <BiLogoMongodb class="w-20 h-12 text-green-600" />
            </div>

        </div>



    </section>

    <footer class="flex justify-center items-center text-2xl pb-6 pt-20 mt-20">
  <div class="flex flex-col items-center">
    <p class="text-center mb-6">¿Buscas trabajar juntos?</p>

    
    <div class="bg-sky-600 w-80 h-16 flex justify-center items-center mb-6 animate-pulse-slow">
      <h2 class="text-center text-white">¡Contactame!</h2>
    </div>

    <p class="container text-center p-6">Me encuentro abierto a propuestas laborales freelance en todo momento. Podés contactarme vía LinkedIn, o escribirme a mi casilla de correo electrónico.</p>
    <p class="text-center">¡Disponibilidad full time y siempre al servicio del cliente!</p>

   
    <div class="flex justify-center mt-6">
      <div class="p-2">
        <a href="https://www.linkedin.com/in/wp-alan/">
        <FaLinkedin class="text-6xl" />
        </a>
      </div>
      <div class="p-2">
        <a href="mailto:awozniezka@gmail.com">
        <BiLogoGmail class="text-6xl" />
        </a>
      </div>
    </div>
  </div>
</footer>
    
  </main>
  );
  
}
