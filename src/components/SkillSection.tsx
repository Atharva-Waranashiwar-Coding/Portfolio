import {
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiAngular, SiHtml5, SiCss3,
  SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiExpress, SiFastapi,
  SiGraphql, SiPostgresql, SiMongodb, SiFirebase, SiGooglecloud,
  SiDocker, SiTerraform, SiGithubactions, SiVercel, SiKubernetes,
  SiAuth0, SiJsonwebtokens, SiGit, SiGithub, SiFigma, SiSwagger, SiPostman,
  SiJest, SiTestinglibrary, SiRedis
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import SkillIcon from "./SkillsIcon"; 

function SkillsSection() {
  return (
    <section className="bg-[#1a1a1a] py-16 px-8 animate-fade-in">
      <h3 className="text-3xl font-bold text-center mb-12">Skills & Tools</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white text-center">

        {/* Languages */}
        <div>
          <p className="text-xl font-semibold mb-2">Languages</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiPython className="text-3xl text-[#CA0000]" />} label="Python" />
            <SkillIcon icon={<SiJavascript className="text-3xl text-[#CA0000]" />} label="JavaScript (ES6+)" />
            <SkillIcon icon={<SiTypescript className="text-3xl text-[#CA0000]" />} label="TypeScript" />
            <SkillIcon icon={<FaJava className="text-3xl text-[#CA0000]" />} label="Java" />
          </div>
        </div>

        {/* Frontend */}
        <div>
          <p className="text-xl font-semibold mb-2">Frontend</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiReact className="text-3xl text-[#CA0000]" />} label="React.js" />
            <SkillIcon icon={<SiNextdotjs className="text-3xl text-[#CA0000]" />} label="Next.js" />
            <SkillIcon icon={<SiAngular className="text-3xl text-[#CA0000]" />} label="Angular" />
            <SkillIcon icon={<SiTailwindcss className="text-3xl text-[#CA0000]" />} label="Tailwind CSS" />
            <SkillIcon icon={<SiRedux className="text-3xl text-[#CA0000]" />} label="Redux" />
            <SkillIcon icon={<SiHtml5 className="text-3xl text-[#CA0000]" />} label="HTML5" />
            <SkillIcon icon={<SiCss3 className="text-3xl text-[#CA0000]" />} label="CSS3" />
          </div>
        </div>

        {/* Backend & APIs */}
        <div>
          <p className="text-xl font-semibold mb-2">Backend & APIs</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiFastapi className="text-3xl text-[#CA0000]" />} label="FastAPI" />
            <SkillIcon icon={<SiNodedotjs className="text-3xl text-[#CA0000]" />} label="Node.js" />
            <SkillIcon icon={<SiExpress className="text-3xl text-[#CA0000]" />} label="Express.js" />
            <SkillIcon icon={<SiGraphql className="text-3xl text-[#CA0000]" />} label="GraphQL" />
          </div>
          <p className="text-sm text-gray-400 mt-2">RESTful APIs, OpenAI API, Microservices</p>
        </div>

        {/* Databases */}
        <div>
          <p className="text-xl font-semibold mb-2">Databases</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiPostgresql className="text-3xl text-[#CA0000]" />} label="PostgreSQL" />
            <SkillIcon icon={<SiMongodb className="text-3xl text-[#CA0000]" />} label="MongoDB" />
            <SkillIcon icon={<SiFirebase className="text-3xl text-[#CA0000]" />} label="Firestore" />
            <SkillIcon icon={<SiRedis className="text-3xl text-[#CA0000]" />} label="Redis" />
          </div>
          <p className="text-sm text-gray-400 mt-2">SQLAlchemy ORM</p>
        </div>

        {/* Cloud & DevOps */}
        <div>
          <p className="text-xl font-semibold mb-2">Cloud & DevOps</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiGooglecloud className="text-3xl text-[#CA0000]" />} label="Google Cloud Platform" />
            <SkillIcon icon={<FaAws className="text-3xl text-[#CA0000]" />} label="AWS (EC2, S3)" />
            <SkillIcon icon={<SiDocker className="text-3xl text-[#CA0000]" />} label="Docker" />
            <SkillIcon icon={<SiTerraform className="text-3xl text-[#CA0000]" />} label="Terraform" />
            <SkillIcon icon={<SiGithubactions className="text-3xl text-[#CA0000]" />} label="GitHub Actions" />
            <SkillIcon icon={<SiVercel className="text-3xl text-[#CA0000]" />} label="Vercel" />
            <SkillIcon icon={<SiKubernetes className="text-3xl text-[#CA0000]" />} label="Kubernetes" />
          </div>
        </div>

        {/* Auth & Security */}
        <div>
          <p className="text-xl font-semibold mb-2">Auth & Security</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiFirebase className="text-3xl text-[#CA0000]" />} label="Firebase Auth" />
            <SkillIcon icon={<SiAuth0 className="text-3xl text-[#CA0000]" />} label="OAuth 2.0" />
            <SkillIcon icon={<SiJsonwebtokens className="text-3xl text-[#CA0000]" />} label="JWT" />
          </div>
        </div>

        {/* Tools & Collaboration */}
        <div>
          <p className="text-xl font-semibold mb-2">Tools & Collaboration</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiGithub className="text-3xl text-[#CA0000]" />} label="GitHub Projects" />
            <SkillIcon icon={<SiGit className="text-3xl text-[#CA0000]" />} label="Git" />
            <SkillIcon icon={<SiFigma className="text-3xl text-[#CA0000]" />} label="Figma" />
          </div>
          <p className="text-sm text-gray-400 mt-2">Agile, Scrum, Planning</p>
        </div>

        {/* Testing & API Tools */}
        <div>
          <p className="text-xl font-semibold mb-2">Testing & APIs</p>
          <div className="flex justify-center flex-wrap gap-4">
            <SkillIcon icon={<SiPostman className="text-3xl text-[#CA0000]" />} label="Postman" />
            <SkillIcon icon={<SiSwagger className="text-3xl text-[#CA0000]" />} label="Swagger / OpenAPI" />
            <SkillIcon icon={<SiJest className="text-3xl text-[#CA0000]" />} label="Jest" />
            <SkillIcon icon={<SiTestinglibrary className="text-3xl text-[#CA0000]" />} label="React Testing Library" />
          </div>
          <p className="text-sm text-gray-400 mt-2"> Pytest</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
