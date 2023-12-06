export interface Post {
    title: string;
    overview: string;
    author: string;
    content: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
  }