import React, { useEffect } from 'react'
import sampleimage from '../../assets/sample-images/iphone.png';
import backend from '../../apis/backend';

export default function LatestItems() {

    //use a state from parent to trigger the state in LatestItem
    //const {  } = useContext(ParentContext);

    useEffect(() => {
        handleLatestItem();
        // eslint-disable-next-line
    }, []);

    let handleLatestItem = async () => {
        //call latest api
        let items = await backend.get('/item/sort');

        return items;
    }

    return (
        <div>
            <h2>Latest Items </h2>
            <div className="row fullscreen-container">
                <div className="col s4">
                    <h4>Iphone 10</h4>
                    <img
                        className="responsive-img"
                        alt='item-photo'
                        src={sampleimage}
                        style={{ height: '15rem' }}
                    >
                    </img>
                    <p style={{ margin: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque.</p>
                    <a href='#'> Reserve for Free</a>
                </div>
                <div className="col s4">
                    <h4>Iphone 10</h4>
                    <img
                        className="responsive-img"
                        alt='item-photo'
                        src={sampleimage}
                        style={{ height: '15rem' }}
                    >
                    </img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque.</p>
                    <a href='#'> Reserve for Free</a>
                </div>
                <div className="col s4">
                    <h4>Iphone 10</h4>
                    <img
                        className="responsive-img"
                        alt='item-photo'
                        src={sampleimage}
                        style={{ height: '15rem' }}
                    >
                    </img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque.</p>
                    <a href='#'> Reserve for Free</a>
                </div>
            </div>
        </div>
    )
}


