import { useState } from 'react'
import { dummyComments, dummyPosts, type Comment } from '../../../data/dummyData'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>(dummyComments)
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    body: '',
    postId: 1
  })



  const getCommentsForPost = (postId: number) => {
    return comments.filter(comment => comment.postId === postId)
  }

  const handleAddComment = () => {
    setFormData({ name: '', email: '', body: '', postId: 1 })
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newComment: Comment = {
      id: Math.max(...comments.map(c => c.id)) + 1,
      ...formData,
      createdAt: new Date().toISOString()
    }
    
    setComments([...comments, newComment])
    setIsModalOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Comments</h1>
        <Button onClick={handleAddComment} className="bg-green-600 hover:bg-green-700">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Comment
        </Button>
      </div>

      {/* Post Filter */}
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={selectedPostId === null ? "default" : "outline"}
          onClick={() => setSelectedPostId(null)}
        >
          All Posts
        </Button>
        {dummyPosts.map(post => (
          <Button 
            key={post.id}
            variant={selectedPostId === post.id ? "default" : "outline"}
            onClick={() => setSelectedPostId(post.id)}
          >
            {post.title.length > 20 ? post.title.substring(0, 20) + '...' : post.title}
          </Button>
        ))}
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {dummyPosts
          .filter(post => selectedPostId === null || post.id === selectedPostId)
          .map(post => {
            const postComments = getCommentsForPost(post.id)
            if (postComments.length === 0) return null
            
            return (
              <div key={post.id} className="space-y-4">
                <div className="border-b pb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-500">{postComments.length} comments</p>
                </div>
                
                <div className="space-y-4 ml-4">
                  {postComments.map(comment => (
                    <Card key={comment.id} className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {comment.name}
                            </Badge>
                            <span className="text-xs text-gray-500">{comment.email}</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed">{comment.body}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
      </div>

      {/* Add Comment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Add New Comment</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsModalOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post
                </label>
                <select
                  value={formData.postId}
                  onChange={(e) => setFormData({ ...formData, postId: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {dummyPosts.map(post => (
                    <option key={post.id} value={post.id}>
                      {post.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comment
                </label>
                <textarea
                  value={formData.body}
                  onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Add Comment
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Comments
