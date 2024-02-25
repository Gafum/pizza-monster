import { motion } from "framer-motion";
import styles from "./About.module.css";

function About(): JSX.Element {
   scrollTo(0, 0);
   return (
      <motion.main
         className={styles.aboutPage}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
      >
         <p>
            Welcome to Pizza Monster, where your pizza cravings meet the magic
            of technology. We are dedicated to providing a seamless and
            delightful pizza ordering experience for pizza lovers around the
            world.
         </p>
         <h2 className={styles.smallTitle}>Our Vision</h2>
         <p>
            Our vision is to create a user-friendly platform that offers a
            diverse range of mouthwatering pizzas to cater to every taste bud.
            We aim to be the go-to online market for pizza enthusiasts, bringing
            people together through the joy of pizza.
         </p>
         <h2 className={styles.smallTitle}>Why Choose Pizza Monster?</h2>
         <ul className={styles.listConteiner}>
            <li className={styles.listElement}>
               Innovative Ordering: Our intuitive and responsive user interface
               ensures a smooth ordering process.
            </li>
            <li className={styles.listElement}>
               Cutting-Edge Technology: Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Quos, porro?
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
                  viewBox="0 0 512 512"
                  width="20"
               >
                  <path
                     fill="#e0342e"
                     d="M439.62 396.531a3153555.92 3153555.92 0 0 1-54.398-65.832c-1.45-1.755-3.067-3.614-5.289-4.107-2.903-.643-5.7 1.25-8.073 3.043l-40.219 30.384c-8.03 6.067-17.968 12.468-27.433 9.051-5.483-1.98-9.312-6.857-12.834-11.504-20.403-26.911-40.806-53.824-61.211-80.735l-.372-.507-58.748-82.546c-3.381-4.75-6.89-9.86-7.141-15.684-.432-10.055 8.647-17.625 16.836-23.475 13.673-9.765 27.345-19.532 41.017-29.298 2.42-1.728 5.064-3.832 5.317-6.794.195-2.268-1.097-4.367-2.338-6.274l-46.561-71.589c-5.304-8.154-11.224-16.814-20.362-20.15-10.658-3.889-22.367.601-32.784 5.096-17.341 7.483-35.259 15.614-47.316 30.152-20.164 24.317-19.45 60.744-17.678 90.53 2.075 34.883 13.587 70.892 27.119 102.854 13.997 33.06 32.551 64.087 54.536 92.485 20.489 29.369 44.486 56.266 71.773 79.438 26.456 22.467 57.378 44.216 90.045 56.624 27.893 10.595 62.442 22.164 91.674 10.19 17.477-7.16 30.593-21.828 42.918-36.139 7.403-8.597 15.188-18.429 14.661-29.763-.448-9.713-6.943-17.952-13.139-25.45z"
                  ></path>
               </svg>
               <span>+02131 2312 3123</span>
            </li>

            <li className={styles.listElement_withIcons}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5 32 32"
                  width="20"
               >
                  <path
                     fill="#e0342e"
                     d="M27 4.71H5a4.505 4.505 0 0 0-4.5 4.5v13.58c0 2.481 2.019 4.5 4.5 4.5h22c2.481 0 4.5-2.019 4.5-4.5V9.21c0-2.481-2.019-4.5-4.5-4.5zm-1.33 3L24.29 8.8l-7.36 5.81c-.55.43-1.31.43-1.86 0L7.97 9 6.333 7.71h19.338zM27 24.29H5c-.827 0-1.5-.673-1.5-1.5V9.305l9.71 7.665c.82.65 1.81.97 2.79.97s1.97-.32 2.79-.97l9.71-7.662V22.79c0 .827-.673 1.5-1.5 1.5z"
                  ></path>
               </svg>
               <span>my_email@email.com</span>
            </li>
         </ul>
      </motion.main>
   );
}

export default About;
