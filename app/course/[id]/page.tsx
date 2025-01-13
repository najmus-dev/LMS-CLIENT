'use client';

import React from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

const Page = async ({ params }: any) => {
    const resolvedParams = await params; // Unwrap the params promise
    return (
        <div>
            <CourseDetailsPage id={resolvedParams.id} />
        </div>
    );
};

export default Page;

// 'use client'
// import React from "react";
// import CourseDetailsPage from "../../components/Course/CourseDetailsPage";


// const Page = ({params}:any) => {
//     return (
//         <div>
//             <CourseDetailsPage id={params.id} />
//         </div>
//     )
// }

// export default Page;
 