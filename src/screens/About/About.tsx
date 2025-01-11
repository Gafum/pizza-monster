import { LazyMotion, domAnimation, m } from "framer-motion";
import styles from "./About.module.css";

function About(): JSX.Element {
   scrollTo(0, 0);
   return (
      <LazyMotion features={domAnimation}>
         <m.main
            className={styles.aboutPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
         >
            <div className={styles.firstBlock}>
               <img
                  src="/pizza-monster/main-icon.svg"
                  alt="pizza"
                  className={styles.mainImg}
               />
               <h2>Pizza Monster</h2>
            </div>
            <p>
               Welcome to Pizza Monster, where your pizza cravings meet the
               magic of technology. We are dedicated to providing a seamless and
               delightful pizza ordering experience for pizza lovers around the
               world.
            </p>
            <h2 className={styles.smallTitle}>Our Vision</h2>
            <p>
               Our vision is to create a user-friendly platform that offers a
               diverse range of mouthwatering pizzas to cater to every taste
               bud. We aim to be the go-to online market for pizza enthusiasts,
               bringing people together through the joy of pizza.
            </p>
            <h2 className={styles.smallTitle}>Why Choose Pizza Monster?</h2>
            <ul className={styles.listConteiner}>
               <li className={styles.listElement}>
                  Innovative Ordering: Our intuitive and responsive user
                  interface ensures a smooth ordering process.
               </li>
               <li className={styles.listElement}>
                  Cutting-Edge Technology: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quos, porro?
               </li>
               <li className={styles.listElement}>
                  Endless Choices: A diverse menu with options for every palate.
               </li>
               <li className={styles.listElement}>
                  Mobile-Friendly: Order your favorite pizza on the go with our
                  mobile-friendly design.
               </li>
               <li className={styles.listElement}>
                  Quality Ingredients: Each pizza is crafted with care using
                  high-quality, fresh ingredients.
               </li>
            </ul>
            <h2 className={styles.smallTitle}>Join Our Pizza Community</h2>
            <p>
               Pizza Monster is more than just a platform; it's a community of
               pizza enthusiasts. Connect with us on social media to share your
               pizza experiences and be part of the pizza-loving family.
            </p>
            <h2 className={styles.smallTitle}>Contact Us</h2>
            <ul className={styles.listConteiner}>
               <li className={styles.listElement_withIcons}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="#e0342e"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+02131 2312 3123</span>
               </li>

               <li className={styles.listElement_withIcons}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="#e0342e"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <rect width="20" height="16" x="2" y="4" rx="2" />
                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>my_email@email.com</span>
               </li>
            </ul>

            <h2 className={styles.smallTitle}>Developer</h2>
            <p>
               During the development, we used such technologies as{" "}
               <strong>Vite</strong>, <strong>React</strong>,{" "}
               <strong>Github</strong> and <strong>CSS</strong>. The images for
               pizzas were taken from the{" "}
               <a href="https://dodopizza.de/" target="_blank">
                  DODO PIZZA site
               </a>
               . Figma was used to draw the icons. Also here you can see the
               social media of the author:
            </p>
            <ul className={styles.listConteiner}>
               <li className={styles.listElement_withIcons}>
                  <a href="https://github.com/Gafum">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e0342e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                     </svg>

                     <span>GitHub</span>
                  </a>
               </li>
               <li className={styles.listElement_withIcons}>
                  <a href="https://www.youtube.com/@gafum">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e0342e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                     </svg>
                     <span>YouTube</span>
                  </a>
               </li>
               <li className={styles.listElement_withIcons}>
                  <a href="https://play.google.com/store/apps/dev?id=5298640550031789087&gl=DE">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e0342e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <polygon points="6 3 20 12 6 21 6 3" />
                     </svg>
                     <span>Google Play</span>
                  </a>
               </li>
            </ul>
         </m.main>
      </LazyMotion>
   );
}

export default About;
