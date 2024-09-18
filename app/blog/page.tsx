import LatestPosts from '@/components/home/latest-post'
import React from 'react'

export default function Blog() {
  return (
    <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
          <div>
            <LatestPosts />
          </div>
          <div className="h-screen">
           <h1>Top Categories</h1>
           {/* <TopCategories /> */}
          </div>
          <div>
           <h1>Popular Posts</h1>
           {/* <PopularPosts /> */}
          </div>
        </main>
  )
}
