import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import Post from "./Post";
import StarRating from "./StarRating";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-8 md:mb-10">
        {post.image ? (
          <>
            <Image
              className="rounded-3xl object-cover mb-6"
              src={post.image}
              alt="cool"
              width="720"
              height="480"
            />
          </>
        ) : (
          ""
        )}
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
            {post.title}
          </h2>
          <div className="flex justify-between">
            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
              <FormattedDate date={post.date} />
            </time>
            <div className="md:hidden block">
              <StarRating rating={post.rating} />
            </div>
          </div>
        </header>
        <main
          className="
          flex
          flex-col
          justify-between
          md:flex-row
          md:items-baseline"
        >
          <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
          <div className="hidden md:block">
            <StarRating rating={post.rating} />
          </div>
        </main>
      </article>
    </Link>
  );
};

export default BlogPost;
