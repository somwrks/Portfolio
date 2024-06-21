// [slug].js
import React from 'react'
import data from "@/public/project.json";
import Template from '@/components/Template'; // Assuming you have a Template component

export async function getServerSideProps(context) {
  const { slug } = context.params;
  return {
    props: { slug }, // will be passed to the page component as props
  }
}

export default function Position({ slug }) {
  const filteredData = data.find((item) => item.title.trim().toLowerCase().replace(/\s+/g, '') === slug);

  if (!filteredData) {
    return <div>Data not found</div>; // Handle the case where no data matches the slug
  }

  return (
    <Template
      img1={filteredData.img1 || ""}
      icon={filteredData.icon || ""}
      img2={filteredData.img2 || ""}
      img3={filteredData.img3 || ""}
      title={filteredData.title}
      link={filteredData.link}
      detail1={filteredData.detail1}
      detail2={filteredData.detail2}
      detail3={filteredData.detail3}
      skills={filteredData.skills}
      category={filteredData.category}
    />
  )
}
