


'use client';

import CourseContent from "@/app/components/Course/CourseContent";
import Loader from "@/app/components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { use } from "react"; // Import use for unwrapping promises

type Props = {
  params: { id: string }; // `id` is passed as part of `params` from the route
};

const Page = (props: Props) => {
  const params = use(props.params); // Unwrap the params promise
  const id = params?.id; // Safely extract `id`

  const { isLoading, error, data } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    if (data) {
      const isPurchased = data.user.courses.find(
        (item: any) => item.courseId === id
      );

      if (!isPurchased) {
        redirect("/"); // Redirect to the homepage if the course is not purchased
      }
    }
    if (error) {
      redirect("/"); // Redirect if there's an error fetching user data
    }
  }, [data, error, id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <CourseContent id={id} user={data?.user} />
        </div>
      )}
    </>
  );
};

export default Page;


