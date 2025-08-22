export interface Post {
  id: number
  title: string
  body: string
  userId: number
  createdAt: string
}

export interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
  createdAt: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
  createdAt: string
}

export const dummyPosts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    body: "React is a JavaScript library for building user interfaces. It's component-based and declarative, making it perfect for creating interactive UIs.",
    userId: 1,
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Understanding Redux Toolkit",
    body: "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux use cases.",
    userId: 2,
    createdAt: "2024-01-16T14:30:00Z"
  },
  {
    id: 3,
    title: "React Query Best Practices",
    body: "React Query is a powerful library for managing server state in React applications. Here are some best practices to follow.",
    userId: 1,
    createdAt: "2024-01-17T09:15:00Z"
  },
  {
    id: 4,
    title: "TypeScript with React",
    body: "TypeScript adds static typing to JavaScript, making your React applications more robust and maintainable.",
    userId: 3,
    createdAt: "2024-01-18T16:45:00Z"
  },
  {
    id: 5,
    title: "Modern CSS with Tailwind",
    body: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.",
    userId: 2,
    createdAt: "2024-01-19T11:20:00Z"
  }
]

export const dummyComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    name: "John Doe",
    email: "john@example.com",
    body: "Great article! React has really changed how I think about building UIs.",
    createdAt: "2024-01-15T12:00:00Z"
  },
  {
    id: 2,
    postId: 1,
    name: "Jane Smith",
    email: "jane@example.com",
    body: "I'm new to React and this helped a lot. Thanks for sharing!",
    createdAt: "2024-01-15T15:30:00Z"
  },
  {
    id: 3,
    postId: 2,
    name: "Mike Johnson",
    email: "mike@example.com",
    body: "Redux Toolkit is a game changer. Much simpler than vanilla Redux.",
    createdAt: "2024-01-16T16:00:00Z"
  },
  {
    id: 4,
    postId: 3,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    body: "React Query is amazing for data fetching. Great tips here!",
    createdAt: "2024-01-17T10:45:00Z"
  },
  {
    id: 5,
    postId: 4,
    name: "David Brown",
    email: "david@example.com",
    body: "TypeScript + React is the perfect combination for large projects.",
    createdAt: "2024-01-18T18:20:00Z"
  }
]

export const dummyUsers: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    },
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    },
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    },
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    }
  }
]

export const dummyTodos: Todo[] = [
  {
    id: 1,
    userId: 1,
    title: "Learn React basics",
    completed: true,
    createdAt: "2024-01-10T08:00:00Z"
  },
  {
    id: 2,
    userId: 1,
    title: "Build a todo app",
    completed: true,
    createdAt: "2024-01-12T10:00:00Z"
  },
  {
    id: 3,
    userId: 1,
    title: "Learn Redux",
    completed: false,
    createdAt: "2024-01-15T14:00:00Z"
  },
  {
    id: 4,
    userId: 2,
    title: "Setup development environment",
    completed: true,
    createdAt: "2024-01-08T09:00:00Z"
  },
  {
    id: 5,
    userId: 2,
    title: "Read React documentation",
    completed: false,
    createdAt: "2024-01-14T16:00:00Z"
  },
  {
    id: 6,
    userId: 3,
    title: "Create portfolio website",
    completed: false,
    createdAt: "2024-01-16T11:00:00Z"
  },
  {
    id: 7,
    userId: 3,
    title: "Learn TypeScript",
    completed: true,
    createdAt: "2024-01-11T13:00:00Z"
  }
]
