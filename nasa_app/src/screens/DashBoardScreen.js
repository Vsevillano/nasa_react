import React, { useEffect } from 'react'
import { DateCell } from '../components/DateCell';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/nasaActions';
import { LoadingBox } from '../components/LoadingBox';
import { AlertMessage } from '../components/AlertMessage';
import { ToolBar } from '../components/ToolBar';
import { Link } from 'react-router-dom';

export const DashBoardScreen = () => {

    const dispatch = useDispatch();
    const postsList = useSelector((state) => state.postsList);
    const { loading, error, posts } = postsList;

    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch])

    return (

        <>
            <div className='container-fluid py-4'>
                <div className="row mb-3">
                    <ToolBar titulo={"Dashboard"} hitos={[{ titulo: "Dashboard", enlace: "/" }]} />
                </div>

                <div className='row'>
                    {loading ? (
                        <LoadingBox variant={"primary"} />
                    ) :
                        error ? (
                            <AlertMessage variant={"danger"} message={error} />
                        ) : (
                            posts.map((post, i) => (
                                <div className="col-12 col-md-4 px-md-2 py-3" key={i}>
                                <Link to={`/detail/${post.date}`} className="text-decoration-none text-reset" >
                                    <DateCell date={post.date} image={post.url} title={post.title} />
                                </Link>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}
