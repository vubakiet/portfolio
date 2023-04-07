"use client";

import React from "react";
import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "../components/icons";
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

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
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={githublink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={githublink}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
            <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={githublink} target="_blank" className="text-lg font-semibold underline">
                        Visit
                    </Link>
                    <Link href={githublink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <main className="w-full pb-16 flex flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
                <div className="grid grid-cols-12 gap-24 gap-y-32">
                    <div className="col-span-12">
                        <FeaturedProject
                            type="Featured Project"
                            title="Vu Kiet Food Website"
                            summary="A feature-rich Vu Kiet Food Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                            img={project1}
                            link="/"
                            githublink="/"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project
                            type="Featured Project"
                            title="Vu Kiet Food Website"
                            summary="A feature-rich Vu Kiet Food Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                            img={project1}
                            link="/"
                            githublink="/"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project
                            type="Featured Project"
                            title="Vu Kiet Food Website"
                            summary="A feature-rich Vu Kiet Food Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                            img={project1}
                            link="/"
                            githublink="/"
                        />
                    </div>
                    <div className="col-span-12">
                        <FeaturedProject
                            type="Featured Project"
                            title="Vu Kiet Food Website"
                            summary="A feature-rich Vu Kiet Food Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                            img={project1}
                            link="/"
                            githublink="/"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project
                            type="Featured Project"
                            title="Vu Kiet Food Website"
                            summary="A feature-rich Vu Kiet Food Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                            img={project1}
                            link="/"
                            githublink="/"
                        />
                    </div>
                    <div className="col-span-6">
                        <Project
                            type="Featured Project"
                            title="Vu Kiet Food Website"
                            summary="A feature-rich Vu Kiet Food Website using HTML, CSS, Javascript and PHP for develop Ecommerce Store to sell product."
                            img={project1}
                            link="/"
                            githublink="/"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default Projects;