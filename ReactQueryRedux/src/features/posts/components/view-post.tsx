import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { type IPost } from '../types'
import { Button } from '@/components/ui/button'

const ViewPost = ({ post }: { post: IPost }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">View</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{post.title}</DialogTitle>
                    <DialogDescription>
                        {post.body}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button>Close</Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default ViewPost