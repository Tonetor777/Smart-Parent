import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Majestic Academy
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto text-center">
            Bridging the Gap in Education
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-3">
    <h3 className="text-lg leading-6 font-semibold text-gray-900">
        Our Mission
    </h3>
    <p className="mt-2 text-base leading-6 text-gray-600">
        At Majestic, our mission is to empower parents and educators through technology, providing them with the tools and resources they need to actively participate in their child's education journey. We strive to bridge the gap between home and school, promoting collaboration and student success. We believe that every child deserves access to quality education, and by empowering parents with digital skills and knowledge, we can create a more inclusive and supportive learning environment. Through SmartEthios, we aim to revolutionize parental involvement in education, fostering stronger connections between parents, educators, and students, and ultimately leading to better academic outcomes and brighter futures for Ethiopian children.
    </p>
</div>

<div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-3">
    <h3 className="text-lg leading-6 font-semibold text-gray-900">
        Our Vision
    </h3>
    <p className="mt-2 text-base leading-6 text-gray-600">
        Our vision for SmartEthios goes beyond just improving communication between parents and educators. We envision a future where every child in Ethiopia has access to quality education and equal opportunities for success. By fostering strong partnerships between parents, educators, and communities, we aim to create a supportive learning environment that nurtures the unique talents and abilities of every child. We believe that by empowering parents with digital skills and knowledge, and by leveraging technology to enhance educational outcomes, we can contribute to building a brighter future for Ethiopian children and the nation as a whole.
    </p>
</div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Key Features
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-gray-900">
                  Parent-Teacher Interaction
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Teachers can message parents about daily activities of the child, and also suggest ideas on how to handle their child in regards to their education.
                  Parents can reply to teachers as well, creating an effective communication between parents and teachers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-gray-900">
                  Homework and Assignments
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Teachers can upload homework assignments and classwork
                  materials for each student. Parents can view and download the
                  assigned tasks for their children.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18M3 6h18M3 18h18"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-gray-900">
                  Exam Dates
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Teachers can input up-comming Exams, 
                  which will be accessible to parents. Parents can track their
                  child&apos;s important academic dates.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 11a9 9 0 0118 0v4a5 5 0 01-5 5H8a5 5 0 01-5-5v-4a9 9 0 0118 0v4h0"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-gray-900">
                  Resource Section
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  A repository of educational resources available for parents to
                  access. Resources may include study guides, educational
                  videos, and supplementary materials to support learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl leading-6 font-bold text-gray-900">
            Future Features
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
    <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h4 className="text-lg leading-6 font-semibold text-gray-900">
            Integration with the School System
        </h4>
        <p className="mt-2 text-base leading-6 text-gray-600">
            Integrate the app with existing school management systems, such as student information systems (SIS) or learning management systems (LMS), to streamline data sharing and reduce manual entry. This will enable seamless access to student records, course materials, and grades for both parents and educators.
        </p>
    </div>
    <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h4 className="text-lg leading-6 font-semibold text-gray-900">
            Language Localization
        </h4>
        <p className="mt-2 text-base leading-6 text-gray-600">
            Support multiple languages to accommodate diverse parent communities. This ensures that language barriers do not hinder communication between parents and educators. Parents will have the option to choose their preferred language for accessing the platform, making it more accessible and user-friendly.
        </p>
    </div>
    <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h4 className="text-lg leading-6 font-semibold text-gray-900">
            Calendar Integrity
        </h4>
        <p className="mt-2 text-base leading-6 text-gray-600">
            Integrate a comprehensive calendar feature to display school events, holidays, exam schedules, and parent-teacher conferences. Parents can sync these events with their calendars for convenience, ensuring they stay informed about important dates and deadlines. The calendar will provide a centralized view of all relevant activities, promoting better organization and planning.
        </p>
    </div>
    <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
        <h4 className="text-lg leading-6 font-semibold text-gray-900">
            Group and Private Chat
        </h4>
        <p className="mt-2 text-base leading-6 text-gray-600">
            Enable private chat for confidential one-to-one conversations between individual parents and educators. This feature will allow parents to address specific concerns or inquiries privately with teachers, fostering personalized communication. Additionally, implement group chat functionality to facilitate communication and collaboration among parents, educators, and administrators. Group chats can be used for discussing school-related matters, sharing resources, and organizing events, enhancing community engagement and involvement.
        </p>
    </div>
</div>

        </div>

        <div className="mt-12">
    <h3 className="text-lg leading-6 font-medium text-gray-900">
        Target Users
    </h3>
    <p className="mt-2 text-base leading-6 text-gray-600">
        SmartEthios is designed to serve a diverse range of users within the Ethiopian education community:
    </p>
    <ul className="mt-4 text-base leading-6 text-gray-700">
        <li className="mt-4 flex items-start">
            <span className="h-6 w-6 flex items-center justify-center bg-indigo-500 rounded-full flex-shrink-0 mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            </span>
            <span className="flex-grow">Parents: Busy parents seeking to actively engage in their child's education journey, track their progress, and support their learning at home.</span>
        </li>
        <li className="mt-4 flex items-start">
            <span className="h-6 w-6 flex items-center justify-center bg-indigo-500 rounded-full flex-shrink-0 mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            </span>
            <span className="flex-grow">Educators: Teachers and school staff members looking for efficient ways to communicate with parents, share educational resources, and provide timely updates on student progress.</span>
        </li>
        <li className="mt-4 flex items-start">
            <span className="h-6 w-6 flex items-center justify-center bg-indigo-500 rounded-full flex-shrink-0 mr-3">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            </span>
            <span className="flex-grow">School Administrators: Administrators responsible for managing school operations and fostering collaboration between parents, educators, and students.</span>
        </li>
    </ul>
</div>

      </div>
    </div>
  );
};

export default About;
