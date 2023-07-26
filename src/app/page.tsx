'use client'

import React from 'react'
import Link from 'next/link';
import Loader from './loading';
import { getProjects } from '@/services';
import { ProjectSchema } from '@/@types';

export default function Home() {
  const [loading, setLoading] = React.useState(false)
  const [projects, setProjetcs] = React.useState<ProjectSchema[]>([])

  const getAllProjects = async () => {
    setLoading(true)
    try {
      const projects = await getProjects();
      setProjetcs(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getAllProjects()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-14">
      <ul>
        {loading ? (
          (<Loader />)
        ) : projects
          .sort((a, b) => a.order - b.order)
          .map((project: ProjectSchema) => (
            <li className='flex justify-center items-center' key={project.id}>
              <Link className='w-80 text-center text-xl font-bold py-2 px-16 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2' href={`project/${project.id}`}>{project.project_name}</Link>
            </li>
          ))}
      </ul>
    </main>
  )
}
