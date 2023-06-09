"use client";

import React from "react";
import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "../components/icons";
import project1 from "../../../public/images/profile/code-1.png";
import { motion } from "framer-motion";
import TransitionEffect from "../components/transition-effect";

interface Props {
    type: string;
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    githublink: string;
}

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githublink }: Props) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={githublink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={githublink}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, githublink }: Props) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">
                        Visit
                    </Link>
                    <Link href={githublink} target="_blank" className="w-10 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <TransitionEffect />
            <main className="w-full pb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Vu Kiet Food Website"
                                summary="A feature-rich Vu Kiet Food Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                                img={project1}
                                link="https://vukietfood.com/"
                                githublink="https://github.com/vubakiet/homesite"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Featured Project"
                                title="Portfolio"
                                summary="A feature-rich Portfolio Website using NextJS 13, Tailwind CSS, Frammer-motion for develop portfolio for myself."
                                img={project1}
                                link="https://vubakiet.vercel.app/"
                                githublink="https://github.com/vubakiet/portfolio"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Featured Project"
                                title="Ecommerce SGU"
                                summary="A feature-rich Ecommerce Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                                img={project1}
                                link="https://github.com/vubakiet/ecsgu"
                                githublink="https://github.com/vubakiet/ecsgu"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="Hotel-manager application"
                                summary="A feature-rich an application for Hotel-manager using Java with Object Oriented Programing."
                                img={project1}
                                link="https://github.com/vubakiet/hotel-management-oop"
                                githublink="https://github.com/vubakiet/hotel-management-oop"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Featured Project"
                                title="Male-Fastion"
                                summary="A feature-rich a Ecommerce Website using NextJS 12 and NodeJS for develop an Ecommerce Store to sell product."
                                img={project1}
                                link="male-fashion-client-ui.vercel.app"
                                githublink="https://github.com/thienv29/male-fashion-client-ui"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Featured Project"
                                title="SGU-Community"
                                summary="A feature-rich a Social Website using NextJS 13 and NestJS for develop a website community for school."
                                img={project1}
                                link="https://sgu-community.vercel.app/"
                                githublink="https://github.com/thienv29/sgu-community-client"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
