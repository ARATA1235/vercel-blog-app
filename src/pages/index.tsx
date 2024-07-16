import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Logo from "@/components/logo";
import Nav from "@/components/nav";
import Pagenation from "@/components/pagenation";
import Posts from "@/components/posts";
import { Post } from "@/types/blog";
import { selectPosts } from "@/utils/supabase";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await selectPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <Layout>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" isImage />
      <Posts posts={posts} />
      <Pagenation nextText="次の記事へ" nextUrl="/blog" />
    </Layout>
  );
}
