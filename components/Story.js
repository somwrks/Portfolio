import React, { useEffect, useState, useRef } from 'react';
import Posts from './Posts';
import posts from "../public/post.json";

export default function Story() {
  const [visiblePosts, setVisiblePosts] = useState({});
  const postRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisiblePosts(prev => ({ ...prev, [entry.target.dataset.index]: true }));
          } else {
            setVisiblePosts(prev => ({ ...prev, [entry.target.dataset.index]: false }));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    postRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      postRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full text-white">
      {posts[0] ? posts.map((post, index) => (
        <div
          key={index}
          data-index={index}
          ref={el => postRefs.current[index] = el}
          className={`post flex flex-col md:items-center w-full text-white ${visiblePosts[index] ? 'fade-in' : 'fade-out'}`}
        >
          <Posts post={post} />
        </div>
      )) : <div className='flex text-2xl mt-5'>Nothing to see here...</div>}
    </div>
  );
}
