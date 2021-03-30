import React from 'react';
import { projects } from '../../constants/constant'
import Card from './Card'
export default function ProjectSection() {
    return (
        <div className="mx-auto mt-10">
        <div className="mx-auto max-w-sm ">
        <h1 className="text-2xl xl:text-3xl overflow-ellipsis overflow-hidden uppercase text-black text-center">
          {"Projects"}
        </h1>
        <hr className="border-t-2 my-2" />
      </div>
      <div class="flex flex-rows flex-wrap justify-center items-stretch mt-10">
            {(projects || []).map((project, index) => (
                <Card key={index} data={project}/>
            ))}
        </div>
    </div>
    )
}