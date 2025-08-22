import { Activity, MessageCircle, Users, X   } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {


  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
            <X
              size={24}
              className="w-6 h-6 text-gray-800"
            />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            {/* Posts */}
            <Card className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <CardContent className="p-0 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Posts</p>
                  <p className="text-2xl font-bold text-blue-800">100</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MessageCircle size={24} className="w-6 h-6 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CardContent   className="p-0 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Comments</p>
                  <p className="text-2xl font-bold text-green-800">100</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <MessageCircle size={24} className="w-6 h-6 text-green-600" />
                </div>
              </CardContent>
            </Card>

            {/* Users */}
            <Card className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <CardContent className="p-0 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Users</p>
                  <p className="text-2xl font-bold text-purple-800">100</p>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users size={24} className="w-6 h-6 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            {/* Todos */}
            <Card className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <CardContent className="p-0 ">
                <div className='flex items-center justify-between'>
                  <div>
                  <p className="text-sm font-medium text-orange-600">Todos</p>
                  <p className="text-2xl font-bold text-orange-800">100</p>
                  </div>
                 
                 <div className="p-2 bg-orange-100 rounded-lg">
                  <Activity size={24} className="w-6 h-6 text-orange-600" />
                </div>
                </div>

                <div className="flex space-x-2 mt-1">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      100 done
                    </span>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                      0 pending
                    </span>
                  </div>
                


              </CardContent>
              </Card>
          </div>


        </div>
      </div>
    </>
  )
}

export default Sidebar
