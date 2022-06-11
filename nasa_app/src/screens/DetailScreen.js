import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../actions/nasaActions';
import { LoadingBox } from '../components/LoadingBox';
import { AlertMessage } from '../components/AlertMessage';


export const DetailScreen = () => {

    const params = useParams();

    const date = params.date

    const dispatch = useDispatch();

    const getPostByDate = useSelector((state) => state.getPostByDate);
    const { loading, error, post } = getPostByDate;

    useEffect(() => {
        dispatch(getPost(date));
    }, [dispatch, date])

    return (
        <>
            <div className='container-fluid'>
                {loading ? (
                    <LoadingBox variant={"primary"} />
                ) :
                    error ? (
                        <AlertMessage variant={"danger"} message={error} />
                    ) : (
                        post && (
                            <>
                                <h1>{post.title}</h1>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img className="img-fluid" src={post.url} alt={post.title} />
                                    </div>
                                    <div className='col-6'>
                                        <p>{post.explanation}</p>
                                        <Link to="/" className="btn btn-primary">Volver</Link>
                                    </div>
                                </div>
                            </>
                        )
                    )
                }
            </div>
        </>
    )
}
