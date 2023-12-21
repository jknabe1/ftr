export interface Post {
    title: string;
    image: any,
    overview: string;
    author: string;
    content: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
  }

  export interface Author {
    name: string;
    bio: string;
    image: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
  }