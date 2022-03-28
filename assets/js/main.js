const icono = document.getElementById('toggle-icon');
const data = document.getElementById('data');

var english = '';

icono.addEventListener('click',() => {
    if (icono.classList.contains('on')){
        icono.classList.remove('on')
        icono.classList.add('off')
        icono.innerHTML=`
        <p class="len-toggle">Idioma: Ingles</p>
        <i class="fas fa-toggle-off"></i>`
        data.innerHTML=`<div id="data" class="center" data-aos="fade-right">
        <div class="about-me">
            <h2>About Me</h2>
            <div class="barra-about-me" data-aos="zoom-in">
                <div class="relleno-about-me">
                </div>
            </div>
            <p>Advanced student of Information Systems Engineering with solid knowledge in web development (Front-End - Back-End).
            I like to learn new things every day to increase my knowledge and to enhance skills</p>
        </div>
        <div class="habilidades">
            <h2>Skills</h2>
            <div class="skills">
                <div class="html">
                    <div class="barra">
                        <div class="relleno-html">
                            <div class="tech-html">
                                HTML
                            </div>
                            <div class="progress-html">
                                90%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="css">
                    <div class="barra">
                        <div class="relleno-css">
                            <div class="tech-css">
                                CSS
                            </div>
                            <div class="progress-css">
                                90%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <div class="barra">
                        <div class="relleno-js">
                            <div class="tech-js">
                                JavaScript
                            </div>
                            <div class="progress-js">
                                80%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sql">
                    <div class="barra">
                        <div class="relleno-sql">
                            <div class="tech-sql">
                                SQL
                            </div>
                            <div class="progress-sql">
                                70%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="php">
                    <div class="barra">
                        <div class="relleno-php">
                            <div class="tech-php">
                                PHP
                            </div>
                            <div class="progress-php">
                                70%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="laravel">
                    <div class="barra">
                        <div class="relleno-lr">
                            <div class="tech-lr">
                                Laravel
                            </div>
                            <div class="progress-lr">
                                65%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="node">
                    <div class="barra">
                        <div class="relleno-nd">
                            <div class="tech-nd">
                                NodeJS
                            </div>
                            <div class="progress-nd">
                                75%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bootstrap">
                    <div class="barra">
                        <div class="relleno-bt">
                            <div class="tech-bt">
                                Bootstrap
                            </div>
                            <div class="progress-bt">
                                90%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="other-skills">
            <h2>Other Skills</h2>
            <div class="container-other-skills">
                <a href="#">AJAX</a>
                <a href="#">JSON</a>
                <a href="#">MY-SQL</a>
                <a href="#">NO-SQL</a>
                <a href="#">MongoDB</a>
                <a href="#">PHPMyAdmin</a>
                <a href="#">Tailwind</a>
                <a href="#">Jquery</a>
                <a href="#">SASS</a>
                <a href="#">LESS</a>
                <a href="#">WordPress</a>
            </div>
        </div>
        <div class="resume">
            <div class="experience">
                <div class="experience-tit-icon">
                    <div class="experience-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <div class="experience-text">
                        <h2>Experiences</h2>
                    </div>
                </div>
                <div class="experience-1">
                    <div class="experience-1-tittle">
                        Freelance
                    </div>
                    <div class="experience-1-years">
                        2020 - Present
                    </div>
                </div>
            </div>
            <div class="other-experience">
                <div class="other-experience-tit-icon">
                    <div class="other-experience-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div class="other-experience-text">
                        <h2>Other experiences</h2>
                    </div>
                </div>
                <div class="other-experience-1">
                    <div class="other-experience-1-tittle">
                        Automovil Club Argentino
                    </div>
                    <div class="other-experience-1-years">
                        2016 - 2017
                    </div>
                    <div><div class="other-experience-1-text">
                        Employee
                    </div></div>
                </div>
            </div>             
            <div class="education">
                <div class="education-tit-icon">
                    <div class="education-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="education-text">
                        <h2>Education</h2>
                    </div>
                </div>
                <div class="education-1">
                    <div class="education-1-tittle">
                        Escuela de Educacion Tecnica N°2
                    </div>
                    <div class="education-1-years">
                        2010 - 2017
                    </div>
                    <div class="education-1-text">
                        Electro mechanical technician
                    </div>
                </div>
                <div class="education-2">
                    <div class="education-2-tittle">
                        Universidad Tecnologica Nacional (UTN)
                    </div>
                    <div class="education-2-years">
                        2018 - Present
                    </div>
                    <div class="education-2-text">
                        Information System Engineering
                    </div>
                </div>
            </div>
            <div class="projects">
                <div class="projects-tit-icon">
                    <div class="projects-icon">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div class="projects-text">
                        <h2>Projects</h2>
                    </div>
                </div>
                <p>My lastest projects developed...</p>
                <div class="project-box">
                <div class="project">
                    <a href="https://tomasgaitan14.github.io/datatables/">Datatables</a>
                </div>
                <div class="project">
                   <a href="https://tomasgaitan14.github.io/task-app/">Task App</a>
                </div>
                <div class="project">
                    <a href="https://tomasgaitan14.github.io/calculadora/">Calculadora</a>
                 </div>
                 <div class="project">
                    <a href="https://tomasgaitan14.github.io/app-clima/">Weather App</a>
                </div>
            </div>
            </div>
        </div>
    </div>`
    } else {
        icono.classList.remove('off')
        icono.classList.add('on')
        icono.innerHTML=`
        <p class="len-toggle">Idioma: Español</p>
        <i class="fas fa-toggle-on"></i>`
        data.innerHTML=`<div id="data" class="center" data-aos="fade-right">
        <div class="about-me">
            <h2>Acerca de mi</h2>
            <div class="barra-about-me" data-aos="zoom-in">
                <div class="relleno-about-me">
                </div>
            </div>
            <p>Estudiante avanzado de Ingeniería en Sistemas de Información con solidos conocimientos en el desarrollo web (Front-End - Back-End).
            Me gusta aprender cosas nuevas dia a dia para aumentar mis conocimientos y poder potenciar habilidades</p>
        </div>
        <div class="habilidades">
            <h2>Habilidades</h2>
            <div class="skills">
                <div class="html">
                    <div class="barra">
                        <div class="relleno-html">
                            <div class="tech-html">
                                HTML
                            </div>
                            <div class="progress-html">
                                90%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="css">
                    <div class="barra">
                        <div class="relleno-css">
                            <div class="tech-css">
                                CSS
                            </div>
                            <div class="progress-css">
                                90%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <div class="barra">
                        <div class="relleno-js">
                            <div class="tech-js">
                                JavaScript
                            </div>
                            <div class="progress-js">
                                80%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sql">
                    <div class="barra">
                        <div class="relleno-sql">
                            <div class="tech-sql">
                                SQL
                            </div>
                            <div class="progress-sql">
                                70%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="php">
                    <div class="barra">
                        <div class="relleno-php">
                            <div class="tech-php">
                                PHP
                            </div>
                            <div class="progress-php">
                                70%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="laravel">
                    <div class="barra">
                        <div class="relleno-lr">
                            <div class="tech-lr">
                                Laravel
                            </div>
                            <div class="progress-lr">
                                65%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="node">
                    <div class="barra">
                        <div class="relleno-nd">
                            <div class="tech-nd">
                                NodeJS
                            </div>
                            <div class="progress-nd">
                                75%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bootstrap">
                    <div class="barra">
                        <div class="relleno-bt">
                            <div class="tech-bt">
                                Bootstrap
                            </div>
                            <div class="progress-bt">
                                90%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="other-skills">
            <h2>Otras habilidades</h2>
            <div class="container-other-skills">
                <a href="#">AJAX</a>
                <a href="#">JSON</a>
                <a href="#">MY-SQL</a>
                <a href="#">NO-SQL</a>
                <a href="#">MongoDB</a>
                <a href="#">PHPMyAdmin</a>
                <a href="#">Tailwind</a>
                <a href="#">Jquery</a>
                <a href="#">SASS</a>
                <a href="#">LESS</a>
                <a href="#">WordPress</a>
            </div>
        </div>
        <div class="resume">
            <div class="experience">
                <div class="experience-tit-icon">
                    <div class="experience-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <div class="experience-text">
                        <h2>Experiencias</h2>
                    </div>
                </div>
                <div class="experience-1">
                    <div class="experience-1-tittle">
                        Freelance
                    </div>
                    <div class="experience-1-years">
                        2020 - Presente
                    </div>
                </div>
            </div>
            <div class="other-experience">
                <div class="other-experience-tit-icon">
                    <div class="other-experience-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div class="other-experience-text">
                        <h2>Otras experiencias</h2>
                    </div>
                </div>
                <div class="other-experience-1">
                    <div class="other-experience-1-tittle">
                        Automovil Club Argentino
                    </div>
                    <div class="other-experience-1-years">
                        2016 - 2017
                    </div>
                    <div><div class="other-experience-1-text">
                        Empleado
                    </div></div>
                </div>
            </div>             
            <div class="education">
                <div class="education-tit-icon">
                    <div class="education-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="education-text">
                        <h2>Educacion</h2>
                    </div>
                </div>
                <div class="education-1">
                    <div class="education-1-tittle">
                        Escuela de Educacion Tecnica N°2
                    </div>
                    <div class="education-1-years">
                        2010 - 2017
                    </div>
                    <div class="education-1-text">
                        Tecnico Electro Mecanico
                    </div>
                </div>
                <div class="education-2">
                    <div class="education-2-tittle">
                        Universidad Tecnologica Nacional (UTN)
                    </div>
                    <div class="education-2-years">
                        2018 - Presente
                    </div>
                    <div class="education-2-text">
                        Ingeniería en Sistemas de Información
                    </div>
                </div>
            </div>
            <div class="projects">
                <div class="projects-tit-icon">
                    <div class="projects-icon">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div class="projects-text">
                        <h2>Proyectos</h2>
                    </div>
                </div>
                <p>Mis ultimos proyectos desarrollados...</p>
                <div class="project-box">
                        <div class="project">
                            <a href="https://tomasgaitan14.github.io/datatables/">Datatables</a>
                        </div>
                        <div class="project">
                           <a href="https://tomasgaitan14.github.io/task-app/">Task App</a>
                        </div>
                        <div class="project">
                            <a href="https://tomasgaitan14.github.io/calculadora/">Calculadora</a>
                         </div>
                         <div class="project">
                            <a href="https://tomasgaitan14.github.io/app-clima/">Weather App</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>`
    }
});



   

