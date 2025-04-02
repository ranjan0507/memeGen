import React from "react";

const About = () => {
  return (
    <div className=" bg-dark text-white flex flex-col items-center justify-start pt-12">
      <header className="text-center">
        <h1 className="text-5xl font-medium text-purple-400 mb-4">About MemeGen</h1>
        <p className="text-lg text-gray-300 max-w-lg mt-6">
          Hey there! MemeGen is a fun side project to let anyone create memes super easily. Whether you want to joke around with friends or flex your creativity, this tool has got you covered.
        </p>
      </header>

      <section className="mt-8 max-w-3xl text-gray-300">
        <h2 className="text-2xl text-purple-300 mb-2">Features</h2>
        <p className="list-disc list-inside space-y-2">
          Using MemeGen makes creating custom memes easier . You can use the local images , and convert tem into cool memes !<br/>
          MemeGen provides a ton of random meme templates . Use these templates to create awsaome new memes.
        </p>

        <h2 className="text-2xl text-purple-300 mt-6 mb-2">Technologies and Skills</h2>
        <p>
          Developing MemeGen provided me with hands-on experience with several modern tools and technologies, including:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>React Router:</strong> For seamless navigation between pages.</li>
          <li><strong>Tailwind CSS:</strong> To create a responsive and visually appealing design.</li>
          <li><strong>Daisy UI:</strong> For prebuilt and customizable UI components.</li>
          <li><strong>Lucide React:</strong> To integrate elegant and scalable icons.</li>
        </ul>
      </section>

      <footer className="absolute bottom-4 text-gray-400 text-sm">
        <p>Thanks for checking out MemeGen!</p>
      </footer>
    </div>
  );
};

export default About;