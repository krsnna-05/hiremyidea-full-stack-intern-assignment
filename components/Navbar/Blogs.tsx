import Image from "next/image";
import { NavigationMenuContent } from "../ui/navigation-menu";
import { BLOG_ITEMS } from "@/lib/contanst";

const blogCardClass =
  "rounded-xl cursor-pointer flex items-start gap-4 p-2 transition-colors hover:bg-[#f5faf6]";

type BlogsProps = {
  mobile?: boolean;
};

const Blogs = ({ mobile = false }: BlogsProps) => {
  if (mobile) {
    return (
      <div className="space-y-3">
        <div className="space-y-3">
          {BLOG_ITEMS.map((blog) => (
            <article key={blog.id} className={blogCardClass}>
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                width={96}
                height={96}
                className="h-20 w-20 min-h-20 min-w-20 max-h-20 max-w-20 flex-none rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-neutral-900">
                  {blog.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-8 min-w-120">
        {BLOG_ITEMS.map((blog) => (
          <article key={blog.id} className={blogCardClass}>
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              width={96}
              height={96}
              className="h-24 w-24 min-h-24 min-w-24 max-h-24 max-w-none flex-none rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 className="text-[13px] leading-snug text-neutral-900">
                {blog.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 font-light">
                {blog.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
