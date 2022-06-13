import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../actions/nasaActions';
import { LoadingBox } from '../components/LoadingBox';
import { AlertMessage } from '../components/AlertMessage';
import { ToolBar } from '../components/ToolBar';


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

                <div className="row mb-3">
                    <ToolBar titulo={"Detalle"} hitos={[{ titulo: "Dashboard", enlace: "/" }, { titulo: "Detalle", enlace: "#" }]} />
                </div>

                {loading ? (
                    <LoadingBox variant={"primary"} />
                ) :
                    error ? (
                        <AlertMessage variant={"danger"} message={error} />
                    ) : (
                        post && (
                            <>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <img className="img-fluid" src={post.url} alt={post.title} />
                                    </div>
                                    <div className='col-12 col-md-6 py-3 pt-md-0'>
                                        <h4>{post.title}</h4>
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
