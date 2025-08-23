import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="lg:pl-64">
            <Navbar />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default RootLayout