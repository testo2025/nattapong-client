import React, { useEffect, useState } from "react";
import PostService from "./../services/post.service";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    PostService.get().then((res) => {
      setPosts(res.data);
    });
  };

  const fakeUsers = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "David Smith" },
    { id: 3, name: "Emma Brown" },
    { id: 4, name: "George Miller" },
    { id: 5, name: "Hana Williams" },
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-2xl p-4">
        <div className="mb-4">
          <div className="flex overflow-x-auto space-x-4 px-2 py-2">
            {fakeUsers.map((u) => (
              <div key={u.id} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full p-0.5"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold"></div>
                </div>
                <p className="text-xs text-gray-700 mt-1">{u.name}</p>
              </div>
            ))}
          </div>
        </div>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">ไม่พบโพสต์</p>
        ) : (
          posts.map((p, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <div
                  className="w-12 h-12 rounded-full p-0.5"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                    ?
                  </div>
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="font-semibold text-gray-900 me-1">
                      {p.author.name}
                    </p>
                    <p className="text-xs text-gray-500">• 2 ชม.</p>
                  </div>
                </div>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">{p.title}</h2>
              <p className="text-gray-700">{p.content}</p>
              <div className="mt-3 flex space-x-4 text-gray-500">
                <button className="hover:text-blue-500">
                  <i class="fa-regular fa-heart"></i> 999
                </button>
                <button className="hover:text-blue-500">
                  <i class="fa-regular fa-message"></i> 999
                </button>
              </div>
              <p className="text-gray-700 mt-1.5">เพิ่มความคิดเห็น</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Post;
