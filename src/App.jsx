import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import mkGandhi from "./images/mkGandhi.jpg";
import kheda from "./images/kheda.jpg";
import saltMarch from "./images/saltmarch.jpg";
import nonCoop from "./images/nonCoop.jpg";
import quitIndia from "./images/quitIndia.jpg";

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="bg-gradient-to-b from-[#FF671F] via-white to-[#046A38] h-full w-full p-6 flex flex-col font-serif overflow-x-hidden">
      <nav className="fixed top-0 left-0 z-10 mb-12 h-12 bg-white p-2 hidden lg:w-full lg:flex lg:flex-row lg:justify-between">
        <h1 className="text-3xl lg:text-3xl">Mahatma Gandhi</h1>
        <div className="flex flex-row gap-2">
          <button className="border border-black px-3 rounded-lg hover:bg-gray-200 transition ease-in-out">
            <a href="#intro">Intro</a>
          </button>
          <button className="border border-black px-3 rounded-lg hover:bg-gray-200 transition ease-in-out">
            <a href="#earlyLife">Life</a>
          </button>
          <button className="border border-black px-3 rounded-lg hover:bg-gray-200 transition ease-in-out">
            <a href="#principles">Principles</a>
          </button>
          <button className="border border-black px-3 rounded-lg hover:bg-gray-200 transition ease-in-out">
            <a href="#education">Education</a>
          </button>
          <button className="border border-black px-3 rounded-lg hover:bg-gray-200 transition ease-in-out">
            <a href="#quotes">Quotes</a>
          </button>
          <button className="border border-black px-3 rounded-lg hover:bg-gray-200 transition ease-in-out">
            <a href="#movements">Movements</a>
          </button>
          <button className="border border-black px-3 rounded-lg hover:bg-gray-200 transition ease-in-out">
            <a href="#legacy">Legacy</a>
          </button>
        </div>
      </nav>
      <h1 className="text-3xl lg:text-4xl lg:hidden">Mahatma Gandhi</h1>
      <br />
      <AnimatedSection>
        <div>
          <h1 className="text-2xl lg:text-3xl underline underline-offset-2 lg:mt-5">
            Introduction
          </h1>
          <div
            id="intro"
            className="flex flex-col lg:flex-row gap-2 w-full scroll-mt-24"
          >
            <div
              id="intro_text"
              className="lg:min-w-[70%] lg:h-full text-justify text-sm lg:text-lg"
            >
              Mohandas Karamchand Gandhi (1869-1948), known as Mahatma Gandhi,
              was an Indian lawyer and anti-colonial nationalist who championed
              nonviolent resistance to lead India to independence from British
              rule. Born in Gujarat, he trained in law in London and practiced
              in South Africa, where he first employed nonviolent resistance.
              Returning to India in 1915, he led the Indian National Congress,
              organizing mass campaigns for civil rights, poverty alleviation,
              women's rights, and ultimately self-rule. Gandhi's iconic
              leadership included the Dandi Salt March and the Quit India
              Movement. Despite imprisonment, his dedication to religious
              pluralism faced challenges leading to India's partition in 1947.
              Gandhi's efforts to quell post-independence violence included
              several hunger strikes. He was assassinated in 1948 by a Hindu
              nationalist. His birthday, October 2, is celebrated as Gandhi
              Jayanti in India and the International Day of Nonviolence
              globally, and he is revered as the Father of the Nation in India.
            </div>
            <div
              id="intro_img"
              className="lg:min-w-[30%] lg:h-full flex flex-col items-center justify-center align-top lg:pl-7"
            >
              <img
                src={mkGandhi}
                alt="Mahatma_Gandhi"
                className="max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] rounded-xl border-4 border-white"
              ></img>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <br />
      <AnimatedSection>
        <div>
          <h1 className="text-2xl lg:text-3xl underline underline-offset-2">
            Early Life
          </h1>
          <div
            id="earlyLife"
            className=" w-full text-justify text-sm lg:text-lg scroll-mt-24"
          >
            Mohandas Karamchand Gandhi, born in 1869 in Porbandar, Gujarat,
            India, was the son of Karamchand Uttamchand Gandhi, a prominent
            figure in Porbandar state. Raised in a religiously eclectic
            household, Gandhi was deeply influenced by his mother's devoutness
            and early exposure to Indian classics. He received his education in
            Rajkot and later at Alfred High School, excelling academically
            despite a lack of interest in sports. At 13, he married Kasturbai
            Gokuldas Kapadia in an arranged marriage, a significant event that
            shaped his personal life. Gandhi experienced profound losses with
            the deaths of his father and first child, which deeply affected him.
            Despite initially enrolling in Samaldas College, he later dropped
            out and returned home, marking a pivotal moment of introspection.
            These early experiences laid the foundation for Gandhi's later
            philosophical and political journey towards nonviolent resistance
            and leadership in India's independence movement.
          </div>
        </div>
      </AnimatedSection>
      <br />
      <AnimatedSection>
        <div>
          <h1 className="text-2xl lg:text-3xl underline underline-offset-2">
            Principles
          </h1>
          <div
            id="principles"
            className="flex flex-col lg:flex-row gap-3 scroll-mt-24"
          >
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Ahimsa
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  Ahimsa, or non-violence, was central to Gandhi's philosophy.
                  He believed in resolving conflicts without violence,
                  emphasizing respect for all life. Ahimsa extended beyond
                  physical non-violence to include avoiding harm in thoughts and
                  words.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Satyagraha
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  Satyagraha, meaning "truth force," was Gandhi's method of
                  non-violent resistance. It involved peaceful protests and
                  non-cooperation with injustice. Gandhi used this principle to
                  highlight moral truth and gain support for his causes.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Sarvodaya
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  Sarvodaya, or universal upliftment, was Gandhi's vision of
                  social equality. He believed in improving the welfare of all,
                  especially the marginalized. Sarvodaya promoted reforms for
                  social, economic, and political justice.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Swadeshi
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  Swadeshi, or self-reliance, was Gandhi's call for economic
                  independence. He urged Indians to boycott British goods and
                  support local industries like khadi. Swadeshi aimed to foster
                  national pride and economic self-sufficiency.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
      <br />
      <AnimatedSection>
        <div>
          <h1 className="text-2xl lg:text-3xl underline underline-offset-2">
            Education
          </h1>
          <div
            id="education"
            className=" w-full text-justify text-sm lg:text-lg scroll-mt-24"
          >
            Mohandas Karamchand Gandhi's education began in local schools in
            Rajkot, where he studied arithmetic, history, Gujarati, and
            geography. At the age of 11, he attended Alfred High School in
            Rajkot, excelling academically despite being a shy and average
            student with little interest in sports. In 1887, Gandhi graduated
            from high school and briefly attended Samaldas College in Bhavnagar.
            However, he soon left to join his family in Porbandar. In 1888,
            Gandhi traveled to London to study law at the Inner Temple, where he
            was called to the bar in 1891. His legal education and experiences
            in London significantly influenced his worldview, shaping his future
            efforts in social and political activism.
          </div>
        </div>
      </AnimatedSection>
      <br />
      <AnimatedSection>
        <div>
          <h1 className="text-2xl lg:text-3xl underline underline-offset-2">
            Famous quotes
          </h1>
          <div
            id="quotes"
            className="flex flex-col lg:flex-row gap-3 scroll-mt-24"
          >
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                “Be the change that you wish to see in the world.”
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                “In a gentle way, you can shake the world.”
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                “A man is but a product of his thoughts. What he thinks he
                becomes.”
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                “The weak can never forgive. Forgiveness is the attribute of the
                strong.”
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl border border-black p-3">
                “An eye for an eye only ends up making the whole world blind.”
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
      <br />
      <AnimatedSection>
        <div>
          <h1 className="text-2xl lg:text-3xl underline underline-offset-2">
            Independence Movements
          </h1>
          <div
            id="movements"
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 scroll-mt-24"
          >
            <AnimatedSection>
              <div
                id="movement_kheda"
                className="border border-black p-2 rounded-xl mb-2 lg:mb-0 lg:p-5 order-1 lg:order-1"
              >
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Champaran and Kheda Agitations
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  Gandhi's involvement in the Champaran Agitation (1917) and
                  Kheda Satyagraha (1918) marked his early forays into leading
                  civil disobedience movements against British rule. In
                  Champaran, Bihar, he mobilized farmers against oppressive
                  indigo planters, demanding fair treatment and land reforms.
                  This movement highlighted Gandhi's approach of nonviolent
                  resistance and gained significant attention for its success in
                  addressing the grievances of the rural population. Similarly,
                  in Kheda district of Gujarat, Gandhi supported farmers facing
                  a severe crop failure and challenged the British authorities
                  to waive taxes. His efforts in both movements showcased his
                  commitment to social justice and laid the groundwork for
                  larger movements to come.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="block lg:p-10 order-2 lg:order-2 mb-2 lg:mb-0">
                <img
                  className="border-4 border-[#FF671F] rounded-xl w-full h-full"
                  src={kheda}
                  alt="kheda_agitation"
                ></img>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="block lg:p-10 order-4 lg:order-3 mb-2 lg:mb-0">
                <img
                  className="border-4 border-[#FF671F] rounded-xl w-full h-full"
                  src={nonCoop}
                  alt="non_cooperation_movement"
                ></img>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div
                id="movement_non_coop"
                className="border border-black p-2 rounded-xl mb-2 lg:mb-0 lg:p-5 order-3 lg:order-4"
              >
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Non-Cooperation Movement
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  The Non-Cooperation Movement (1920-22) marked a significant
                  escalation in Gandhi's campaign for India's independence.
                  Following the Jallianwala Bagh massacre in 1919, Gandhi called
                  for non-cooperation with British institutions, urging Indians
                  to boycott British goods, schools, and government services.
                  The movement aimed to assert Indian self-reliance and unity
                  through nonviolent resistance. It saw mass participation
                  across the country, with millions joining in protests and
                  resignations from British-administered posts. Although the
                  movement was suspended due to incidents of violence in Chauri
                  Chaura, it demonstrated Gandhi's ability to mobilize broad
                  support and solidify his role as a leader of the nationalist
                  movement.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div
                id="movement_salt"
                className="border border-black p-2 rounded-xl mb-2 lg:mb-0 lg:p-5 order-5 lg:order-5"
              >
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Salt March
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  The Salt March (1930), also known as the Dandi March, became
                  one of Gandhi's most iconic protests against British colonial
                  rule. In response to the British monopoly on salt production
                  and taxation, Gandhi led a 240-mile march from Sabarmati
                  Ashram to the coastal town of Dandi, where he and his
                  followers illegally produced salt from seawater. This act
                  defied British laws and sparked a nationwide civil
                  disobedience movement against salt taxes and colonial
                  oppression. The Salt March garnered international attention
                  and inspired similar acts of defiance throughout India,
                  emphasizing the power of nonviolent protest as a tool for
                  social and political change.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="block lg:p-10 order-6 lg:order-6 mb-2 lg:mb-0">
                <img
                  className="border-4 border-[#FF671F] rounded-xl w-full h-full"
                  src={saltMarch}
                  alt="salt_march"
                ></img>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="block lg:p-10 order-8 lg:order-7 mb-2 lg:mb-0">
                <img
                  className="border-4 border-[#FF671F] rounded-xl w-full h-full"
                  src={quitIndia}
                  alt="quit_india"
                ></img>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div
                id="movement_quitIn"
                className="border border-black p-2 rounded-xl mb-2 lg:mb-0 lg:p-5 order-7 lg:order-8"
              >
                <h2 className="text-lg lg:text-2xl underline underline-offset-2">
                  Quit India Movement
                </h2>
                <p className=" w-full text-justify text-sm lg:text-lg">
                  The Quit India Movement (1942) was Gandhi's final major
                  campaign for India's independence. Amidst World War II, Gandhi
                  called for British withdrawal from India, demanding immediate
                  independence. The movement galvanized millions of Indians
                  across all strata of society to join in mass protests,
                  strikes, and civil disobedience against British rule. Despite
                  widespread arrests of nationalist leaders, including Gandhi
                  himself, the movement severely strained British resources and
                  administrative control. It marked a turning point in India's
                  struggle for independence, setting the stage for negotiations
                  that eventually led to India's freedom in 1947. The Quit India
                  Movement underscored Gandhi's unwavering commitment to
                  nonviolence and his pivotal role in shaping India's destiny as
                  a free nation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
      <br />
      <AnimatedSection>
        <div>
          <h1 className="text-2xl lg:text-3xl underline underline-offset-2 text-white">
            Legacy and Assassination
          </h1>
          <div
            id="legacy"
            className=" w-full text-justify text-sm lg:text-lg text-white scroll-mt-24"
          >
            Mahatma Gandhi was assassinated on January 30, 1948, by Nathuram
            Godse, a Hindu nationalist who opposed Gandhi’s efforts towards
            Hindu-Muslim unity. Gandhi's legacy as the Father of the Nation in
            India is profound. His principles of non-violence, civil
            disobedience, and social equality continue to inspire movements for
            civil rights and freedom worldwide. His birthday, October 2, is
            commemorated as the International Day of Non-Violence.
          </div>
        </div>
      </AnimatedSection>
      <br />
    </div>
  );
}

export default App;
