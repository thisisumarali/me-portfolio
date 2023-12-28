import project from "../../../my-sanity-project/schemas/project";
import { client } from "../lib/sanity"
import Image from "next/image"

interface Data {
    title: string,
    overview: string,
    link: string,
    _id: string,
    imageUrl: string,
}
async function getProjects() {
    const query = `*[_type == "project"]{
        title,
          overview,
          link,
          _id,
          "imageUrl": image.asset->url
      }`
    const data = await client.fetch(query)
    return data;

}
const page = async () => {
    const data: Data[] = await getProjects()

    return (
        <div className='divide-y divide-gray-200 dark:divide-gray-700 px-4'>
            <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
                <h1 className='text-3xl font-extrabold  leading-9 tracking-tight text-black dark:text-white  sm:text-4xl sm:leading-10 md:leading-14 '>My Projects</h1>
            </div>
            <div className='grid gap-y-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10 md:px-12 px-8 lg:px-16 xl:px-24 pt-16 py-8'>
                {data.map((project) => (
                    <article key={project._id} className="overflow-hidden dark:border-zinc-600 rounded-sm border border-gray-100 bg-background shadow-lg  dark:shadow-primary/10 shadow-teal-100">
                        <div className="h-56 w-full relative">
                            <Image fill src={project.imageUrl} alt="Image of the project"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 sm:p-6">
                            <a href={project.link} target="_blank">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </a>
                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {project.overview}
                            </p>
                            <a href={project.link} target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Click here to view!
                                <span className="block transition-all group-hover:ms-0.5">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default page