import React, { useEffect } from 'react'
import backend from '../apis/backend';

export default function ReservedItems() {

    //use a state from parent to trigger the state in LatestItem
    //const {  } = useContext(ParentContext);

    useEffect(() => {
        reservedItem();
        // eslint-disable-next-line
    }, []);

    let reservedItem = async () => {
        //call latest api
        let items = await backend.get('/item/sort');

        return items;
    }

    let url = 'https://www.att.com/catalog/en/idse/Apple/Apple%20iPhone%2011/Red-hero-zoom.png'

    return (
        <div className="container left-align">
            <div className="row">
                <div className="col s6 offset-s2">
                    <h2>Reserved Items </h2>
                </div>
            </div>

            <div className="row">
                <div className="col s6 offset-s2">
                    <div className='card'>
                        <span>Iphone 10</span> <br></br>
                        <img
                            alt='item-photo'
                            src={url}
                            style={{ height: '15rem' }}
                        >
                        </img>
                        <p style={{ margin: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <a class="btn-floating  btn-lg pulse"><i class="material-icons">menu</i></a>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col s6 offset-s2">
                    <div className='card'>
                        <span>Iphone 10</span> <br></br>
                        <img
                            alt='item-photo'
                            src={url}
                            style={{ height: '15rem' }}
                        >
                        </img>
                        <p style={{ margin: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <a class="btn-floating  btn-lg pulse"><i class="material-icons">menu</i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6 offset-s2">
                    <div className='card'>
                        <span>Iphone 10</span> <br></br>
                        <img
                            alt='item-photo'
                            src={url}
                            style={{ height: '15rem' }}
                        >
                        </img>
                        <p style={{ margin: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <a class="btn-floating  btn-lg pulse"><i class="material-icons">menu</i></a>
                    </div>
                </div>
            </div>
        </div >
    )
}