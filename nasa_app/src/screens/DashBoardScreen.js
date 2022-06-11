import React, { useEffect } from 'react'
import { DateCell } from '../components/DateCell';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/nasaActions';
import { LoadingBox } from '../components/LoadingBox';
import { AlertMessage } from '../components/AlertMessage';

export const DashBoardScreen = () => {

    const dispatch = useDispatch();
    const postsList = useSelector((state) => state.postsList);
    const { loading, error, posts } = postsList;



    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch])

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <h1>Dashboard</h1>
                    {loading ? (
                        <LoadingBox variant={"primary"} />
                    ) :
                        error ? (
                            <AlertMessage variant={"danger"} message={error}/>
                        ) : (
                            posts.map((post, i) => (
                                <div className="col-12 col-md-4 px-md-2 py-3" key={i}>
                                    <DateCell key={i} date={post.date} image={post.url} title={post.title} />
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}
