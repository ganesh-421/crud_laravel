import React from 'react'
import Authenticated from '@/Layouts/Authenticated';
import { inertia } from '@inertiajs/inertia';
import {Head, usePage, Link} from '@inertiajs/inertia-react';
import { data } from 'autoprefixer';

export default function Dashboard(props) {
    const { posts } = usePage().props; //extract the posts from the page props

    function destroy(e) {
        if(confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", e.currentTarget.id));
        }
    }
    return(
        <Authenticated 
            auth = {props.auth}
            errors = {props.errors}
            header = {<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
        <Head title="Posts" />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div className="flex intems-center justify-between mb-6">
                            <Link className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                            href={route("posts.index")}>
                                Back
                            </Link>
                        </div>
                        <form className='createForm' onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label className=''>Title</label>
                                    <input
                                        type="text"
                                        className='w-full px-4 py-2'
                                        label="Title"
                                        name='title'
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)} 
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Authenticated>
    );
}