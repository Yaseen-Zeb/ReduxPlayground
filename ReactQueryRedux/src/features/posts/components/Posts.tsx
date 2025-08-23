
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useGetPosts } from '../api/queries'
import Loader from '@/components/ui/loader'
import ViewPost from './view-post'
import { PostForm } from './post-form'
import toast from 'react-hot-toast'
import Error from '@/components/ui/error'
import { Paging } from '@/components/ui/paging'
import { useSearchParams } from 'react-router-dom'

const Posts = () => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const { data: posts, isLoading, isError, error } = useGetPosts(page, limit);

  if (isLoading) {
    return <Loader className="h-[70vh]" />
  }

  if (isError) {
    return <Error message={error.message} className='h-[70vh]' />
  }

  if (!posts?.data) {
    toast.error('No posts found')
    return <div>No posts found</div>
  }



  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
        <PostForm type="add" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.data.map((post) => (
          <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">{post.title}</h3>
                <p className="text-gray-600 line-clamp-4">{post.body}</p>
              </div>



              <div className="flex space-x-2 pt-4 border-t">
                <ViewPost post={post} />
                <PostForm type="edit" id={post.id} post={post} />
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                // onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Paging totalRows={posts.totalRows} />
    </div>
  )
}

export default Posts
